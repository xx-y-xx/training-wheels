import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/menu/FlexWrapper.tsx";

type SkillsPropsType = {
    iconID: string
    title: string
    text: string

}
export const Skill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconID={props.iconID} width={'50'} height={'50'} />
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`
const SkillTitle = styled.h3`
margin: 70px 15px;
text-transform: uppercase;`
const SkillText = styled.p`
    text-align: center;
    line-height: 1.4;
`
export const IconWrapper = styled.div`
position: relative;
&::before{
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translate(-50%, -50%);
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
} 
`