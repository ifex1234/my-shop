"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { NewsContent } from "@/data/homeNews";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function CarouselNews() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {NewsContent.map((data) => (
          <CarouselItem key={data.id}>
            <div>
              <Card>
                <CardContent className="flex flex-col aspect-square bg-transparent pt-1">
                  <Image
                    className=" w-full object-fill"
                    src={data.image}
                    alt={data.title}
                    priority
                  />
                  <Link href={`/news/${data.href}`}>
                    <h3 className="text-4xl font-semibold my-2">
                      {data.title}
                    </h3>
                    <p className=" text-slate-700 text-sm text-justify my-2">
                      {data.content.slice(0, 500)}...
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
