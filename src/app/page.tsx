import BannerSection from "@/components/Sections/BannerSection";
import BestPrograms1 from "@/components/Sections/BestPrograms1";
import BestPrograms2 from "@/components/Sections/BestPrograms2";
import HeroSection from "@/components/Sections/HeroSection";
import styles from "@/styles/pages/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <BannerSection />
      <BestPrograms1 />
      <BestPrograms2 />
    </main>
  );
}
