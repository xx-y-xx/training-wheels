import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/menu/FlexWrapper.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {font} from "../../styles/Common.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Svetlana</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} iconID={"redGit"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} iconID={"figma"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} iconID={"redGit"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon width={"21"} height={"21"} iconID={"figma"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({family:'Josefin Sans, sans-serif', weight: 700, Fmax:22, Fmin:16})}    
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