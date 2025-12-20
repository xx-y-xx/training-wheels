
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/menu/FlexWrapper.tsx";
import {DesktopMenu} from "./header_Menu/desktopMenu/DesktopMenu.tsx";
import {MobileMenu} from "./header_Menu/mobileMenu/MobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts"

const items = ["Home", "Skills", "Works", "Testimony", "Contact",]
export const Header: React.FC = () => {

        const [width, setWidth] = React.useState(window.innerWidth);
        const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/>: <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};