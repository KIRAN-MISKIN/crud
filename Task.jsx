import React,{useState, useEffect} from 'react'
// import {Route, BrowserRouter,useHistory} from 'react-router-dom'
import axios from 'axios'
// import Update from './Update'
// import {Modal, FormControl, Input, Button, makeStyles} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
 import FormControl from '@material-ui/core/FormControl';
 import { Input } from '@material-ui/core';
 import { Button,Modal } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
    formControl: {
    margin: theme.spacing(1),
    minWidth: 330,
    minHeight:24
    },
    selectEmpty: {
    marginTop: theme.spacing(6),
    },
    table: {
    minWidth: 650,
    },
   }));

 const Task = (props) => {
    const classes = useStyles()
    let [data, setData] = useState([])
   
    let [show, setShow] = useState(false)


    // const history = useHistory()

    const get = ()=> {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setData(res.data)
        )
    }
    useEffect(() => {
     get()
    }, [])

    // const update = (id) => {
    //     const data1 =    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>console.log(res.data))
    //     // axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, chg).then(res=>{console.log(res.data)})
    //     console.log(data1)
    // }

    const update=(data)=>{
        setShow(true)
        id=data.id
        setID(id)
        name=data.name
        setName(name)
        email=data.email
        setEmail(email)
        phone=data.phone
        setPhone(phone)
       }

       function updated(){
        let result=data.find((e)=>e.id===id) 
        result.name=name
        result.email=email
        result.phone=phone
        setData(data)
        
        setShow(false)
        }

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone NO</th>
                <th scope="col">Actions</th>

                </tr>
                </thead>
                <tbody>
                    {
                        data.map((d)=>{
                            return(
                                <tr>
                                    <th scope="row">{d.id}</th>
                                    <td >{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td><button className="btn btn-danger" onClick={()=>update(d)}>update</button>||
                                    <button className="btn btn-danger" onClick={()=>{
                                        const filetered = data.filter(data=>data.id !== d.id)
                                        console.log(filetered)
                                        setData(filetered)
                                    }}>delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            

            </table>
            <Modal  show={show}>
            <Modal.Header onClick={()=>{setShow(false)}} closeButton>
 <Modal.Title>Users Data</Modal.Title>
 
 </Modal.Header>
            <Modal.Body>
                
 <form>
 <FormControl variant="outlined" className={classes.formControl}>
 {/* <InputLabel id="demo-simple-select-outlined-label">Course</InputLabel> */}
 </FormControl>
 <div style={{display:"flex"}}>
 <div>
 <p>Name:</p>
 <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
 <p>Email:</p>
 <Input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
 <p>Phone:</p>
 <Input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
 </div>
 </div>
 
 </form>
 </Modal.Body>
 
 <Modal.Footer>
 <span>
 <Button variant="success" onClick={updated}>Save Changes </Button>
 </span>
 </Modal.Footer>
</Modal>
        </div>
    )
}

export default Task;
