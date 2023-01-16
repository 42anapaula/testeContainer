import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import http from '../../http/http';
import ICliente from '../../interfaces/ICliente';
import style from './Cliente.module.scss'
import { FaRegSave, FaTrashAlt } from "react-icons/fa";

export default function Cliente(){
  const [clientes, setClientes] = useState<ICliente[]>([])

  useEffect(() => {
    http.get('clientes')
      .then(resp => setClientes(resp.data))
  }, [])

  const excluir = (clienteExclusao: ICliente) => {
    http.delete(`clientes/${clienteExclusao.id}`)
    .then(() => {
      const listaCliente = clientes.filter(cliente => cliente.id !== clienteExclusao.id)
      setClientes([...listaCliente])
    })

  }

  const salvar = (idCliente: string) => {

    let nomeCliente: string = (document.getElementById(`input${idCliente}`) as HTMLInputElement).value

    http.put(`clientes`,{
      id: idCliente,
      nome: nomeCliente
    })
    .then(() => {
      console.log('Cliente atulaizado');
    })
    .catch(erro => {console.log(erro);
    })
  }

  return(
    <>
      <div className={style.conteiner}>
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => 
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td><input id={`input${cliente.id}`} type='text' defaultValue={cliente.nome} /></td>
                <td>
                  <Button variant="outline-primary" onClick={() => salvar(cliente.id)}> <FaRegSave/> </Button>
                  <Button variant="outline-danger" onClick={() => excluir(cliente)}> <FaTrashAlt/> </Button>
                </td>
              </tr>
            )}
              
          </tbody>
        </Table>
      </div>
    </>
  );
}