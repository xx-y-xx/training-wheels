import iconsSprite from "../../assets/images/skills-icons-sprite.svg";
import React from "react";

type IconPropsType = {
    iconID: string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon: React.FC<IconPropsType> = (props:IconPropsType) => {
    return (
        <svg width={props.width || "100"} height={props.height || "100"} viewBox={props.viewBox ||"0 0 100 100"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconID}`}></use>
        </svg>
    );
};