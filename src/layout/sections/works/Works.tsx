import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import {Work} from "./Work/Work.tsx";
import socialImg from "../../../assets/images/placeholder-projects.png"
import {Container} from "../../../components/Container.tsx";
import {TabMenu, TabsStatusType} from "./Work/tabMenu/TabMenu.tsx";
import React, {useState} from "react";
import {S} from "./Works_Styles.ts"

const workData = [{
    title: 'Social Networks',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'landing'
}, {
    title: 'Timer',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'spa'
}]

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'spa',
        status: 'spa'
    },
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredWorks = workData

    if (currentFilterStatus === 'landing') {
        filteredWorks = workData.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = workData.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = workData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value:TabsStatusType){
        setCurrentFilterStatus(value)
    }
    return (
        <S.Works>
            <Container>
                <SectionTitle>Works</SectionTitle>
                <TabMenu menuItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    {filteredWorks.map((w, index) => {
                        return <Work title={w.title} text={w.text} key={index} src={socialImg}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};