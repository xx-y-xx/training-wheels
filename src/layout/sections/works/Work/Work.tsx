import {Link} from "../../../../components/link/Link.ts";
import {Button} from "../../../../components/button/button.ts";
import React from "react";
import {S} from "../Works_Styles.ts"

type WorksPropsType = {
    title: string
    text: string
    src:string
    id:number
}

export const Work: React.FC<WorksPropsType> = (props: WorksPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
            </S.Description>

            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
        </S.Work>
    );
};