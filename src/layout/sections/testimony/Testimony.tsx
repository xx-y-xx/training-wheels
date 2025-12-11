import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {IconWrapper} from "../skills/skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Testimony</SectionTitle>
                    <IconWrapper>
                        <Icon iconID={"redGit"} width={'50'} height={'50'}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    ${IconWrapper} {
        margin: 92px 0 72px;
    }
`