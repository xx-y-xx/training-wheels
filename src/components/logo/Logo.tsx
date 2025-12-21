import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import React from "react";

export const Logo: React.FC = () => {
    return (
        <PortfolioLogo href="/">
                <Icon width={'43'} height={'43'} iconID={'figma'} />
        </PortfolioLogo>
    );
};
const PortfolioLogo = styled.a``
