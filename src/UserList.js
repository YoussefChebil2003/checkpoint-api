import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList(){

    const [listOfUsers, setListOfUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        function fetchData(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response){
                console.log(response);
                setListOfUsers(response.data);
            }).catch(function(error){
                console.log(error);
                setError(error);
            })
        }

        fetchData();
    },[])

    if (listOfUsers!=[] && listOfUsers!==null){
        return (
            <div>
                <ul>
                    {listOfUsers.map(user=>(
                        <li>
                            <UserCard name={user.name} email={user.email} phone={user.phone} street={user.address.street}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }else{
        return (
            <div>
                <h2>SORRY</h2>
            </div>
        )
    }
    

}

export default UserList