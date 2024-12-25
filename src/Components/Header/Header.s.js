import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 1px 0 5px gray;
    font-size: 4rem;
`;

const DivBasePoints = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1.6rem;
    line-height: 1.4;

    div {
        display: flex;
        gap: 0.75rem;
    }
`;

export const StyledDivPoitsMe = styled(DivBasePoints)`
    color: #007FFF;
`;

export const StyledDivPoitsMachine = styled(DivBasePoints)`
    color: #FC736E;
`;