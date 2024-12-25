import { useState } from "react";
import { StyledHeader, StyledScoreMachine, StyledScoreMe, LogoPart1, LogoPart2 } from "./Header.s";

export function Header() {

    const [scoreMachine, setScoreMachine] = useState(0)
    const [scoreMe, setScoreMe] = useState(0)

    return (
        <>
            <StyledHeader>
                <StyledScoreMachine>
                    <h1>Score (machine)</h1>
                    <h2>{scoreMachine}</h2>
                </StyledScoreMachine>
                <div>
                    <LogoPart1>Rock Paper </LogoPart1><LogoPart2>Scissors</LogoPart2>
                </div>
                <StyledScoreMe>
                    <h1>Score (me)</h1>
                    <h2>{scoreMe}</h2>
                </StyledScoreMe>
            </StyledHeader>
        </>
    )
}