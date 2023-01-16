import { Button, FormControl, FormLabel } from "react-bootstrap";
import style from "./Cliente.module.scss"
import { useState } from 'react';
import http from "../../http/http";

export default function NovoCliente(){

  const [nomeCliente, setNomeCliente] = useState("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    http.post('clientes',{
      "nome": nomeCliente
    })
    .then(() => {
      console.log('Cliente Adicionado');
    })
    .catch(erro => {console.log(erro);
    })
  }

  return(
    <>
      <div className={style.conteiner}>
        <form onSubmit={submitForm}>
          <FormLabel htmlFor="inputNome">Nome:</FormLabel>
          <FormControl id="inputNome" value={nomeCliente} onChange={event => setNomeCliente(event.target.value)}/>
          <Button variant="primary" type="submit"> Salvar Cliente </Button>
        </form>
      </div>
    </>
  );
}