import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    aign-items: center;
    
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;

    @media(min-width: 767px){
        width: 280px;
        margin-bottom: 0;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a cauntry'
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    background: var(--colors-bg);
    color: var(--color-text);
`;

export const Search = ({search, setSearch}) => {

    const hendlerClick = (e) => {
        setSearch(e.target.value);
    }

    return(
        <InputContainer>
            <IoSearch/>
            <Input 
                value={search}
                onChange={hendlerClick}
            />
        </InputContainer>
    )
}