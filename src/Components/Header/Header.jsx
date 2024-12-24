import { useState } from "react";
import { StyledHeader, StyledDivPoints } from "./Header.s";

export function Header() {

    const [scoreMachine, setScoreMachine] = useState(0)
    const [scoreMe, setScoreMe] = useState(0)

    return (
        <>
            <StyledHeader>
                <StyledDivPoints>
                    <h1>Score (machine)</h1>
                    <h2>{scoreMachine}</h2>
                </StyledDivPoints>
                <h1>Rock Paper Scissors</h1>
                <StyledDivPoints>
                    <h1>Score (me)</h1>
                    <h2>{scoreMe}</h2>
                </StyledDivPoints>
            </StyledHeader>
        </>
    )
}