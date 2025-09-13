import Clients from "@/components/Clients";
import ClientsHeading from "@/components/ClientsHeading";
import Discover from "@/components/discover";
import Explore from "@/components/explore";
import FAQHeading from "@/components/FAQHeading";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Review from "@/components/Review";
import TalentProtfolio from "@/components/TalentPortfolio";
import Working from "@/components/Working";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Header/>
    <Explore/>
    <Discover/>
    <Review/>
    <Clients/>
    <Working/>
    <TalentProtfolio/>
    <ClientsHeading/>
    <FAQHeading/>
    <FooterSection/>
  </div>
  );
}
