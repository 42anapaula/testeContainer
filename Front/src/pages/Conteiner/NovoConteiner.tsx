import { Button, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import { useEffect, useState } from 'react';
import style from './Conteiner.module.scss'
import http from "../../http/http";
import ICliente from "../../interfaces/ICliente";
import { Categorias } from "../../interfaces/Categorias";
import { IMaskInput } from 'react-imask';

export default function NovoConteiner(){

  const [idCliente, setIdCliente] = useState("");
  const [nConteiner, setNConteiner] = useState("");
  const [tipo, setTipo] = useState("");
  const [status, setStatus] = useState("");
  const [categoria, setCategoria] = useState("");

  const [clientes, setClientes] = useState<ICliente[]>([])

  useEffect(() => {
    http.get('clientes')
      .then(resp => setClientes(resp.data))
  }, [])

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    http.post('conteiners',{
      "idCliente": idCliente,
      "nConteiner": nConteiner.toUpperCase(),
      "tipo": tipo,
      "status": status,
      "categoria": categoria
    })
    .then(() => {
      console.log('Conteiner Adicionado');
    })
    .catch(erro => {console.log(erro);
    })
  }

  return(
    <>
      <div className={style.conteiner}>
        <form onSubmit={submitForm}>
          <FormLabel htmlFor="inputN">Númeoro do conteiner:</FormLabel>
          <FormControl 
            as={IMaskInput}
            mask='aaaa0000000'
            type="text"
            id="inputN" 
            value={nConteiner} 
            onChange={event => setNConteiner(event.target.value)}
            />

          <FormLabel>Cliente:</FormLabel>
          <FormSelect 
            value={idCliente}
            onChange={event => setIdCliente(event.target.value)}
            required>
            <option value="">Selecionar Cliente</option>
            {clientes.map(cliente => <option key={cliente.id} value={cliente.id}> {cliente.nome} </option> )}
          </FormSelect>

          <FormLabel>Tipo:</FormLabel>
          <FormSelect
            value={tipo}
            onChange={event => setTipo(event.target.value)}
            required
          >
            <option value=""> Selecione um tipo </option>
            <option value="20"> 20 </option>
            <option value="40"> 40 </option>
          </FormSelect>

          <FormLabel>Status:</FormLabel>
          <FormSelect
            value={status}
            onChange={event => setStatus(event.target.value)}
            required
          >
            <option value=""> Selecione um Status </option>
            <option value="true"> Cheio </option>
            <option value="false"> Vazio </option>
          </FormSelect>

          <FormLabel>Categoria:</FormLabel>
          <FormSelect
            value={categoria}
            onChange={event => setCategoria(event.target.value)}
            required
          >
            <option value=""> Selecione uma Categoria </option>
            {Categorias.map(categoria => <option key={categoria.key} value={categoria.key}> {categoria.label} </option>)}
          </FormSelect>


          <Button variant="primary" type="submit"> Salvar Cliente </Button>
        </form>
      </div>
    </>
  );
}