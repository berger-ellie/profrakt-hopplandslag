import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Partnership from "@/components/Partnership";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Story />
        <Partnership />
        <HowItWorks />
        <CtaBanner />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
