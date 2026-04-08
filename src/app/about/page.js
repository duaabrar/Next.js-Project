"use client";

import AboutUs from "../../../AboutComponents/Aboutus";
import FAQ from "../../../AboutComponents/FAQ";
import HeroSectionabout from "../../../AboutComponents/HeroSectionabout";
import SearchSection from "../../../AboutComponents/SearchSection";
import TeamSection from "../../../AboutComponents/TeamSection";
import Testimonials from "../../../AboutComponents/Testimonials";


export default function AboutPage() {
  return (
   <main>
    <AboutUs />
    <TeamSection />
    <HeroSectionabout />
    <Testimonials />
    <FAQ />
    <SearchSection />
   </main>
  );
}