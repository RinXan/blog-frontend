import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className="
        w-full
        bg-blue-600
        text-white
        py-3
        rounded-lg
        hover:bg-blue-700
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed

        flex 
        items-center
        justify-center
      "
    >
      {children}
    </button>
  );
}