import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Button} from "../../../components/button/button.ts";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import React from "react";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan id={'slogan'}>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>

    );
};

const StyledSlogan = styled.section``