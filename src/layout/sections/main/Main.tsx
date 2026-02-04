import photo from "../../../assets/images/Rectangle 4.png";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/menu/FlexWrapper.tsx";
import React from "react";
import {S} from "./Main_Styles.ts"
import Typewriter from 'typewriter-effect'

export const Main: React.FC = () => {
    return (
        <div>
            <S.Main id={'home'}>
                <Container>
                    <FlexWrapper align={'center'} justify={'space-between'}>
                        <div>
                            <S.SmallText>Hi There</S.SmallText>
                            <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                            {/*<S.MainTitle>A Web Developer</S.MainTitle>*/}
                            <S.MainTitle>

                                <Typewriter
                                    options={{
                                        strings: ['A Web Developer', 'World'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                    }}
                                />
                            </S.MainTitle>
                        </div>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="Photo"/>
                        </S.PhotoWrapper>
                    </FlexWrapper>
                </Container>
            </S.Main>
        </div>
    );
};