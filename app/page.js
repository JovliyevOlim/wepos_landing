import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("@/components/AboutMe"), {
    ssr: false,
});
const Advantages = dynamic(() => import("@/components/Advantages"), {
    ssr: false,
});
const Customer = dynamic(() => import("@/components/Customer"), {
    ssr: false,
});
const ShopType = dynamic(() => import("@/components/ShopType"), {
    ssr: false,
});

import MainPage from "@/components/MainPage";
import Footer from "@/components/Footer";
import SpeakToMaster from "@/components/SpeakToMaster";
export default function Home() {
    return (
        <main
            className=" flex-col items-center justify-between block w-full min-h-screen p-2 md:flex gap-18 md:p-10">
            <MainPage/>
            <AboutMe/>
            <Advantages/>
            {/*<Customer />*/}
            <ShopType/>
            {/*<Question />*/}
            <SpeakToMaster/>
            <Footer/>
        </main>
    );
}
