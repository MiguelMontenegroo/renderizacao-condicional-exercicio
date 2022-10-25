import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "../TelaCadastro/styled";
import React from "react";

function TelaEndereco(props) {
    return (
<FormContainer>
      <h1>Cadastro de Endereço</h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input id="titulo" endereco={props.endereco}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Numero:
          <Input id="foto" numero={props.numero}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input id="descricao" telefone={props.telefone}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
         Complemento:
          <Input id="descricao" complemento={props.complemento}/>
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(3
            
            )}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>


    )
    }
export default TelaEndereco;