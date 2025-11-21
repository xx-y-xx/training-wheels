import styled from "styled-components";
import {FlexWrapper} from "../menu/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.tsx";

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
                <span className={'active'}></span>
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
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;
    `

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;        
        background: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${Theme.colors.accent};
            width: 20px;
        }
    }`