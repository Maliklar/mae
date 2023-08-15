import BannerSection from "@/components/Sections/BannerSection";
import BestPrograms1 from "@/components/Sections/BestPrograms1";
import BestPrograms2 from "@/components/Sections/BestPrograms2";
import BestPrograms3 from "@/components/Sections/BestPrograms3";
import BestPrograms4 from "@/components/Sections/BestPrograms4";
import FeaturedSection from "@/components/Sections/FeaturedSection";
import HeroSection from "@/components/Sections/HeroSection";
import styles from "@/styles/pages/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <BannerSection />
      <BestPrograms1 />
      <BestPrograms2 />
      <FeaturedSection />
      <BestPrograms3 />
      <BestPrograms4 />
    </main>
  );
}
