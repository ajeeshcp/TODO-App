import React from 'react'
import { Alert } from 'react-bootstrap'

function Completed(props) {

    const toDos = props.toDos ;
   

    return (
        <div className="border border-warning p-4 rounded mb-3 shadow-sm"  style={{minHeight:"200px"}}>
             <h3 className="text-center mb-4 text-success">Completed Tasks<i class="bi bi-check2-square ps-3"></i></h3>
            {
                toDos.map((item) => {
                    if(item.status){
                        return <Alert className="d-flex justify-content-between" variant="success">{item.text}<i class="bi bi-check-circle"></i></Alert>
                    }
                })
            }
           
            

        </div>
    )
}

export default Completed
