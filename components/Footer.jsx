"use client";
import React from "react";
import Image from "next/image";
import instagram from '@/assets/Frame.svg'
import youtube from '@/assets/Frame (1).svg'
import facebook from '@/assets/Frame (2).svg'
import telegram from '@/assets/Frame (3).svg'
import line from '@/assets/Line 10.svg'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation('common');


    return (
        <div className={"rounded-3xl container"}>
            <div className={'lg:flex lg:flex-col xl:flex-row justify-between pt-8 lg:pt-12'}>
                <div
                    className={'flex flex-col lg:flex-row justify-between items-top gap-3  basis-3/5'}>
                    <div className={'flex justify-center flex-col gap-1'}>
                        <p className={'font-medium justify-center text-center text-sm text-[#9A999B]'}>{t("addressName")}</p>
                        {/*<h2 className={'text-base justify-center text-center font-bold'}>{t("addressFull")}*/}
                        {/*</h2>*/}
                        <h2 className={'text-base justify-center text-center font-bold'}>{t("address")}</h2>
                    </div>
                    {/*<div className={'flex flex-col gap-1'}>*/}
                    {/*    <p className={'font-medium text-sm text-[#9A999B] text-center'}>Telefon raqamimiz</p>*/}
                    {/*    <h2 className={'text-base font-bold text-center'}>+998 33 200 01 05</h2>*/}
                    {/*</div>*/}
                    <div className={'flex flex-col gap-1'}>
                        <p className={'font-medium text-sm text-[#9A999B] text-center'}>{t("myPhone")}</p>
                        <h2 className={'text-base font-bold text-center'}>+998 77 044 01 05</h2>
                    </div>
                </div>
                <div
                    className={'flex justify-center items-top gap-4 md:gap-6 lg:gap-7 my-4 lg:my-8 xl:my-0'}>
                    <Image src={instagram} alt={'instagram'} width={24} height={24}/>
                    <Image src={line} alt={'line1'} width={1} height={24}/>
                    <Image src={youtube} alt={'youtube'} width={24} height={24}/>
                    <Image src={line} alt={'line1'} width={1} height={24}/>
                    <Image src={facebook} alt={'facebook'} width={24} height={24}/>
                    <Image src={line} alt={'line1'} width={1} height={24}/>
                    <Image src={telegram} alt={'telegram'} width={24} height={24}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
