import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/(0.96) antialiased bg-grid-white(0.02) justify-center ">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <UpcomingWebinars />
      <Instructors />
      <Footer/>
      </main>
  );
}
