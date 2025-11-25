"use client";
import React from "react";
import Image from "next/image";
import aboutMe from "@/assets/Rectangle 17.svg";
import icon from "@/assets/flash.svg";
import icon1 from "@/assets/shopping bag.svg";
import icon2 from "@/assets/rank.svg";
import icon3 from "@/assets/pie chart.svg";
import icon4 from "@/assets/money bag-coin.svg";
import line from "@/assets/Line 3.svg";
import {useTranslation} from "react-i18next";
import {FaTruck, FaUsers, FaWarehouse} from "react-icons/fa";

const AboutMe = () => {
    const {t} = useTranslation('common');

    return (
        <div className={"rounded-3xl container"} id={"aboutUs"}>
            <div className={"flex justify-center"}>
                <h1
                    className={
                        "text-center  text-xl sm:text-3xl lg:text-5xl font-bold mt-8 md:mt-10 lg:mt-20 w-4/5"
                    }
                >
                    {t("aboutName")}
                </h1>
            </div>
            <div className={"xl:flex pt-6 md:pt-12 justify-between items-stretch gap-12"}>
                <div className={"flex justify-center basis-6/12"}>
                    <Image src={aboutMe} alt={"img"} className={"rounded-3xl sm:w-3/5 xl:w-full"}/>
                </div>
                <div className={"flex justify-center py-10 basis-6/12"}>
                    <div>
                        <div
                            className={
                                "flex items-start justify-center xl:justify-start  gap-5 pt-10"
                            }
                        >
                            <Image src={icon} width={24} height={24} alt={"icon"}/>
                            <p
                                className={
                                    "font-medium  text-xs sm:text-sm lg:text-base w-full md:w-10/12 lg:w-4/6 leading-5 md:leading-6"
                                }
                            >
                                {t("aboutText1")}
                            </p>
                        </div>
                        <div
                            className={
                                "flex items-start justify-center xl:justify-start gap-5 pt-8"
                            }
                        >
                            <Image src={icon1} width={24} height={24} alt={"icon1"}/>
                            <p
                                className={
                                    "font-medium  text-xs sm:text-sm lg:text-base w-full md:w-10/12 lg:w-4/6 leading-5 md:leading-6"
                                }
                            >
                                {t("aboutText2")}
                            </p>
                        </div>
                        <Image
                            src={line}
                            alt={"line"}
                            className={"py-1 md:py-8 w-full xl:w-11/12"}
                        />
                        <h3
                            className={
                                "font-semibold text-center xl:text-start text-base lg:text-2xl  md:text-xl "
                            }
                        >
                            {t("aboutText3")}
                        </h3>
                        <p
                            className={
                                "font-medium text-xs text-center xl:text-start sm:text-sm lg:text-base w-full xl:w-3/5 text-[#8B8F94] dark:text-white leading-5 md:leading-6 pt-4"
                            }
                        >
                            {t("aboutTextLong")}:
                        </p>
                        <div className={"flex items-center justify-center lg:justify-start  gap-0"}>
                            <div className={'basis-full lg:basic-2/3 flex flex-wrap'}>
                                <div
                                    className={
                                        "flex items-center justify-start gap-4 w-1/2 sm:w-1/3  pt-10"
                                    }
                                >
                                    <Image src={icon4} width={24} height={24} alt={"icon"}/>
                                    <p
                                        className={
                                            "font-medium opacity-80 text-xs md:text-sm lg:text-base w-3/5 leading-6"
                                        }
                                    >
                                        {t("aboutText7")}
                                    </p>
                                </div>
                                <div
                                    className={
                                        "flex items-center justify-start gap-4 w-1/2 sm:w-1/3  pt-10"
                                    }
                                >
                                    <Image src={icon3} width={24} height={24} alt={"icon"}/>
                                    <p
                                        className={
                                            "font-medium opacity-80 text-xs md:text-sm lg:text-base w-3/5 leading-6"
                                        }
                                    >
                                        {t("aboutText8")}
                                    </p>
                                </div>
                                <div
                                    className={
                                        "flex items-center justify-start gap-4 w-1/2 sm:w-1/3  pt-10"
                                    }
                                >
                                    <Image src={icon2} width={24} height={24} alt={"icon"}/>
                                    <p
                                        className={
                                            "font-medium opacity-80 text-xs md:text-sm lg:text-base w-3/5 leading-6"
                                        }
                                    >
                                        {t("aboutText9")}
                                    </p>
                                </div>
                                <div
                                    className={
                                        "flex items-center justify-start gap-4 w-1/2 sm:w-1/3  pt-10"
                                    }
                                >
                                    <svg width="24" height="24">
                                        <defs>
                                            <linearGradient id="iconGradient" x1="2.72095"
                                                            y1="-5.4375" x2="28.9253" y2="1.88404">
                                                <stop offset="100%" stopColor="#3966D4"/>
                                                <stop offset="0%" stopColor="#618CF6"/>
                                            </linearGradient>
                                        </defs>
                                        <FaWarehouse size={24}
                                                     fill="url(#iconGradient)"/>
                                    </svg>

                                    <p
                                        className={
                                            "font-medium opacity-80 text-xs md:text-sm lg:text-base w-3/5 leading-6"
                                        }
                                    >
                                        {t("aboutText4")}
                                    </p>
                                </div>
                                <div
                                    className={
                                        "flex items-center justify-start gap-4 w-1/2 sm:w-1/3 pt-10"
                                    }
                                >
                                    <svg width="24" height="24">
                                        <defs>
                                            <linearGradient id="iconGradient" x1="2.72095"
                                                            y1="-5.4375" x2="28.9253" y2="1.88404">
                                                <stop offset="100%" stopColor="#3966D4"/>
                                                <stop offset="0%" stopColor="#618CF6"/>
                                            </linearGradient>
                                        </defs>
                                        <FaUsers size={24}
                                                 fill="url(#iconGradient)"/>
                                    </svg>

                                    <p
                                        className={
                                            "font-medium opacity-80 text-xs md:text-sm lg:text-base w-3/5 leading-6"
                                        }
                                    >
                                        {t("aboutText5")}
                                    </p>
                                </div>
                                <div
                                    className={
                                        "flex items-center justify-start gap-4 w-1/2 sm:w-1/3  pt-8"
                                    }
                                >
                                    <svg width="24" height="24">
                                        <defs>
                                            <linearGradient id="iconGradient" x1="2.72095"
                                                            y1="-5.4375" x2="28.9253" y2="1.88404">
                                                <stop offset="100%" stopColor="#3966D4"/>
                                                <stop offset="0%" stopColor="#618CF6"/>
                                            </linearGradient>
                                        </defs>
                                        <FaTruck size={24}
                                                 fill="url(#iconGradient)"
                                        />
                                    </svg>

                                    <p
                                        className={
                                            "font-medium opacity-80 text-xs md:text-sm lg:text-base w-3/5 leading-6"
                                        }
                                    >
                                        {t("aboutText6")}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
