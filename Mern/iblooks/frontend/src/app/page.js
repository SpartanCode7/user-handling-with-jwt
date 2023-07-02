"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Footer from "@/components/organisms/Footer/Footer";
import HomePage from "@/components/templates/Home/HomePage";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <main className="main">
      {isLoggedIn ? (
        <>
          <h1 className="text-9xl">Hello Admin</h1>
        </>
      ) : ( <></> )}
        <>
          <Navbar />
          <HomePage />
          <Footer />
        </>
      
    </main>
  );
}

