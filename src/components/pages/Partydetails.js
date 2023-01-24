import React, { useState, useEffect } from "react";
import axios from "axios";

const Partydetails = () => {
    const [user, setUsers] = useState({
        id: 0,
        masterConsigneeName: ""
    });
    const { masterConsigneeName } = user;
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const onInputChange = e => {
        debugger
        setUsers({ ...user, [e.target.name]: e.target.value });
    };
    const loadUsers = async () => {
        const result = await axios.get("https://localhost:7200/getallmasterconsignees");
        setUser(result.data.reverse());
    };
    const onSubmit = async e => {
        debugger
        // e.preventDefault();
        await axios.post("https://localhost:7200/updateconsignee", user);
    };
    return (
        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div className="py-4">
                    <div className="py-1">
                        <label>Party/Consignee Name<b>*</b>  </label>
                        <input type="text" name="masterConsigneeName" value={masterConsigneeName}
                            onChange={e => onInputChange(e)} />
                    </div>
                </div>
                <div>
                    <button class="btn btn-success">Save</button>
                    &nbsp;
                    <button className="btn btn-danger"> Cancal</button>
                </div>
            </form>
            <br></br>
            <table class="table table-bordered">
                <thead>
                    <th>Id</th>
                    <th>Consignee Name</th>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user.masterConsigneeName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Partydetails;