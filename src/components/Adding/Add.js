import React, { useEffect, useState } from 'react'
import {Alert, Button,Col,Container,FloatingLabel,Form, Row} from "react-bootstrap" ;
import "../Adding/Add.css"

function Add(props) {

   
    const toDo = props.toDo ;
    const toDos = props.toDos ;
    const setToDo = props.setToDo ;
    const setToDos = props.setToDos ;
    const [time, setTime] = useState({});
    
    useEffect(() => {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        let now = dd+"-"+mm+"-"+yyyy ;

        let getDay = () => {
            
            let n = today.getDay();
            switch (n) {
                case 0:
                    return "Sunday"
                  
            
                case 1:
                    return "Monday"
                   
            
                case 2:
                    return "Thuesday"
                   
            
                case 3:
                    return "Wedensday"
                    
            
                case 4:
                    return "Thursday"
                   
            
                case 5:
                    return "Friday"
                   
            
                case 6:
                    return "Saturday"
                   
            
                default:
                    return null;
                    
            }
        }
        setTime({dte:now,week:getDay()})
    }, [])
    



    return (
        <div className="add-wrapper mt-3">   
            <Container>
                <h3 className="heading text-center text-dark shadow p-3 border border-secondary rounded">TODO<i class="bi bi-card-checklist ps-4 pe-4"></i><span className="text-secondary">{time.dte+" , "+time.week}</span></h3>
                <Row className="justify-content-md-center input-items mt-5 ">
                    <Col xs={12} lg={5}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Write Here.."
                            className="mb-3"
                        >
                        <Form.Control type="text" id="input-field" placeholder="name@example.com" onChange={(e)=>{ setToDo(e.target.value) }} style={{
                            boxShadow: "16px 16px 12px -13px rgba(0,0,0,0.08) inset"
                        }}/>
                        </FloatingLabel>
                    </Col>
                    <Col xs lg="2">
                        <Button onClick={() => {

                             setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])
                             document.getElementById("input-field").value = " " 
                             document.getElementById("input-field").focus()
                            }} variant="outline-info">Add Item</Button>
                    </Col>
                </Row>
            </Container>

           

        </div>
    )
}

export default Add
