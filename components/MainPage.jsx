"use client";
import Image from "next/image";
import img from "@/assets/webImage.jpg";
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('common');

    return (
        <div className={"bg-[#050414]  rounded-2xl lg:rounded-3xl container"}>
            <div className={"flex justify-center"}>
                <h1
                    className={
                        "text-center text-white text-xl md:text-3xl lg:text-7xl  font-bold pt-8 lg:pt-24 w-full md:w-4/5 lg:w-4/5"
                    }
                >
                    {t("text1")}
                </h1>
            </div>
            <div className={"flex justify-center"}>
                <p
                    className={
                        "text-center text-white text-xs md:text-sm lg:text-base font-medium opacity-80 w-full md:4/5 lg:w-2/3 pt-5"
                    }
                >
                    {t("text2")}
                </p>
            </div>
            {/*<div*/}
            {/*    className={*/}
            {/*        "flex justify-center flex-col md:flex-row items-center lg:items-stretch gap-8 pt-10"*/}
            {/*    }*/}
            {/*>*/}
            {/*    <Button variant={"blue"}>Bepul sinab ko&apos;ring</Button>*/}
            {/*    <button className={"flex items-center gap-2 lg:gap-4"}>*/}
            {/*        <Image src={movie} className={"w-6 h-6 md:w-10 md:h-10 xl:w-12 xl:h-12"}*/}
            {/*               alt={"movie"}/>*/}
            {/*        <p className={"font-semibold text-white text-xs lg:text-lg"}>Videoni tomosho*/}
            {/*            qiling</p>*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div>
                <div></div>
                <div></div>
            </div>
            <div className={"flex pt-6 md:pt-8 lg:pt-12 md:justify-center"}>
                <Image
                    src={img}
                    alt={"img"}
                    className={
                        "rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl w-full md:w-11/12 lg:w-11/12"
                    }
                />
            </div>
        </div>
    );
};

export default MainPage;
