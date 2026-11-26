import HeroCarousel from "../home/hero";
import { homeSlides } from "@/app/data/data";
import AboutSection from "../pages/about";
import ServicesSection from "../pages/services";

export default function Home() {
    return (
        <main className="min-h-screen">

            <HeroCarousel
                slides={homeSlides}
                autoPlay={true}
                interval={6000}
                height="min-h-[620px]"
            />
            <AboutSection />
            <ServicesSection />


        </main>
    );
}
