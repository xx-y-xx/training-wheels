import styled from "styled-components";
import {Link} from "../../../../components/link/Link.tsx";
import {Theme} from "../../../../styles/Theme.tsx";
import {Button} from "../../../../components/button/button.tsx";

type WorksPropsType = {
    title: string
    text: string
    src:string
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </Description>

            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
        </StyledWork>
    );
};
const StyledWork = styled.div`
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