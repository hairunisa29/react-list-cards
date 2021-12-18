import React, { useEffect } from 'react';
import './css/style.css'
import CardData from './CardData';


function ModalCards(props){
    
    
    // console.log(props.fullname)
    // console.log(props.dateOfBirth)

    // console.log(props.data)

    useEffect(() => {
        console.log(props.data)
    }, [props.data])
    
    return (
            <div id="previewCard">
                
                {props.data.map((item) => (
                    // console.log(index),
                    <div className="card-data" key={item.id}>
                        <CardData onClose={item.closeHandler} id={item.id} length={item.length} lastKey={item.id - 1} fullname={item.fullname} dateOfBirth={item.dateOfBirth} company={item.company} phonenum={item.phonenum} role={item.role} file={item.file}/>
                    </div>
                    ))
                           
                }
                
                  
                
            </div>
            
            

        
    )
}

export default ModalCards;