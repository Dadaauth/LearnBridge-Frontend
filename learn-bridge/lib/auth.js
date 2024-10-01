"use client"
import { createContext, useContext, useEffect, useState } from "react";

import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Automatically check authentication on initial load
  useEffect(() => {

    const checkAuth = async () => {
      try {
        if (!loading) return
        const access_token = Cookies.get("access_token");
        const refresh_token = Cookies.get("refresh_token");

        if (access_token != null && access_token != "") {
            console.log(access_token);
            let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check`, {
              headers: {
                "Authorization": `Bearer ${access_token}`
              }
            });
            if (!res.ok) {
                //  refresh the access_token using a refresh token.
                let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
                  headers: {
                    "Authorization": `Bearer ${refresh_token}`
                  }
                });

                if (res.ok) {
                  let { data } = await res.json();
                  Cookies.set("access_token", data["access_token"]);
                  localStorage.setItem("user", JSON.stringify(data["user"]));
                  let user = localStorage.getItem("user");
                  user = (user == "")? null: JSON.parse(user)
                  setUser(user);
                }
            } else {
                // The token works. Save the user to local storage
                let { data } = await res.json();
                localStorage.setItem("user", JSON.stringify(data["user"]))
                let user = localStorage.getItem("user");
                user = (user == "")? null: JSON.parse(user)
                setUser(user);
            }
        }

        //  return user from the check route.
      } catch (err) {
        console.error("Not authenticated", err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {

      let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (res.ok) {
        res = await res.json();
        let { data } = res;
        Cookies.set("access_token", data["access_token"]);
        Cookies.set("refresh_token", data["refresh_token"]);
        localStorage.setItem("user", JSON.stringify(data["user"]));
        setUser(data["user"]);
      }

    } catch (err) {
      console.error("Login failed", err);
    }
  }

  const logout = () => {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      localStorage.removeItem("user");
      setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {/* {!loading && children} */}
      {children}
    </AuthContext.Provider>
  );
}
