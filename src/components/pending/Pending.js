import React from 'react'
import { Alert,Form } from 'react-bootstrap'
import "../pending/Pending.css";
function Pending(props) {

    const toDos = props.toDos ;
    const setToDos = props.setToDos ;
    const setCancel = props.setCancel ;
    const cancel = props.cancel;
    
    return (
        <div className="border border-danger p-4 rounded mb-3 shadow-sm"  style={{minHeight:"200px"}}>
            
            <h3 className="text-center mb-4 text-info">Pending Tasks <i class="bi bi-clock-history ps-2"></i></h3>

            {
                toDos.map((item) => {

                    return (
                        <Alert variant="primary" className="d-flex justify-content-between pb-1 alert-box " style={item.status ? {textDecoration:"line-through"} :null}>{item.text}
                            <div className="d-flex justify-content-between">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" value={item.status} 
                            onChange={(e) => {
                                
                                console.log(e.target.checked) ;
                                console.log(item);
                                setToDos(toDos.filter(obj => {
                                    if(obj.id===item.id){
                                        obj.status=e.target.checked ;
                                    }
                                    return obj ;
                                }))
                                }}/>
                            </Form.Group>
                            <i class="bi bi-x-square ps-4 pe-2 fs-5 text-danger pending-trash"  onClick={
                                () => {
                                  let  x = window.confirm("Do you want to delete..");
                                  if(x){
                                    setToDos(
                                        toDos.filter(obj => {
                                            return obj!==item
                                        })
                                    )
                                    setCancel([...cancel,item])
                                  }
                                   
                                }
                               
                            }></i>
                            </div>
                        </Alert>
                    )
                })
            }
            
            
         
            
           
        </div>
    )
}

export default Pending
