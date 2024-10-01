"use client"
import { redirect } from "next/navigation";
import { useAuth } from "/lib/auth";

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <p>Loading...</p>
    if (user == null && !loading) {
        // console.log(user, loading);
        redirect("/auth/signin");
    }
    return (
        <>
            {children}
        </>
    );
}