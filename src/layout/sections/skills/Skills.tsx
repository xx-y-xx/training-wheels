import styled from "styled-components";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";


export const Skills = () => {
    return (
        <div>
            <StyledSkills>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'}>
                <Skill iconID={"figma"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                <Skill iconID={"figma"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                <Skill iconID={"gitHub"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                <Skill iconID={"gitHub"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                <Skill iconID={"redGit"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                <Skill iconID={"redGit"} title={"html 5"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut"} />
                </FlexWrapper>
            </StyledSkills>
        </div>
    );
};
 const StyledSkills = styled.section`
     background-color: #b0ec7e;
     min-height: 100vh;
 `