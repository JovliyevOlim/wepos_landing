import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
    {
        variants: {
            variant: {
                default:
                    "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
                blue: "bg-gradient-to-r from-[#3966d4] to-[#618CF6] bg-blue-600 text-slate-50 gap-2 flex items-center hover:bg-blue-600/90 ",
                outline:
                    "border border-[#F1F3F514] gap-2 text-[#F1F3F5] bg-[#0F0E1D] hover:border-[#F1F3F514]/80 hover:text-[#F1F3F5]/80",
                secondary:
                    "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
                ghost: "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
            },
            size: {
                default: "h-12 px-6 py-2.5 rounded-3xl font-semibold text-lg bg-gradient-to-r from-[#3966d4] to-[#618CF6]",
                sm: "h-12  px-6 py-2.5 rounded-3xl font-semibold text-sm ",
                lg: "h-12 px-6 py-2.5 rounded-3xl font-semibold text-sm",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
});
Button.displayName = "Button";

export { Button, buttonVariants };
