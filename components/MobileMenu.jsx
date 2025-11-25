"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {Menu} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {useTranslation} from "react-i18next";
import {SelectLanguages} from "@/components/SelectLanguages";

const MobileMenu = () => {
    const [navbarLinkSheetOpen, setNavbarLinkSheetOpen] = useState(false);
    const router = useRouter();
    const {t} = useTranslation('common');

    return (
        <Sheet open={navbarLinkSheetOpen} onOpenChange={setNavbarLinkSheetOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="block px-2 py-1 focus-visible:ring-transparent lg:hidden"
                >
                    <Menu className="w-6 h-6 transition-all"/>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <div className={'m-1'}>
                    <SelectLanguages/>
                </div>
                <SheetHeader>
                    <SheetTitle className="text-left">{t("pages")}</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <ul className="flex flex-col items-start gap-5">
                        {/*<li>*/}
                        {/*    <Link*/}
                        {/*        onClick={() => setNavbarLinkSheetOpen(false)}*/}
                        {/*        className="py-3 transition hover:text-slate-800/80"*/}
                        {/*        href="/"*/}
                        {/*    >*/}
                        {/*        {t("")}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li>
                            <Link
                                onClick={() => setNavbarLinkSheetOpen(false)}
                                className="py-3 transition hover:text-slate-800/80"
                                href="#aboutUs"
                            >
                                {t("aboutName")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setNavbarLinkSheetOpen(false)}
                                className="py-3 transition hover:text-slate-800/80"
                                href="#advantages"
                            >
                                {t("advantages")}

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={() => setNavbarLinkSheetOpen(false)}
                                className="py-3 transition hover:text-slate-800/80"
                                href="#faq"
                            >
                                {t("contacts")}
                            </Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Button*/}
                        {/*        variant="link"*/}
                        {/*        onClick={() => {*/}
                        {/*            router.push("#faq");*/}
                        {/*            setNavbarLinkSheetOpen(false);*/}
                        {/*        }}*/}
                        {/*        className="py-3 transition hover:text-slate-800/80"*/}
                        {/*        // href="#faq"*/}
                        {/*        // scroll={true}*/}
                        {/*    >*/}
                        {/*        FAQ*/}
                        {/*    </Button>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
