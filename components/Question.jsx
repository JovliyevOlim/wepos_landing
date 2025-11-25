"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Question = () => {
    const question = [
        {
            title: "Avtomatizatsiya dasturi nima",
            answer: "Avtomatizatsiya dasturi biror jarayonni avtomatik bajarish uchun tuzilgan dastur tizimidir. Uning tuzilishi uchun biror dasturlash tillaridan yoki sohalarni maxsus dastur tizimlaridan foydalaniladi. Tizim, ma'lumotlarni to&apos;plab olish, o&apos;qib olish, tahlil qilish va amallarni bajarish uchun xususiy algoritmlarni o&apos;z ichiga oladi.",
        },
        {
            title: "Avtomatizatsiya dasturining foydalari nimalar",
            answer: "Avtomatizatsiya dasturi biror jarayonni avtomatik bajarish uchun tuzilgan dastur tizimidir. Uning tuzilishi uchun biror dasturlash tillaridan yoki sohalarni maxsus dastur tizimlaridan foydalaniladi. Tizim, ma'lumotlarni to&apos;plab olish, o&apos;qib olish, tahlil qilish va amallarni bajarish uchun xususiy algoritmlarni o&apos;z ichiga oladi.",
        },
        {
            title: "Avtomatizatsiya dasturining muhim sohasi qaysi sohalar",
            answer: "Avtomatizatsiya dasturi biror jarayonni avtomatik bajarish uchun tuzilgan dastur tizimidir. Uning tuzilishi uchun biror dasturlash tillaridan yoki sohalarni maxsus dastur tizimlaridan foydalaniladi. Tizim, ma'lumotlarni to&apos;plab olish, o&apos;qib olish, tahlil qilish va amallarni bajarish uchun xususiy algoritmlarni o&apos;z ichiga oladi.",
        },
        {
            title: "Avtomatizatsiya dasturi qanday tuziladi",
            answer: "Avtomatizatsiya dasturi biror jarayonni avtomatik bajarish uchun tuzilgan dastur tizimidir. Uning tuzilishi uchun biror dasturlash tillaridan yoki sohalarni maxsus dastur tizimlaridan foydalaniladi. Tizim, ma'lumotlarni to&apos;plab olish, o&apos;qib olish, tahlil qilish va amallarni bajarish uchun xususiy algoritmlarni o&apos;z ichiga oladi.",
        },
        {
            title: "Avtomatizatsiya dasturi nima uchun kerak",
            answer: "Avtomatizatsiya dasturi biror jarayonni avtomatik bajarish uchun tuzilgan dastur tizimidir. Uning tuzilishi uchun biror dasturlash tillaridan yoki sohalarni maxsus dastur tizimlaridan foydalaniladi. Tizim, ma'lumotlarni to&apos;plab olish, o&apos;qib olish, tahlil qilish va amallarni bajarish uchun xususiy algoritmlarni o&apos;z ichiga oladi.",
        },
    ];

    return (
        <div id="faq" className={"rounded-3xl container"}>
            <div className={"flex justify-center flex-col items-center"}>
                <h1
                    className={
                        "text-center text-xl sm:text-3xl lg:text-5xl font-bold mt-8 md:mt-10 lg:mt-20 w-4/5"
                    }
                >
                    Ko&apos;p beriladigan savollar
                </h1>
            </div>
            <div className={"flex flex-wrap md:flex-nowrap justify-between  pt-10 items-start"}>
                <div className={"w-full  md:w-1/2"}>
                    {question.map((item, index) => (
                        <div key={index} className={"p-2  flex justify-start rounded-2xl"}>
                            <div className={"bg-gray-100 px-6  rounded-2xl w-full"}>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>{item.title}</AccordionTrigger>
                                        <AccordionContent>{item.answer}</AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={"w-full md:w-1/2"}>
                    {question.map((item, index) => (
                        <div key={index} className={"p-2 rounded-2xl"}>
                            <div className={"bg-gray-100 px-6  rounded-2xl w-full"}>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>{item.title}</AccordionTrigger>
                                        <AccordionContent>{item.answer}</AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Question;
