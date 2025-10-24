import styled from "styled-components";
import {FlexWrapper} from "../menu/FlexWrapper.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut</Text>
                    <Name>@Ivan Ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>

    );
};

const StyledSlider = styled.div`
    border: solid 1px red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div``
const Text = styled.p``
const Name = styled.span``
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background: #54df90;
    }`
