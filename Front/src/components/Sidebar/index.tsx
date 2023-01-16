import classNames from "classnames";
import { Link } from "react-router-dom";
import style  from "./Sidebar.module.scss";

export default function Sidebar(){
  return(
    <>
      <div className={style.sidebar}>
        <nav 
            className={classNames({
              [style.sidebar]: true,
              "col-md-12": true,
              "d-none": true,
              "d-md-block": true,
              "bg-light": true
              })}
            >

        <h4> Clientes </h4>
        <Link to="/cliente/">
          <li>
            Clientes
          </li>
        </Link>
        <Link to="/cliente/novo">
          <li>
            Novo Cliente
          </li>
        </Link>

        <h4> Conteiners </h4>
        <Link to="/conteiner/">
          <li>
            Conteiners
          </li>
        </Link>
        <Link to="/conteiner/novo">
          <li>
            Novo Conteiner
          </li>
        </Link>

        </nav>

       

      </div>
    </>
  );
}