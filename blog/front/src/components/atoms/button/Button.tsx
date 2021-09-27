import React, {MouseEvent} from "react";
import { Omit } from "utility-types";
// import "../../../styles/style.scss";

export enum ButtonVariant {
    Default,
    Primary
}

// Props of button aren't declared as interface or type alias
// or maybe they are declared but library author didn't export them
export const Button: React.FC<{
    variant?: ButtonVariant;
    children?: React.ReactNode;
    onClick?: (event:MouseEvent<HTMLButtonElement>) => any
    style?: React.CSSProperties;
}> = ({ variant, style, onClick,...rest }) =>{
    return<button
        style={Object.assign(
            variant === ButtonVariant.Primary
                ? {
                    background: "#4834d4",
                    color: "white"
                }
                : {},
            style
        )}
        {...rest}
    />
}

Button.defaultProps = {
    variant: ButtonVariant.Default
};

// But we can get them using React.ComponentProps
export type ButtonProps = React.ComponentProps<typeof Button>;

export type AlertButtonProps = Omit<ButtonProps, "onClick">;

export const AlertButton: React.FC<AlertButtonProps> = props => (
    <Button onClick={() => alert("Hello")} {...props} />
);