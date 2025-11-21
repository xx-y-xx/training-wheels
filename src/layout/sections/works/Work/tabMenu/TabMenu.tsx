import styled from "styled-components";
import {Link} from "../../../../../components/link/Link.tsx";

export const TabMenu = (props:{menuItems:Array<string>}) => {

return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`    
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-bottom: 40px;
    }
`
const ListItem = styled.li``
