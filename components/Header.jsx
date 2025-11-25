"use client";
import Image from "next/image";
import {useTranslation} from 'react-i18next';
import MobileMenu from "@/components/MobileMenu";
import logo from "@/assets/wepos_logo.png";

import "../i18n";
import {SelectLanguages} from "@/components/SelectLanguages";

const Header = () => {

    const {t} = useTranslation('common');


    return (
        <header className="container flex items-center sticky top-0 bg-white justify-between py-5">
            <div className="flex items-center justify-between w-full ">
                <div className="flex items-center gap-3">
                    <Image src={logo} width={100} height={54} alt="logo"/>
                    {/*<h1 className={"'text-blue-700 text-4xl font-normal font-mono"}>Miro</h1>*/}
                </div>
                <div className={"hidden lg:flex items-center justify-between gap-12"}>
                    <button
                        className={"text-lg font-sans font-medium"}
                        onClick={(e) => {
                            e.preventDefault(); // Havolani standart harakatini bloklash
                            const element = document.getElementById('aboutUs');
                            if (element) {
                                element.scrollIntoView({behavior: 'smooth'}); // Sekin harakat bilan skroll
                            }
                        }}
                    >
                        {t("aboutName")}
                    </button>
                    <buton
                        className={"text-lg font-sans font-medium"}
                        onClick={(e) => {
                            e.preventDefault(); // Havolani standart harakatini bloklash
                            const element = document.getElementById('advantages');
                            if (element) {
                                element.scrollIntoView({behavior: 'smooth'}); // Sekin harakat bilan skroll
                            }
                        }}
                    >
                        {t("advantages")}

                    </buton>
                    {/*<Link*/}
                    {/*    href="/customers"*/}
                    {/*    scroll={false}*/}
                    {/*    className={"text-lg font-sans font-medium "}*/}
                    {/*>*/}
                    {/*    Bizning mijozlarimiz*/}
                    {/*</Link>*/}
                    <button
                        onClick={(e) => {
                            e.preventDefault(); // Havolani standart harakatini bloklash
                            const element = document.getElementById('faq');
                            if (element) {
                                element.scrollIntoView({behavior: 'smooth'}); // Sekin harakat bilan skroll
                            }
                        }}
                        className={"text-lg font-sans font-medium "}>
                        {t("contacts")}

                    </button>
                </div>

                {/*<div className={"hidden lg:flex items-center justify-between gap-4"}>*/}
                {/*    <Button variant={"blue"}>Murojaat qiling</Button>*/}
                {/*</div>*/}

                <div className={'flex items-center'}>
                    <div className={'hidden lg:flex'}>
                        <SelectLanguages/>
                    </div>
                    <MobileMenu/>
                </div>
                {/*<div className="flex items-center gap-3">*/}
                {/*    <ModeToggle />*/}
                {/*</div>*/}
            </div>
        </header>
    );
};

export default Header;
