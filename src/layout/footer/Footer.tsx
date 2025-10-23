import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/menu/FlexWrapper.tsx";


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
                        <Icon width={"21"} height={"21"}  iconID={"redGit"}/>
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

const StyledFooter = styled.footer``
const Name = styled.span``
const SocialList = styled.ul`
display: flex;
gap: 10px`
const SocialItem = styled.li``
const SocialLink = styled.a``
const Copyright = styled.small``