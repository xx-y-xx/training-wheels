import {FlexWrapper} from "../menu/FlexWrapper.tsx";
import {S} from "./Slider_Styles.ts"
import React from "react";

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut</S.Text>
                    <S.Name>@Ivan Ivanov</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};