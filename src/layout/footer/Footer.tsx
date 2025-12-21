import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/menu/FlexWrapper.tsx";
import React from "react";
import {S} from "./Footer_Styles.ts"

const socialItemData = [
    {
        iconID: "redGit",
    },
    {
        iconID: "figma",
    },
    {
        iconID: "redGit",
    },
    {
        iconID: "figma",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Svetlana</S.Name>
                <S.SocialList>
                    {socialItemData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon width={"21"} height={"21"} iconID={s.iconID}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};