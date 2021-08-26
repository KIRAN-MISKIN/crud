import React,{useEffect, useState} from 'react'
import axios from 'axios'

export default function Update(props) {

    const [data, setData] = useState([])
    const handle=(e)=>{
        e.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        console.log(name);
        console.log(email);
        console.log(phone)
    }
    return (
        <div>
            <h1>Update Page</h1>
            <h1>{console.log}</h1>
            <form onSubmit={handle}>
            <input type="text" placeholder="enter your name" id="name" />
            <br />
            <input type="text" placeholder="enter your email" id="email" />
            <br />
            <input type="text" placeholder="enter your phone no" id="phone" />
            <br />
            <input type="submit" />
            
            </form>
        </div>
    )
}
