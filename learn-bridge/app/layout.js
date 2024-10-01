import { Inter } from "next/font/google";


import NavBar from "/components/navbar";
import { Providers } from './providers';
import { AuthProvider } from "/lib/auth";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LearnBridge",
  description: "A collaboration environment for students",
};

//  Use a session Provider to check if the user is logged in.
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
