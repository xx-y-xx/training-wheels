import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {S} from "../skills/skill/Skills_Styles.ts";
import {Container} from "../../../components/Container.tsx";
import React from "react";

export const Testimony:React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>Testimony</SectionTitle>
                    <S.IconWrapper>
                        <Icon iconID={"redGit"} width={'50'} height={'50'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    ${S.IconWrapper} {
        margin: 92px 0 72px;
    }
`