"use client";
import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import img1 from "@/assets/3d-techny-artificial-intelligence-on-tablet-screen 1.svg";
import img2 from "@/assets/3d-techny-project-management-teamwork-and-integration 1.svg";
import img3 from "@/assets/3d-techny-secure-lock-and-key-successfully-unlocked 1.svg";
import img4 from "@/assets/3d-techny-stock-trading-online-on-stock-market 1.svg";
import {useTranslation} from "react-i18next";

const Advantages = () => {

    const {t} = useTranslation('common');


    return (
        <div className={'rounded-3xl container'} id={'advantages'}>
            <div className={"flex justify-center"}>
                <h1 className={'text-center text-xl sm:text-3xl lg:text-5xl font-bold mt-8 md:mt-10 lg:mt-20 w-4/5'}>{t("advantages")}</h1>
            </div>
            <div
                className={'flex pt-12 flex-wrap xl:flex-nowrap items-stretch justify-center xl:justify-between gap-8'}>
                <div className={'bg-[#F4F4F4] dark:bg-[#050414] rounded-3xl'}>
                    <h1 className={'text-base lg:text-xl p-5 pb-0 lg:p-8 lg:pb-0  font-semibold w-full lg:w-4/5'}>{t("advantagesText1")}</h1>
                    <div className={'flex'}>
                        <div className={'w-full'}>
                            <Image src={img1} alt={'img1'} className={'w-full'}/>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-8'}>
                    <div
                        className={'bg-[#F4F4F4] dark:bg-[#050414] rounded-3xl flex overflow-hidden'}>
                        <h1 className={'text-base lg:text-xl p-5 lg:p-8  font-semibold basis-1/2'}>{t("advantagesText2")}</h1>
                        <div className={'flex basis-1/2'}>
                            <div className={'w-full'}>
                                <Image src={img2} alt={'img1'} className={'w-60 h-60'}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={'bg-[#F4F4F4] dark:bg-[#050414] rounded-3xl flex overflow-hidden'}>
                        <h1 className={'text-base lg:text-xl p-5 lg:p-8  font-semibold basis-1/2 '}>{t("advantagesText3")}</h1>
                        <div className={'flex  basis-1/2'}>
                            <div className={'w-full'}>
                                <Image src={img3} alt={'img1'} className={'w-60 h-60'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bg-[#F4F4F4] dark:bg-[#050414] rounded-3xl overflow-hidden'}>
                    <h1 className={'text-base lg:text-xl p-5 lg:p-8  font-semibold w-full lg:w-4/5'}>{t("advantagesText4")}</h1>
                    <div className={'flex pl-8'}>
                        <div className={'w-full'}>
                            <Image src={img4} alt={'img1'} className={'w-96 h-96'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
