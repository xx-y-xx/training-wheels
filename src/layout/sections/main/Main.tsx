import photo from "../../../assets/images/Rectangle 4.png";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.tsx";


export const Main = () => {
    return (
        <div>
            <StyledMain>
                <Container>
                    <FlexWrapper align={'center'} justify={'space-between'}>
                        <div>
                            <SmallText>Hi There</SmallText>
                            <Name>I am <span>Svetlana Dyablo</span></Name>
                            <MainTitle>A Web Developer.</MainTitle>
                        </div>
                        <PhotoWrapper>
                            <Photo src={photo} alt="Photo"/>
                        </PhotoWrapper>
                    </FlexWrapper>
                </Container>
            </StyledMain>
        </div>
    );
};

const MainTitle = styled.h1``
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #efd0a1;
    display: flex;
`
const PhotoWrapper = styled.div`
position: relative;
    z-index: 0;
    &::before{
        content: '';        
        width: 360px;
        height: 470px;
        border: 5px solid ${Theme.colors.accent};
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const SmallText = styled.span``
const Name = styled.h2`
    font-family: "Josefin Sans", sans-serif;;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 1;

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
`