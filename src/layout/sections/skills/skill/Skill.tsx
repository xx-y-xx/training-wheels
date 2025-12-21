import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/menu/FlexWrapper.tsx";
import {S} from "./Skills_Styles.ts"
import React from "react";


type SkillsPropsType = {
    iconID: string
    title: string
    text: string

}
export const Skill: React.FC<SkillsPropsType> = (props: SkillsPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconID={props.iconID} width={'50'} height={'50'} />
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};