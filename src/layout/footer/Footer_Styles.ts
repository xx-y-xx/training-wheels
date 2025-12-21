import styled from "styled-components";
import {font} from "../../styles/Common.tsx";
import {Theme} from "../../styles/Theme.tsx";


const Footer = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({family: 'Josefin Sans, sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 0.14em;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li``
const SocialLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;

    background-color: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${Theme.colors.accent};

    &:hover {
        color: ${Theme.colors.font};
        transform: translateY(-4px);
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
`
export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
}