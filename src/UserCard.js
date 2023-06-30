import axios from "axios";
import { useEffect, useState } from "react";
import img from "./assets/img/unknown.jpg"

function UserCard({name, email, phone, street}){

    return (
    <div className="user-card">
        <h2>{name}</h2>
        <img src={img}></img>
        <h3>Email: {email}</h3>
        <h3>Phone: {phone}</h3>
    </div>);  

}

export default UserCard