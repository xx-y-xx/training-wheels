import styled from "styled-components";

type WorksPropsType = {
    title: string
    text: string
    src:string
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
        </StyledWork>
    );
};
const StyledWork = styled.div``

const Image = styled.img``

const Link = styled.a``

const Title = styled.h3``

const Text = styled.p``