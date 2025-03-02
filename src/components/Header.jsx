import styled from "styled-components"
import { Container } from "./Container"
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);

`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/'
})`
    text-decoration: none;
    color: var(--color-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-normal)
`;

const ModeSwitcher = styled.div`
    color: var(--color-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-normal);
    text-transform: capitalize;
`;

export const Header = ()=> {
    const [theme, setTheme] = useState('light');

    const changeTheme = ()=> {
        setTheme(theme === 'light' ? 'dark':'light');
    }

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme);
    },[theme]);

    return(
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        What is the world?
                    </Title>
                    <ModeSwitcher onClick={changeTheme}>
                        {theme === 'light' ? (<IoMoonOutline size={'14px'}/>):(<IoMoon size={'14px'}/>) }
                        <span style={{marginLeft:'0.75rem'}}>{theme} theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}