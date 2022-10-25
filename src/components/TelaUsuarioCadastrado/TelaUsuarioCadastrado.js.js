import { Div, Titulo } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <button onClick={() => props.mudarTela(1)}>Voltar a tela inicial</button>
        </Div>
    )
}

export default TelaUsuarioCadastrado;