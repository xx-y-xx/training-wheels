import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>Testimony</SectionTitle>
                <Icon iconID={"redGit"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background: #e985ec`