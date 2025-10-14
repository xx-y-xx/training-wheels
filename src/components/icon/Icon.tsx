import iconsSprite from "../../assets/images/skills-icons-sprite.svg";

type IconPropsType = {
    iconID: string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "100"} viewBox={props.viewBox ||"0 0 100 100"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconID}`}></use>
        </svg>
    );
};