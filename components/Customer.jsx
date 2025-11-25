"use client";
import React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import profile from "@/assets/Ellipse 407.svg";
import star from "@/assets/star.svg";

const Customer = () => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className={"rounded-3xl container"} id={"customers"}>
            <div className={"flex justify-center flex-col items-center"}>
                <h1
                    className={
                        "text-center  text-xl sm:text-3xl lg:text-4xl font-bold mt-8 md:mt-10 lg:mt-20 w-4/5"
                    }
                >
                    Millionlab baxtli foydalanuvchilarga qo&apos;shiling
                </h1>
                <p
                    className={
                        "text-center text-[#8B8F94] text-sm lg:text-lg  font-medium pt-4  w-4/5"
                    }
                >
                    Sof-Finance bilan eng yaxshi baholadi tizim dasturi 4.7 (4,295 sharhlar)
                </p>
            </div>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                    autoplay: true,
                }}
                className="w-full pt-12"
            >
                <CarouselContent>
                    {["1", "2", "3", "4", "5", "6"].map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className={"border-2 p-6 rounded-3xl"}>
                                <h1
                                    className={
                                        "w-full lg:w-11/12 text-xs md:text-base leading-7 font-medium text-[#8B8F94]  opacity-80"
                                    }
                                >
                                    Sof-finance avtomatizatsiya dasturi, bir nechta foydali asosiy
                                    imkoniyatlarga ega ekan Birinchi bo&apos;lib, bu dastur tizimi
                                    jarayonlarni barqarorlik va ishlab chiqarishni oshirishga yordam
                                    beradi. Bu yordam bilan xatolar va kamchiliklar minimal darajada
                                    bo&apos;ladi va boshqarish vaqti va resurslarni yengillashtirish
                                    imkoniyati mavjud bo&apos;ladi.
                                </h1>
                                <div className={"flex mt-6 gap-4"}>
                                    <Image
                                        src={profile}
                                        alt={"profile"}
                                        className={"rounded-full"}
                                        width={48}
                                        height={48}
                                    />
                                    <div>
                                        <div className={"flex gap-4"}>
                                            <p className={"font-semibold text-base"}>Otabek V.</p>
                                            <div className={"flex gap-1"}>
                                                <Image
                                                    src={star}
                                                    width={14}
                                                    height={14}
                                                    alt="star"
                                                />
                                                <p className={"font-bold text-base"}>{item}</p>
                                            </div>
                                        </div>
                                        <p className={"font-medium text-sm text-[#8B8F94]"}>
                                            Direktor (Baka shoes)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default Customer;
