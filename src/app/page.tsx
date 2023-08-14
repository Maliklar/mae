import BannerSection from "@/components/Sections/BannerSection";
import HeroSection from "@/components/Sections/HeroSection";
import styles from "@/styles/pages/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <BannerSection />
    </main>
  );
}
