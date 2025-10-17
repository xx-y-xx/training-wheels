import styled from "styled-components";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Skills = () => {
    return (
        <div>
            <StyledSkills>
                <SectioTitle></SectioTitle>
                <FlexWrapper>
                    <Icon iconID={}/>
                    <SkillTitle></SkillTitle>
                    <SkillText></SkillText>
                </FlexWrapper>

            </StyledSkills>

        </div>
    );
};
 const StyledSkills = styled.section``
const SectioTitle = styled.h2``