import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";
import {S} from "./skill/Skills_Styles.ts"

const skillDatta = [
    {
        iconID:"figma",
        title:"html 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },
        {
        iconID:"figma",
        title:"html 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },
        {
        iconID:"gitHub",
        title:"html 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },
        {
        iconID:"gitHub",
        title:"html 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },
        {
        iconID:"redGit",
        title:"hehe 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },
        {
        iconID:"redGit",
        title:"html 5",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
    },

]

export const Skills = () => {
    return (
        <div>
            <S.Skills>
                <Container>
                    <SectionTitle>My Skills</SectionTitle>
                    <FlexWrapper wrap={'wrap'}>
                        {skillDatta.map((s,index)=>{
                            return <Skill iconID={s.iconID} title={s.title} text={s.description} key={index}/>
                        })}
                    </FlexWrapper>
                </Container>
            </S.Skills>
        </div>
    );
};
