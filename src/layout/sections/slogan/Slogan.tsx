import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Button} from "../../../components/button/button.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
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