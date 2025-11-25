// 'use strict';
import {Inter} from "next/font/google";
import {ThemeProvider} from "@/components/theme-provider";
import Header from "@/components/Header";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            {children}
            {/*<Toaster/>*/}
        </ThemeProvider>
        </body>
        </html>
    );
}


