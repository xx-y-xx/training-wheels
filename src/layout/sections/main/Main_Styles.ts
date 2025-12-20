import styled from "styled-components";
import {font} from "../../../styles/Common.tsx";
import {Theme} from "../../../styles/Theme.tsx";


const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 27, Fmin: 20})}`

const Main = styled.section`
    min-height: 100vh;
    background-color: #efd0a1;
    display: flex;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;    

    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
        @media ${Theme.media.mobile} {
            width: 314px;
            height: 414px;
        }

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${Theme.media.mobile} {
            margin-top: 65px;
        }
    }
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    @media ${Theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const SmallText = styled.span``
const Name = styled.h2`
    ${font({family: 'Josefin Sans, sans-serif', weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 1;
        white-space: nowrap;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    @media ${Theme.media.mobile} {
        margin: 15px 0 22px;
    }
`
export const S ={
    MainTitle,
    Main,
    PhotoWrapper,
    Photo,
    SmallText,
    Name,
}