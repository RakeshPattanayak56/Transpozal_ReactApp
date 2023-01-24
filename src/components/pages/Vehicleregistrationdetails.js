import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Vehicleregistrationdetails = () => {
    const [user, setUsers] = useState({
        id: 0,
        truckregno: "",
        ownername: "",
        engineno: "",
        chahisno: "",
        regndate: "",
        taxupto: "",
        fcupto: ""
    });

    const { truckregno, ownername, engineno, chahisno, regndate, taxupto, fcupto } = user;
    const [show, setShow] = useState(false)
    const onInputChange = e => {
        debugger
        setUsers({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        debugger
        e.preventDefault();
        await axios.post("https://localhost:7200/updatetruckregndetail", user);
    };
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://localhost:7200/getallmastertruckregndetails");
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        debugger
        // await axios.delete(`https://localhost:7200/deleteemployee?Id= + ${id}`);
        // loadUsers();
    };
    return (
        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div className="py-4">
                    <div className="py-1">
                        <label >Union  Name<b>*</b>  </label>
                        &nbsp;
                        <input type="text" name="unionname" disabled value="ABC" />
                        <label >Truck Regn No<b>*</b> </label>
                        <input type="text" name="truckregno" required value={truckregno}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <br></br>
                    <div className="py-1">
                        <label>Owner Name<b>*</b>  </label>
                        <input type="text" name="ownername" value={ownername}
                            onChange={e => onInputChange(e)} />
                        <label>Engine No<b>*</b>  </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="engineno" required value={engineno}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <br></br>
                    <div className="py-1">
                        <label>Chahis No<b>*</b> </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" name="chahisno" value={chahisno}
                            onChange={e => onInputChange(e)} />
                        <label >Regn Date<b>*</b> </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" name="regndate" required date-format="yyyy-mm-dd" min="0000-01-01" max="9999-12-31" value={regndate}
                            onChange={e => onInputChange(e)} />
                    </div>
                    <br></br>
                    <div className="py-1">
                        <label >Tax Upto <b>*</b> </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" name="taxupto" required min="0000-01-01" max="9999-12-31" value={taxupto}
                            onChange={e => onInputChange(e)} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label >FC Upto<b>*</b>  </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" name="fcupto" required min="0000-01-01" max="9999-12-31" value={fcupto}
                            onChange={e => onInputChange(e)} />
                    </div>
                </div>
                <br></br>
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
                    <th>Truck_Regn_No</th>
                    <th>Owner_Name</th>
                    <th>Engine_No</th>
                    <th>Chahis_No</th>
                    <th>Regn_Date</th>
                    <th>Tax_Upto</th>
                    <th>FC_Upto</th>
                    {!show ?<th>Edit</th>:null}
                    {!show ?<th>Delete</th>:null}
                    {show ?<th>Save</th>:null}
                    {show ?<th>Cancal</th>:null}
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user.masterTruckRegnDetail.vehicleNo}</td>
                            <td>{user.masterVehicleOwner.name}</td>
                            <td>{user.masterTruckRegnDetail.engineNo}</td>
                            <td>{user.masterTruckRegnDetail.chahisNo}</td>
                            <td>{user.masterTruckRegnDetail.regnDate}</td>
                            <td>{user.masterTruckRegnDetail.taxUpto}</td>
                            <td>{user.masterTruckRegnDetail.fcUpto}</td>

                            {!show ?<td><button onClick={() => setShow(true)} class="btn btn-info">Edit</button></td>:null}
                            {!show ?<td><Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link></td>:null}
                            {show ? <td><button onClick={() =>onSubmit(user)&& setShow(false)} class="btn btn-success">Save</button></td>: null}
                            {show ? <td><button onClick={() => setShow(false)} class="btn btn-danger">Cancal</button></td>: null}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Vehicleregistrationdetails;