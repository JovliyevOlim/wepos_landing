"use client";
import * as React from "react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useTranslation} from "react-i18next";
import uz from "@/assets/uzbek.svg";
import ru from "@/assets/ru.svg";
import us from "@/assets/us.svg";
import Image from "next/image";

export function SelectLanguages() {

    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const selectFlag = () => {
        switch (i18n.language) {
            case 'en':
                return us;
            case 'uz':
                return uz;
            case 'ru':
                return ru;
            default:
                return uz;
        }
    }

    const selectLanguageForm = () => {
        switch (i18n.language) {
            case 'en':
                return "Eng";
            case 'uz':
                return "O'z";
            case 'ru':
                return "Ру";
            default:
                return "O'z";
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild
            >
                <Button variant={'secondary'} size={'sm'} className={'bg-transparent'}>
                    <Image
                        src={selectFlag()}
                        width={28}
                        height={28}
                        alt={"img"}
                        className={'rounded-md me-1'}
                    />
                    <h3 className={'text-black'}> {selectLanguageForm()}</h3>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="outline-none">
                <DropdownMenuItem onClick={() => changeLanguage("uz")}><Image
                    src={uz}
                    width={24}
                    height={24}
                    alt={"img"}
                    className={'rounded-md me-2 border'}
                /> O&apos;zbek</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("ru")}><Image
                    src={ru}
                    width={24}
                    height={24}
                    alt={"img"}
                    className={'rounded-md me-2 border'}
                />Русский</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}><Image
                    src={us}
                    width={24}
                    height={24}
                    alt={"img"}
                    className={'rounded-md me-2 border'}
                /> English</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
