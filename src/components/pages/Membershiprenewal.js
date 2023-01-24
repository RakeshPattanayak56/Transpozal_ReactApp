import React, { useState, useEffect } from "react";
import axios from "axios";

const Membershiprenewal = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get("https://localhost:7200/getallmasteremployee");
        setUser(result.data.reverse());
    };
    return (
        <div className="container">
            <div className="py-4">
                <div className="py-1">
                    <label >Union  Name <b>*</b> </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="txtUnion" readonly value="ABC" name="unionname" />
                    &nbsp;&nbsp;
                    <label >Truck Regn No<b>*</b>  </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="truckregnNo" required name="truckregnNo" />
                </div>
                <br></br>
                <div className="py-1">
                    <label >Membership No <b>*</b> </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="txtUnion" name="unionname" />
                    &nbsp;&nbsp;
                    <label >Membership Date<b>*</b>  </label>
                    &nbsp;&nbsp;
                    <input type="date" id="membershipDate" required name="membershipDate" min="0000-01-01" max="9999-12-31" />
                </div>
                <br></br>
                <div className="py-1">
                    <label >Membership Upto <b>*</b> </label>
                    &nbsp;&nbsp;
                    <input type="date" id="txtMembershipupto" required name="membershipupto" min="0000-01-01" max="9999-12-31" />
                </div>
            </div>
            <div>
                <button class="btn btn-success">Save</button>
                &nbsp;
                <button className="btn btn-danger"> Cancal</button>
            </div>
            <br></br>
            <table class="table table-bordered">
                <thead>
                    <th>Id</th>
                    <th>Union Name</th>
                    <th>Truck Regn No</th>
                    <th>Membership No</th>
                    <th>Membership Date</th>
                    <th>Membership Upto</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.eMailId}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Membershiprenewal;