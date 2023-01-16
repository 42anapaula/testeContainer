import style from './Conteiner.module.scss'
import http from "../../http/http";
import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { FaRegSave, FaTrashAlt } from "react-icons/fa";
import ICliente from '../../interfaces/ICliente';
import IConteiner from '../../interfaces/IConteiner';
import { Categorias } from '../../interfaces/Categorias';

export default function Conteiner(){

  const [clientes, setClientes] = useState<ICliente[]>([])
  const [Conteiners, setConteiners] = useState<IConteiner[]>([])

  useEffect(() => {
    http.get('clientes')
      .then(resp => setClientes(resp.data))
    
    http.get('conteiners')
      .then(resp => setConteiners(resp.data))
  }, [])
  
  const excluir = (conteinerExclusao: IConteiner) => {
    http.delete(`conteiners/${conteinerExclusao.nConteiner}`)
    .then(() => {
      const listaConteiner = Conteiners.filter(conteiner => conteiner.nConteiner !== conteinerExclusao.nConteiner)
      setConteiners([...listaConteiner])
    })

  }

  const salvar = (idConteiner: string) => {

    let cliente: string = (document.getElementById(`cliente${idConteiner}`) as HTMLInputElement).value
    let tipo: string = (document.getElementById(`tipo${idConteiner}`) as HTMLInputElement).value
    let status: string = (document.getElementById(`status${idConteiner}`) as HTMLInputElement).value
    let categoria: string = (document.getElementById(`categoria${idConteiner}`) as HTMLInputElement).value

    http.put(`conteiners`,{
      "idCliente": cliente,
      "nConteiner": idConteiner,
      "tipo": tipo,
      "status": status,
      "categoria": categoria
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
              <th>Cliente</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {Conteiners.map(conteiner => 
              <tr key={conteiner.nConteiner}>
                <td>{conteiner.nConteiner}</td>
                <td>
                  <select id={`cliente${conteiner.nConteiner}`} defaultValue={conteiner.idCliente}>
                  <option value="">Selecionar Cliente</option>
                  {clientes.map(cliente => <option key={cliente.id} value={cliente.id}> {cliente.nome} </option> )}
                  </select>
                </td>
                <td>
                  <select id={`tipo${conteiner.nConteiner}`} defaultValue={conteiner.tipo}>
                    <option value=""></option>
                    <option value="20">20</option>
                    <option value="40">40</option>
                  </select>
                </td>
                <td>
                <select id={`status${conteiner.nConteiner}`} defaultValue={conteiner.status}>
                    <option value=""></option>
                    <option value="true">Cheio</option>
                    <option value="false">Vazio</option>
                  </select>
                </td>
                <td>
                  <select id={`categoria${conteiner.nConteiner}`} defaultValue={conteiner.categoria}>
                    <option value=""> Selecione uma Categoria </option>
                    {Categorias.map(categoria => <option key={categoria.key} value={categoria.key}> {categoria.label} </option>)}
                  </select>
                </td>
                <td>
                  <Button variant="outline-primary" onClick={() => salvar(conteiner.nConteiner)}> <FaRegSave/> </Button>
                  <Button variant="outline-danger" onClick={() => excluir(conteiner)}> <FaTrashAlt/> </Button>
                </td>
              </tr>
            )}
              
          </tbody>
        </Table>
      </div>
    </>
  );
}