import { TopAds } from "@/components/core/ads";
import { CarouselHome } from "@/components/core/carousel";
import HomeAside from "@/components/core/homeAside";
import Navbar from "@/components/core/navbar";
import TopNav from "@/components/core/topNav";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className=" rounded-sm">
      <TopAds />
      <Separator />
      <TopNav />
      <Separator />
      <Navbar />
      <Separator />
      <div className=" flex flex-col h-[550px]">
        <CarouselHome /> <HomeAside />
      </div>
    </main>
  );
}
