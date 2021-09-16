import React from 'react'
import { Alert } from 'react-bootstrap'

function Cancel(props) {
    const cancel = props.cancel ;
    const setCancel = props.setCancel ;

    return (
        <div className="border border-info p-4 rounded mb-3 shadow-sm" style={{minHeight:"200px"}}>
             <h3 className="text-center mb-4 text-danger">Cancelled Tasks<i class="bi bi-trash ps-3"></i></h3>
            {
                cancel.map((item) => {
                    return <Alert className="d-flex justify-content-between" variant="warning">{item.text}<i class="bi bi-x-circle" style={{cursor:"pointer"}} onClick={
                        () => {
                            setCancel(cancel.filter(obj=> {
                                return obj!==item
                            }))
                        }
                    }></i></Alert>
                })
            }          
           
        </div>
    )
}

export default Cancel
