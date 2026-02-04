import styled from "styled-components";

//🔶🔷 Skills.tsx
const Skills = styled.section`
position: relative;
`

//🔶🔷 Skill.tsx
const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 62px 20px 40px;
`
const SkillTitle = styled.h3`
margin: 70px 15px;
text-transform: uppercase;`
const SkillText = styled.p`
    text-align: center;
    line-height: 1.4;
`
const IconWrapper = styled.div`
position: relative;
&::before{
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translate(-50%, -50%);
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
} 
`

export const S ={
    Skills,
    Skill,
    SkillTitle,
    SkillText,
    IconWrapper
}