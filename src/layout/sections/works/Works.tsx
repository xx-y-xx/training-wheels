import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {Work} from "./Work/Work.tsx";
import socialImg from "../../../assets/images/placeholder-projects.png"
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./Work/tabMenu/TabMenu.tsx";


const WorksItems = ["All", "landing page", "React", "spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Works</SectionTitle>
                <TabMenu menuItems={WorksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work title={"Social Networks"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} src={socialImg}/>
                    <Work title={"Social Networks"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} src={socialImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper}{
        gap:30px;
    }
`