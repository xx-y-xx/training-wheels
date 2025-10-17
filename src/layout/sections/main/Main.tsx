import photo from "../../../assets/images/Rectangle 4.png";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";


export const Main = () => {
    return (
        <div>
            <StyledMain>
                <FlexWrapper align={"center"} justify={"space-around"}>

                    <span>Hi There</span>
                    <span>I am Svetlana</span>
                    <MainTitle>A Web Developer.</MainTitle>

                    <Photo src={photo} alt="Photo"/>

                </FlexWrapper>
            </StyledMain>
        </div>
    );
};

const MainTitle = styled.h1``
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #efd0a1;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`