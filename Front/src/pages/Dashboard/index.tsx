import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import style from './Dashboard.module.scss'

export default function Dashboard(){
  return(
    <>
      <div className={style.container}>
        <Row>
          <Col xl={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xl={10}  id="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </div>
    </>
  )
}