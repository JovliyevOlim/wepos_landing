"use client";
import React, {useState} from "react";
import './style.css'
import {toast} from "sonner"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import call from '@/assets/call.svg'
import logo from "@/assets/wepos_logo.png";
import axios from "axios";
import {useTranslation} from "react-i18next";

const SpeakToMaster = () => {
    const {t} = useTranslation('common');

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

    function send() {
        const BaseUrl = 'https://backend.miro.uz/api/suggestions/post'
        // const BaseUrl='http://192.168.50.62:8080/api/suggestions/post'
        axios.post(BaseUrl, {
            fullName: "string",
            phoneNumber: "+385853853048",
        }, {headers: {"Content-Type": 'application/json'}})
            .then(function (response) {
                toast("Muvaffaqiyatli jo'natildi", {
                    description: "Sizga tez orada aloqaga chiqamiz",
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={"rounded-3xl container mt-16"} id={'faq'}>
            <div className={'rounded-3xl lg:flex justify-between p-4 sm:p-5 md:p-6 lg:p-7 backGif'}>
                <div className={'lg:basis-3/5 xl:basis-2/5 flex flex-col justify-between'}>
                    <h4 className={'font-bold text-sm sm:text-xl md:text-2xl  lg:text-3xl text-white text-center lg:text-start'}>{t("talk")}</h4>
                    <p className={'font-normal text-xs  sm:text-base md:text-xl lg:text-lg text-white text-center lg:text-start my-2 sm:my-4 px-4 lg:px-0 lg:pe-5'}>{t("talkNumber")}</p>
                    <div
                        className={'flex  flex-col sm:flex-row gap-4 rounded-3xl justify-between items-center bg-white p-1 pt-4 sm:p-1 sm:ps-6'}>
                        <input type="tel" id="phone" name="phone" value={inputValue}
                               onChange={handleInput} required
                               className={'outline-0 font-normal w-10/12 sm:w-1/2 text-base bg-transparent'}
                               placeholder={'+998'}/>
                        <Button size={'sm'} className={'w-full sm:w-1/2'}
                                variant={'blue'}>
                            {t("callUs")}
                            <Image src={call} alt={"call"} width={20} height={20}/>
                        </Button>
                    </div>
                </div>
                <div
                    className={'lg:basis-2/5 xl:basis-1/4 flex flex-col sm:flex-row lg:flex-col  justify-center items-center lg:items-end sm:justify-between mt-2'}>
                    {/*<h1 className={'text-white text-end text-3xl lg:text-5xl'}>Miro</h1>*/}
                    <Image src={logo} width={100} height={54} alt="logo"/>
                    <p className={'text-white text-end text-xl font-semibold mt-2'}>+998 77 044 01 05</p>
                </div>
            </div>
        </div>
    );
};

export default SpeakToMaster;
