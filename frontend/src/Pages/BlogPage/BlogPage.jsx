import HeroSection from "Components/Blog/HeroSection";
import Influencers from "Components/Blog/Influencers";
import LatestArticles from "Components/Blog/LatestArticles";
import Newsletter from "Components/Blog/Newsletter";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";
import {  mockArticles } from "DB/db";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredArticles = selectedCategory
    ? mockArticles.filter((article) => article.category === selectedCategory)
    : mockArticles;
    const pathname = useLocation().pathname;

  return (
    <div className="min-h-screen bg-white max-lg:pt-16">
      {/* Hero Section */}
      <HeroSection mockArticles={mockArticles} />

      {/* Latest Articles Section */}
      <LatestArticles
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredArticles={filteredArticles}
      />

      {/* Influencers Section */}
      <Influencers />

      {/* Newsletter Section */}
      <Newsletter  />

      {pathname === "/login" || pathname === "/register" ? null : (
        <PhoneNavbar />
      )}
    </div>
  );
}
