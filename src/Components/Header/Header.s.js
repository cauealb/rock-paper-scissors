import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    /* font-size: 2rem; */
`;

const DivBasePoints = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1.6rem;
    line-height: 1.4;
    letter-spacing: 1px;
    font-size: 0.95rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`;

export const StyledDivPoitsMe = styled(DivBasePoints)`
    color: #007FFF;
`;

export const StyledDivPoitsMachine = styled(DivBasePoints)`
    color: #FC736E;
`;

export const DivLogo = styled.div`
    display: flex;
    gap: 0.50rem;
    font-size: 2rem;
`;

export const StyledLogo1 = styled.h1`
    color: #FC736E;
`;

export const StyledLogo2 = styled.h1`
    color: #007FFF;
`;