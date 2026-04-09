import TopPicks from "../../../components/Heropage-Section1";
import FaqGrid from "../../../Howitworks/FaqGrid";
import TrustyFeedbackPage from "../../../Howitworks/howitworks";
import NeutralSpaceSection from "../../../Howitworks/NeutralSpaceSection";

export default function AboutPage() {
  return (
    <main>
        <TrustyFeedbackPage />
         <TopPicks />
         <FaqGrid />
         <NeutralSpaceSection />
    </main>
     );
}