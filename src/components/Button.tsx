import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

const Button = (props: {
    variant: 'primary' | 'secondary' | 'text';
    iconAfter? : ReactNode;
} &
    ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {className, children, variant, iconAfter, ...rest} = props;
    return (
        <button className={twMerge(
            "h-11 px-6 rounded-xl border border-golf-green uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
            variant === "primary" && "bg-golf-green  text-white",
            variant === "secondary" && "hover:bg-golf-green hover:text-white",
            variant === "text" && "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-golf-green hover:after:w-full",
            className
            )} {...rest}>
            <span role="contentinfo">
                {children}
            </span>
            {iconAfter && <span role="contentinfo">{iconAfter}</span>}
        </button>
    )
}

export default Button ;