import { TopAds } from "@/components/core/ads";
import { CarouselHome } from "@/components/core/carousel";
import HomeAside from "@/components/core/homeAside";
import Navbar from "@/components/core/navbar";
import TopNav from "@/components/core/topNav";
import { Separator } from "@/components/ui/separator";

import { SectionBorderless } from "@/components/core/sectionBorderless";
import SectionBig from "@/components/core/sectionBig";
import { SectionMinor } from "@/components/core/sectionMinor";
// import { SectionSmall } from "../components/sectionsmall";
import { Sectionwithprice } from "@/components/core/sectionwithPrice";
import SubHeader from "@/components/core/subHeader";
import SubHeader2 from "@/components/core/subHeader2";

import { PhoneDeals } from "@/lib/assets/deals";
import {
  deals1,
  MobileDeals,
  Otherdeals,
  Choplife,
  Gins,
  BestPrice,
} from "@/lib/assets/deals";
import { LightOn, Seller, StoreItems } from "@/lib/assets/other/store";
import { productsData } from "@/lib/assets/section2";

export default function Home() {
  return (
    <main className=" rounded-sm">
      <TopAds />
      <Separator />
      <TopNav />
      <Separator />
      <Navbar />
      <Separator />
      <div className=" flex flex-row h-[540px] my-2 gap-1">
        <CarouselHome /> <HomeAside />
      </div>
      <SectionMinor />
      <SubHeader
        item1={"Flash sales"}
        item2={"See all"}
        color={" rgb(173, 12, 170)"}
      />
      <SectionBig />
      <SectionBorderless
        arrayItem={productsData}
        header={"Top Selling Items"}
      />
      <SubHeader
        item1={"Choplife Christmas Deals"}
        item2={"See all"}
        color={" rgb(173, 12, 170)"}
      />
      <SectionBorderless arrayItem={Choplife} />
      {/* <HalfSlide /> */}
      <SubHeader
        item1={"Le drop Official Store Deals"}
        item2={"See all"}
        color={" rgb(173, 12, 170)"}
      />
      <SectionBorderless arrayItem={Gins} />
      <SubHeader2
        title={"Shop From Our Collections"}
        color={" rgb(173, 12, 170)"}
      />
      <Sectionwithprice arrayItem={deals1} />
      <SubHeader
        item1={"Best Price"}
        item2={"See all"}
        color={" rgb(173, 12, 170)"}
      />
      <SectionBorderless arrayItem={BestPrice} />
      <SubHeader2 title={"More Collections"} color={" rgb(173, 12, 170)"} />
      <Sectionwithprice arrayItem={Otherdeals} />
      <SubHeader2 title={"Phone Deals"} color={" rgb(173, 12, 170)"} />
      <Sectionwithprice arrayItem={MobileDeals} />
      <SubHeader
        item1={"Top Phone deals"}
        item2={"See all"}
        color={"rgb(173, 12, 170)"}
      />
      <SectionBorderless arrayItem={PhoneDeals} />
      <SubHeader2 title={"Official store"} color={"rgb(173, 12, 170)"} />
      {/* <SectionSmall arrayItem={StoreItems} /> */}
      <SubHeader
        item1={"Global Best Sellers"}
        item2={"See all"}
        color={"rgb(173, 12, 170)"}
      />
      <SectionBorderless arrayItem={Seller} />
      <SubHeader2 title={"Keep the Lights On"} color={"rgb(173, 12, 170)"} />
      <Sectionwithprice arrayItem={LightOn} />
    </main>
  );
}
