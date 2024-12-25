import { Robot  } from "phosphor-react"
import { StyledPrincipalSection, StyledPrincipalMachine } from "./Play.s"

export function Play() {
    return (
        <>
            <StyledPrincipalSection>
                <StyledPrincipalMachine>
                    <h2>Machine</h2>
                    <Robot size={250} weight="duotone" />
                </StyledPrincipalMachine>
                <h1>VS</h1>
                <div>
                    <div>
                        <p>Rock</p>
                        <span></span>
                    </div>

                    <div>
                        <p>Paper</p>
                        <span></span>
                    </div>

                    <div>
                        <p>Scissors</p>
                        <span></span>
                    </div>
                </div>
            </StyledPrincipalSection>
        </>
    )
}