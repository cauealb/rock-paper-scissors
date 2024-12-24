import styled from "styled-components";

export const StyledPrincipalSection = styled.section`
    margin: 15rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
    width: 80%;
    /* padding: 1rem; */
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
`;

export const StyledPrincipalMachine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.90rem;
    /* padding: 1rem 2rem; */
    box-shadow: 4px 4px 7px gray;
    cursor: pointer;
    transition: all 0.2s linear;
    border-radius: 8px;

    &:hover {
        background-color: #E1E1E6
    }
`;