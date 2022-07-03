import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import swal from 'sweetalert';
function Hotallist() {
    let [data1, setData1] = useState([]);
    const [show, setShow] = useState(false);
    let [h_id, setH_id] = useState('');
    let [h_name, setH_name] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [pin, setPin] = useState('');
    let [howner, setHowner] = useState('');
    let [contact, setContact] = useState('');
    let [type, setType] = useState('');
    let [index, setIndex] = useState(-1);
    const handleClose = () => setShow(false);
    const handleShow = (h_id, h_name, address, city, state, pin, howner, contact, type, index) => {
        setShow(true);
        setH_id(h_id);
        setH_name(h_name);
        setAddress(address);
        setCity(city);
        setState(state);
        setPin(pin);
        setHowner(howner)
        setContact(contact)
        setType(type)
        setIndex(index)
    }
    useEffect(() => {
        async function dataFetch() {
            let response = await fetch("http://localhost:4000/hotallist")
            let Udata = await response.json()
            setData1(Udata.response);
        } dataFetch();
    }, []);
    function deleteUser(h_id) {
        // alert(uid)
        fetch(`http://localhost:4000/hdelete/${h_id}`, { method: "DELETE" })
            .then((res) => {
                if (res.status === 200) {
                    // alert("user deleted")
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                }
            })
    }

    function updateData(){
        // let users = [{ h_id, h_name, address, city, state, pin, howner, contact, type }]
        // console.log("users", users)
        // alert("In process...");
        fetch(`http://localhost:4000/hupdate/${h_id}`,
            {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    "h_name": h_name,
                    "address": address,
                    "city": city,
                    "state": state,
                    "pin": pin,
                    "howner": howner,
                    "contact": contact,
                    "type": type
                })
            })
            .then((res) => {
                if (res) {

                    alert("menu data updated")

                    return res.json()
                }
            })
            .then((data) => {
                console.log("after update");
                console.log(index);
                //data1[index].item = item;
                // setData1(data1[index].item = item)
                //console.log(data1[0].item);
                console.log(data)
            })
    }

    function Display() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>h_name</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>pin</th>
                        <th>howner</th>
                        <th>contact</th>
                        <th>type</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data1.map((User, index) => {
                        return (
                            <tr key={index}>
                                <td>{User.h_id}</td>
                                <td>{User.h_name}</td>
                                <td>{User.address}</td>
                                <td>{User.city}</td>
                                <td>{User.state}</td>
                                <td>{User.pin}</td>
                                <td>{User.howner}</td>
                                <td>{User.contact}</td>
                                <td>{User.type}</td>
                                <td><Button variant="success" onClick={() => handleShow(User.h_id, User.h_name, User.address, User.city, User.state, User.pin, User.howner, User.contact, User.type)}>Update</Button></td>
                                <td><Button onClick={() => deleteUser(User.h_id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        )
    }
    return (
        <>
            <Display />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>H_Id</label>
                    <input className="form-control" placeholder="h_id"
                        type="text" value={h_id} onChange={(e) => setH_id(e.target.value)} />
                    <label>H_Name</label>
                    <input className="form-control" placeholder="h_name" type="text" value={h_name} onChange={(e) => setH_name(e.target.value)} />
                    <label>Address</label>
                    <input className="form-control" placeholder="address" type="email" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label>City</label>
                    <input className="form-control" placeholder="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    <label>State</label>
                    <input className="form-control" placeholder="state" type="text" value={state} onChange={(e) => setState(e.target.value)} />
                    <label>Pincode</label>
                    <input className="form-control" placeholder="eg. ********" type="number" value={pin} onChange={(e) => setPin(e.target.value)} />
                    <label>Howner</label>
                    <input className="form-control" placeholder="howner" type="text" value={howner} onChange={(e) => setHowner(e.target.value)} />
                    <label>contact</label>
                    <input className="form-control" placeholder="**********" type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                    <label>type</label>
                    <input className="form-control" placeholder="type" type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button varient="secondery" onClick={handleClose}>Close</Button>
                    <Button varient="primary" onClick={updateData}>save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Hotallist;