import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Adding/Add';
import Pending from './components/pending/Pending';
import Completed from './components/completed/Completed';
import Cancel from './components/cancel/Cancel';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';



function App() {


  const [toDos, setToDos] = useState([]) ;
  const [toDo, setToDo] = useState("") ;
  const [cancel, setCancel] = useState([])



  let getdate = () =>{

    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    let now = dd+" "+mm+" "+yyyy ;
    return now;

  }
  
  
  return (
    <div className="App">
      <Add toDo={toDo} toDos={toDos} setToDo={setToDo} setToDos={setToDos} getdate={getdate}/>
      <Container className="mt-5">
        <Row>
          <Col xs={12} lg>
             <Pending setCancel={setCancel} cancel={cancel} toDos={toDos} setToDos={setToDos} />
          </Col>
          <Col xs={12} lg>
             <Completed toDos={toDos}  />
          </Col>
          <Col xs={12} lg>
            <Cancel cancel={cancel} setCancel={setCancel}/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;