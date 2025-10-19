import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type SkillsPropsType = {
    iconID:string
    title:string
    text:string

}
export const Skill = (props:SkillsPropsType) => {
    return (
        <StyledSkill>
            <Icon iconID={props.iconID}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;`
const SkillTitle = styled.h3``
const SkillText = styled.p``