import React from "react";
import { AppCard } from "../components/AppCard";
import Header from "../components/Header";

const Apps = () => {
  const apps = [
    {
      name: "LinkedIn",
      image: "/images/linkedin.png",
      email: "Prarthanagade25@gmail.com",
      username: "Prarthana Gade",
    },
    {
      name: "Instagram",
      image: "/images/instagram.png",
      email: "Prarthanagade25@gmail.com",
      username: "Prarthana Gade",
      status: "disconnect",
    },
    {
      name: "Reddit",
      image: "/images/reddit.png",
      email: "Prarthanagade25@gmail.com",
      username: "Prarthana Gade",
    },
    {
      name: "Facebook",
      image: "/images/facebook.png",
      email: "Prarthanagade25@gmail.com",
      username: "Prarthana Gade",
      showButton: true,
    },
    {
      name: "Whatsapp",
      image: "/images/whatsapp.png",
      email: "Prarthanagade25@gmail.com",
      username: "Prarthana Gade",
      showButton: true,
    },
    {
      name: "Twitter",
      image: "/images/twitter.png",
      email: "Prarthanagade25@gmail.com",
      username: "Prarthana Gade",
      showButton: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <div className="mt-6 mb-20">
        <Header />
      </div>

      <div className="text-3xl font-[Fredoka] font-medium mb-8 px-4 py-2">
        Connected Apps
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10">
        {apps.map((app, index) => (
          <AppCard key={index} {...app} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
