import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
import {Link} from "../../../components/link/Link.ts";
import {Button} from "../../../components/button/button.ts";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";

//🔶🔷 Work.tsx
const Work = styled.div`
    width: 330px;
    flex-grow: 1;
    background-color: ${Theme.colors.secondaryBg};    
    
${Link}{
    padding: 10px 0;
    &::before{bottom: 5px;}
    
    & + ${Link}{
        margin-left: 20px;
    }
}
    @media ${Theme.media.desktop}{
        max-width: 540px;
    }
`
const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        ${Button} {
            opacity: 1;
        }
        &::before {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }
    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
    }
    @media ${Theme.media.tablet} {
        ${Button} {
            opacity: 1;
        }
        &::before {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Description = styled.div`
padding: 25px 20px;`
const Title = styled.h3``

const Text = styled.p`
margin: 14px 0 10px`

//🔷🔶 Works.tsx
const Works = styled.section`
    ${FlexWrapper}{
        gap:30px;
    }
`
export const S = {
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text,
    Works
}
