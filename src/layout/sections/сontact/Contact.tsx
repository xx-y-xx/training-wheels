import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Button} from "../../../components/button/button.ts";
import {Container} from "../../../components/Container.tsx";
import {S} from "./Contact_Styles.ts"

export const Contact: React.FC = () => {
    return (
        <S.Contact id={'contact'}>
            <SectionTitle>Contact</SectionTitle>
            <Container>
                <S.Form>
                    <S.Field placeholder={"name"}></S.Field>
                    <S.Field placeholder={"subject"}></S.Field>
                    <S.Field placeholder={"message"} as={"textarea"}></S.Field>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};