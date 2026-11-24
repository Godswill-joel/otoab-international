import HeroCarousel from "../home/hero";
import { homeSlides } from "@/app/data/data";

export default function Home() {
    return (
        <main className="min-h-screen">

            <HeroCarousel
                slides={homeSlides}
                autoPlay={true}
                interval={6000}
                height="min-h-[620px]"
            />


        </main>
    );
}
