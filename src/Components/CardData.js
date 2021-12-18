import React from 'react';

import './css/style.css';




function CardData(props){
    return(
        <div className = "card">
            <div className='prevGroup'>
                <div className="top-container"> <img src={props.file} className="profile-img" alt='foto'/>
                    <div className="ml-3">
                        <h5 className="name">{props.fullname}</h5>
                        <p className="mail">{props.dateOfBirth}</p>
                    </div>
                </div>
                         
                         
                <div className="name-container"> 
                    <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                        <div className="icon">
                            <div className="round-div"><i className="fa fa-building"></i></div>
                        </div>
                        <div className="d-flex flex-column"> 
                            <span className="company">{props.company}</span> 
                            <span className="role">{props.role}</span> 
                        </div>
                    </div>
                    <div className="phonenum">
                        <i className="nav-icon fa fa-phone-square"></i>
                        <span className="phonenumdetail">{props.phonenum}</span>
                    </div>
                </div>
                  
            </div>

            {/* {props.length === props.id - 1 && <button className="btn"
                                                          type="submit"
                                                          style={{ background: "#1b1a7a", border: "none", width: '100px', color: "#ffff", marginTop:"10px", marginLeft:"30px"}} 
                                                          onClick={submitFinalHandler} />}    */}
            
            {/* <button 
                type="button" 
                className="btn btn-secondary" 
                style={{ background: "#1b1a7a", border: "none", width: '80px', color: "#ffff", alignItems:'center', marginLeft:"80px"}}
            >
                Close
            </button> */}
                
                               
                            
        </div>
    )
}



export default CardData;