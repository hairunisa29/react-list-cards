import React, { useState } from 'react';
import ModalCards from './ModalCards';
import image from './image/upload.png'
import './css/style.css'

function FormInput(){
    const form = {
        fullname:"",
        dateOfBirth: "",
        company: "",
        phonenum: "",
        role: ""
    };

    const [file, setFile]= useState(image);

    const [{ fullname, dateOfBirth, company, phonenum, role}, setForm] = useState(form);

    const [data, setData] = useState([])



    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    };

    

    const profilePicHandler = e => {
        let src = setFile(URL.createObjectURL(e.target.files[0]))
        setForm(prevState => ({ ...prevState, name: src }));
    }

    const submitHandler = e => {
        e.preventDefault();
        setData([...data, { "id": data.length + 1, "fullname": fullname, "dateOfBirth": dateOfBirth, "company": company, "phonenum":phonenum, "role":role, 'file':file }]);
        setForm({
            fullname:"",
            dateOfBirth: "",
            company: "",
            phonenum: "",
            role: ""
        })
        setFile(image)
    }

    const resetHandler = e => {
        e.preventDefault();
        setData([])
        setForm({
            fullname:"",
            dateOfBirth: "",
            company: "",
            phonenum: "",
            role: ""
        })
        setFile(image)
    }
    

   
    

    return(
        <>
        <div className="container d-flex justify-content-center mt-5">
            <div className='card' id="form-input-card">
            <div className="card-body">
                <h3 className="card-title" id='form-title'>Form Biodata</h3>
                   <form id='form' onSubmit={submitHandler}>
                          
                    <div className='form-group' id='upload-group'>
                        <label htmlFor='photo-upload'>
                            <div className='img-wrap img-upload'>
                                <img 
                                    id='upload-icon' 
                                    // src={file?file:image} 
                                    src={file}
                                    alt="upload"
                                />
                                <input
                                    type='file'
                                    id='photo-upload'
                                    className='form-control'
                                    name='profile-pic'
                                    onChange={profilePicHandler}
                                    // onChange={(e) => {
                                    //     if (e.target.files.length > 0) {
                                    //     let src = URL.createObjectURL(e.target.files[0]);
                                    //     setFile(prevFile=>({
                                    //       ...prevFile,
                                    //       profilepic: src,
                                    //     }));
                                    //   }
                                    // }}
                                />
                            </div>
                        </label>
                    </div>


                    <div className="form-group">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" className="form-control" name='fullname' id="fullname" placeholder="Enter fullname" value={fullname} onChange={handleChange}/>
                    </div>

          
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input type="date" className="form-control" name='dateOfBirth' id="birthdate" value={dateOfBirth} onChange={handleChange}/>
                    </div>

                    
                
                    <div className='form-group'>
                      <label htmlFor="company">Company</label>
                      <input type="text" className="form-control" name='company' id="company" placeholder="Enter company name" value={company} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phonenum">Mobile Number</label>
                        <input type="text" className="form-control" name='phonenum' id="phonenum" placeholder="Enter mobile number" value={phonenum} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Job</label>
                        <select className="form-select" name='role' id='role' value={role} onChange={handleChange} >
                            <option id='fullstack' value="Fullstack Developer">Fullstack Developer</option>
                            <option id='data' value="Data Scientist">Data Scientist</option>
                            <option id='frontend' value="Frontend Developer">Frontend Developer</option>
                            <option id='backend' value="Backend Developer">Backend Developer</option>
                        </select>
                        
                    </div>
                    

                    <div className='row'>
                        <div className='col'>
                            <button
                                className="btn"
                                type="submit"
                                style={{ background: "#1b1a7a", border: "none", width: '100px', color: "#ffff", marginTop:"10px", marginLeft:"30px"}}
                                // onClick={() => { saveHandle(props.fullname, props.dateOfBirth, props.company, props.phonenum, props.role, props.file, props.profilepic) }}
                                data-bs-toggle="modal" 
                                data-bs-target="#previewCard"
                            >
                            Submit
                            </button>
                        </div>
                        <div className='col'>
                            <button
                                className="btn"
                                type="button"
                                onClick={resetHandler}
                                style={{ background: "#bc2727", border: "none", width: '100px', color: "#ffff", marginTop:"10px"}}
                                // onClick={() => { saveHandle(props.fullname, props.dateOfBirth, props.company, props.phonenum, props.role, props.file, props.profilepic) }}
                            >
                            Reset
                            </button>
                        </div>
                    </div>
                    



                    <div className="modal fade" id="previewCard" tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <ModalCards data={data} />
                        </div>
                    </div>
                    

                    {/* <div className='form-group'>
                        <label htmlFor='photo-upload'>
                            <div className='img-wrap img-upload'>
                                <img for='photo-upload' src={image} alt="upload"/>
                            </div>
                            <input
                                type='file'
                                id='photo-upload'
                                className='form-control'
                                onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                            />
                        </label>
                        
                    </div> */}
                    


                   

                {/* <ModalCards
                    fullname={fullname}
                    dateOfBirth={dateOfBirth}
                    company={company}
                    phonenum={phonenum}
                    role={role}
                    profilepic={profilepic}
                    file={file}
                    listProfile={listProfile}
                    key={listProfile.length}
                    reset={(data) => {toggle(data) }}
                /> */}
                </form>  
                </div>
            
            </div>
            
           
        </div>
        </>
    )

}

export default FormInput;