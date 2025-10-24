import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle.tsx";
import {Button} from "../../../components/button/button.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}></Field>
                <Field placeholder={"subject"}></Field>
                <Field placeholder={"message"} as={"textarea"}></Field>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>

        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: #dbe111;    
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input``