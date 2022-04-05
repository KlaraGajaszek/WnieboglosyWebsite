import clsx from "clsx";

export type ButtonInnerProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode | React.ReactNode[];
};

export type ButtonProps = ButtonInnerProps & JSX.IntrinsicElements["button"];

const getClassName = ({ className }: { className?: string }) => {
  return clsx("text-sm font-small", className);
};

const ButtonInner = ({ children, variant }: ButtonInnerProps) => {
  return (
    <div
      className={clsx("rounded-sm py-1 px-5 text-white", {
        "bg-green-100": variant === "secondary",
        "bg-primary ": variant === "primary",
      })}
    >
      {children}
    </div>
  );
};

export const Button = ({
  variant = "primary",
  className,
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button {...buttonProps} className={getClassName({ className })}>
      <ButtonInner variant={variant}>{children}</ButtonInner>
    </button>
  );
};
