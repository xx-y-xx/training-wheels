import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {Work} from "./Work/Work.tsx";
import socialImg from "../../../assets/images/placeholder-projects.png"
import {Container} from "../../../components/Container.tsx";
import {TabMenu} from "./Work/tabMenu/TabMenu.tsx";
import React from "react";
import {S} from "./Works_Styles.ts"

const workData = [{title:'Social Networks',src:socialImg, text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},{title:'Social Networks',src:socialImg, text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}]
const WorksItems = ["All", "landing page", "React", "spa"]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>Works</SectionTitle>
                <TabMenu menuItems={WorksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    {workData.map((w, index) => {
                        return <Work title={w.title} text={w.text} key={index} src={socialImg}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};