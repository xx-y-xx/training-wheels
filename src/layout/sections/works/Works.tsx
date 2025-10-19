import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {Work} from "./Work/Work.tsx";
import socialImg from "../../../assets/images/placeholder-projects.png"


const WorksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <div>
                <SectionTitle>Works</SectionTitle>
                <Menu menuItems={WorksItems}/>
                <FlexWrapper>
                    <Work title={"Social Networks"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} src={socialImg}/>
                    <Work title={"Social Networks"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} src={socialImg}/>
                </FlexWrapper>
            </div>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #85b5d8;
`