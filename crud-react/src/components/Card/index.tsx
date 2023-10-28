import { CardInfo } from "./CardInfo";
import { CardContainer } from "./styles";

export function Card() {
    return (
        <CardContainer>
            <div>
                <CardInfo />

                <button>Editar</button>
                <button>Delete</button>
            </div>
        </CardContainer>
    )
}