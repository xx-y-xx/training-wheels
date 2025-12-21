import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";
//🔶🔷Contact.tsx
const Contact = styled.section``
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

textarea {
    resize: none;
    height: 150px;
}
`
const Field = styled.input`
    border: 1px solid ${Theme.colors.borderColor};
    background-color: ${Theme.colors.secondaryBg};
    padding: 7px 15px;
    width: 100%;    
    
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${Theme.colors.font};
    
    &::placeholder {
        color: ${Theme.colors.font};
        text-transform: capitalize;
    }    
`
export const S = {
    Contact,
    Form,
    Field,
}