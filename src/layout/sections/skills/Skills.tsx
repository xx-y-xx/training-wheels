import styled from "styled-components";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";


export const Skills = () => {
    return (
        <div>
            <StyledSkills>
                <Container>
                    <SectionTitle>My Skills</SectionTitle>
                    <FlexWrapper wrap={'wrap'}>
                        <Skill iconID={"figma"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                        <Skill iconID={"figma"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                        <Skill iconID={"gitHub"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                        <Skill iconID={"gitHub"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                        <Skill iconID={"redGit"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                        <Skill iconID={"redGit"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                    </FlexWrapper>
                </Container>
            </StyledSkills>
        </div>
    );
};
 const StyledSkills = styled.section``