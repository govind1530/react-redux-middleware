import React,{useState} from 'react';
import Home from './Pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./Components/TicTacToe/index.css"
import {Card,CardBody, Container,Button,Col,Row} from 'reactstrap';
import Icon from './Components/TicTacToe/Icons' 
const itemArray = new Array(9).fill("empty");
const App = () =>{

const  [isCross,setIsCross] = useState(false);
const [win,setWinMessage] = useState("");

const reloadGame = () =>{

}

const isWinner = () =>{

}

const changeItem = () =>{

}
    return(
      <Container className="p-5">
            <ToastContainer position='bottom-center'/>
            <Row>
                <Col md={6} className="offset-md-3">
                    <div className="grid">
                        {itemArray.map((item,index)=>{
                            return(
                                 <Card>
                                 <CardBody className="box">
                                         <Icon name={item}/>
                                 </CardBody>
                             </Card>
                            )
                        })}
                           
                    </div>
                </Col>
            </Row>
      </Container>
    )
}

export default App;