"use client";

import BusinessAndSearch from "../../components/BusinessAndSearch";
import BusinessSections from "../../components/BusinessSections";
import HeroSection from "../../components/Heropage";
import TopPicks from "../../components/Heropage-Section1";;
import ReliabilitySection from "../../components/ReliabilitySection";
import ReviewsSection from "../../components/ReviewsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <TopPicks />
      <BusinessSections />
      <ReliabilitySection />
      <ReviewsSection />
      <BusinessAndSearch />
    </main>
  );
}
