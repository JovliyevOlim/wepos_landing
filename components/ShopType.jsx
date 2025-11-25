"use client";
import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

import Image from "next/image";
import shopping from "@/assets/Rectangle 784.svg";
import shoppingType1 from "@/assets/Outline.svg";
import shoppingType2 from "@/assets/solar panel.svg";
import shoppingType3 from "@/assets/Qurilish mollari do’kon.svg";
import shoppingType4 from "@/assets/Kosmetika do’kon.svg";
import shoppingType5 from "@/assets/Poyabzal  do’kon.svg";
import shoppingType6 from "@/assets/Building_04.svg";
import shoppingType7 from "@/assets/Elektronika do’kon.svg";
import shoppingType8 from "@/assets/Aksessuar do’kon.svg";
import shoppingType9 from "@/assets/Uy- ro’zg’or buyumlari.svg";
import shoppingType10 from "@/assets/shopping basket.svg";
import shoppingType11 from "@/assets/Building_02.svg";
import shoppingType12 from "@/assets/Car_Auto.svg";
import {useTranslation} from "react-i18next";

const ShopType = () => {
    const {t, i18n} = useTranslation('common');
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        console.log(formattedPhoneNumber, 'format')
        setInputValue(formattedPhoneNumber)
    }

    function formatPhoneNumber(value) {
        console.log(value)
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length
        console.log(phoneNumberLength)
        if (phoneNumberLength < 6) return `+${phoneNumber}`;
        if (phoneNumberLength < 9) {
            return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)}`
        } else if (phoneNumberLength < 11) {
            return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}`
        } else {
            return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3, 5)}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`

        }
    }

    const shopTypes = [
        {
            text: t("shop1"),
            active: false,
            img: shoppingType1,
        },
        {
            text: t("shop2"),
            active: false,
            img: shoppingType2,
        },
        {
            text: t("shop3"),
            active: false,
            img: shoppingType3,
        },
        {
            text: t("shop4"),
            active: false,
            img: shoppingType4,
        },
        {
            text: t("shop5"),
            active: false,
            img: shoppingType5,
        },
        // {
        //     text: "Textil",
        //     active: false,
        //     img: shoppingType6,
        // },
        {
            text: t("shop6"),
            active: false,
            img: shoppingType7,
        },
        {
            text: t("shop7"),
            active: false,
            img: shoppingType8,
        },
        {
            text: t("shop8"),
            active: false,
            img: shoppingType9,
        },
        {
            text: t("shop9"),
            active: false,
            img: shoppingType10,
        },
        // {
        //     text: "Zavodlar",
        //     active: true,
        //     img: shoppingType11,
        // },
        {
            text: t("shop10"),
            active: false,
            img: shoppingType12,
        },
    ]


    function selectShop(index) {
        console.log(index);
        const types = shopTypes.map((item, ind) => {
            if (index == ind) {
                item = {...item, active: true};
            } else {
                item = {...item, active: false};
            }
            return item;
        });
        setShopTypes(types);
    }

    return (
        <div className={"rounded-3xl container"}>
            <div className={"flex justify-center"}>
                <h1
                    className={
                        "text-center  text-xl sm:text-3xl lg:text-4xl font-bold mt-8 md:mt-10 lg:mt-20 w-4/5"
                    }
                >
                    {t("shopTypeName")}
                </h1>
            </div>
            <div className={"bg-[#050414] mt-4 md:mt-8 rounded-3xl p-6 md:p-10"}>
                <div className={"flex flex-col xl:flex-row justify-between  gap-10"}>
                    <div className={"w-full xl:w-1/2 flex flex-col justify-between"}>
                        <div>
                            <h1
                                className={
                                    "text-white text-base md:text-3xl  font-bold mt-4 md:mt-8 leading-7"
                                }
                            >
                                {t("shopTypeSelect")}

                            </h1>
                            <p
                                className={
                                    " text-white text-xs md:text-base font-medium opacity-60 w-full pt-5"
                                }
                            >
                                {t("shopTypeText")}
                            </p>
                        </div>

                        <div>
                            <h3
                                className={
                                    "font-bold text-[#5239B7] uppercase mt-4 md:mt-0 text-base md:text-xl"
                                }
                            >
                                {t("freeConsult")}
                            </h3>
                            <div
                                className={
                                    "flex flex-wrap sm:flex-nowrap justify-center gap-3 md:gap-6 items-stretch mt-4"
                                }
                            >
                                <Input type="name" placeholder={t("nameEnter")}/>
                                <Input type="tel" onChange={handleInput} value={inputValue}
                                       placeholder="+998 (__) ___ __ __"/>
                                <Button variant={"blue"}>                                {t("send")}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full xl:w-1/2"}>
                        <Image src={shopping} alt={"shopping"} className={"w-full"}/>
                    </div>
                </div>
                <div className={"hidden lg:flex flex-wrap gap-5  pt-16"}>
                    {shopTypes.map((item, index) => (
                        <Button
                            key={index}
                            variant={item?.active ? "blue" : "outline"}
                            size={"sm"}
                            // onClick={() => selectShop(index)}
                        >
                            <Image src={item?.img} alt={"shoppingType"}/>
                            {item?.text}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopType;
