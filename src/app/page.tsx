import Image from "next/image";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Rating from "@/components/Rating";
import Save from "@/components/Save";
import Watch from "@/components/Watch";
import Explore from "@/components/Explore";
import BringMedia from "@/components/BringMedia";
import FilmFact from "@/components/FilmFact";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="landing-container">
      <Header />
      <Carousel />
      <Rating />
      <Save />
      <Watch />
      <Explore />
      <BringMedia />
      <FilmFact />
      <FAQ />
      <Blog />
      <Info />
      <Footer />
    </div>
  );
}
