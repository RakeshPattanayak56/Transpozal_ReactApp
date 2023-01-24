import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Vehicleowner = () => {
    const [users, setUser] = useState([]);
    const [user, setUsers] = useState({
        id: 0,
        name: "",
        mobileNo: "",
        eMailId: "",
        address: ""
    });
    const onInputChange = e => {
        debugger
        setUsers({ ...user, [e.target.name]: e.target.value });
    };
    const { name, mobileNo, eMailId, address } = user;
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("https://localhost:7200/getallmastervehicleowners");
        setUser(result.data.reverse());
    };
    const onSubmit = async e => {
        debugger
        // e.preventDefault();
        await axios.post("https://localhost:7200/updatevehicleowner", user);
    };
    const deleteUser = async ownerId => {
        debugger
        await axios.delete(`https://localhost:7200/deletevehicleowner?Id= + ${ownerId}`);
        loadUsers();
    };
    return (
        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div className="py-4">
                    <div className="py-1">
                        <label>Name<b>*</b>  </label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="text" name="name" value={name}
                            onChange={e => onInputChange(e)} />
                        &nbsp;
                        <label>Mobile<b>*</b> </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="mobileNo" value={mobileNo}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="py-1">
                        <label>Email<b>*</b>  </label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="text" name="eMailId" value={eMailId}
                            onChange={e => onInputChange(e)} />
                        &nbsp;
                        <label>Address<b>*</b> </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <textarea id="address" name="address" cols="23" rows="3" value={address}
                            onChange={e => onInputChange(e)}></textarea>
                    </div>
                    <br></br>
                    <div>
                        <button class="btn btn-success">Save</button>
                        &nbsp;
                        <button className="btn btn-danger"> Cancal</button>
                    </div>
                </div>
            </form>

            <table class="table table-bordered">
                <thead>
                    <th>Id</th>
                    <th>OwnerId</th>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user.ownerId}</td>
                            <td>{user.name}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.eMailId}</td>
                            <td>{user.address}</td>
                            
                            <td><button class="btn btn-info">Edit</button></td>
                            <td><Link className="btn btn-danger" onClick={() => deleteUser(user.ownerId)}>Delete</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Vehicleowner;