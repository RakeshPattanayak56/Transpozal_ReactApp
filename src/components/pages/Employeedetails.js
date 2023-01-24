import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employeedetails = () => {
    const [user, setUsers] = useState({
        id: 0,
        name: "",
        mobileNo: "",
        eMailId: "",
        address: ""
    });
    const { name, mobileNo, eMailId, address } = user;
    const [show, setShow] = useState(false)
    const onInputChange = e => {
        debugger
        setUsers({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        debugger
        // e.preventDefault();
        await axios.post("https://localhost:7200/updateemployee", user);
    };
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("https://localhost:7200/getallmasteremployee");
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        debugger
        await axios.delete(`https://localhost:7200/deleteemployee?Id= + ${id}`);
        loadUsers();
    };

    return (
        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div className="py-4">
                    <div className="py-1">
                        <label>Employee Name<b>*</b>  </label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="text" name="name" value={name}
                            onChange={e => onInputChange(e)} />
                        &nbsp;
                        <label>Employee Email<b>*</b> </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="eMailId" value={eMailId}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <br></br>
                    <div className="py-1">
                        <label >Employee_Mobile<b>*</b></label>
                        &nbsp;
                        <input type="text" name="mobileNo" value={mobileNo}
                            onChange={e => onInputChange(e)} />
                        &nbsp;
                        <label>Employee_Address<b>*</b></label>
                        &nbsp;
                        <input type="text" name="address" value={address}
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
                    <th>Employee</th>
                    <th>Mobile_No</th>
                    <th>Email_Address</th>
                    <th>Address</th>
                    {!show ? <th>Edit</th> : null}
                    {!show ? <th>Delete</th> : null}
                    {show ? <th>Save</th> : null}
                    {show ? <th>Cancal</th> : null}
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            {!show ? <td>{user.name}</td> : null}
                            {!show ? <td>{user.mobileNo}</td> : null}
                            {!show ? <td>{user.eMailId}</td> : null}
                            {!show ? <td>{user.address}</td> : null}
                            {show ? <td><input /></td> : null}
                            {show ? <td><input /></td> : null}
                            {show ? <td><input /></td> : null}
                            {show ? <td><input /></td> : null}

                            {!show ? <td><button onClick={() => setShow(true)} class="btn btn-info">Edit</button></td> : null}
                            {!show ? <td><Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link></td> : null}
                            {show ? <td><button onClick={() => onSubmit(user) && setShow(false)} class="btn btn-success">Save</button></td> : null}
                            {show ? <td><button onClick={() => setShow(false)} class="btn btn-danger">Cancal</button></td> : null}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Employeedetails;