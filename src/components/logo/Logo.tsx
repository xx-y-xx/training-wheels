import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import React from "react";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <PortfolioLogo onClick={()=> {scroll.scrollToTop()}}>
                <Icon width={'43'} height={'43'} iconID={'figma'} />
        </PortfolioLogo>
    );
};
const PortfolioLogo = styled.a``
