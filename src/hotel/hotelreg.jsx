import React, { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";
function Hotalreg() {
    let [h_id, setH_id] = useState('');
    let [h_name, setH_name] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [pin, setPin] = useState('');
    let [howner, setHowner] = useState('');
    let [contact, setContact] = useState('');
    let [type, setType] = useState('');
    function submitData() {
        // alert("you are clicked")
        let userdata = {
            h_id : h_id,
            h_name : h_name,
            address : address,
            city : city,
            state : state,
            pin : pin,
            howner: howner,
            contact: contact,
            type: type
        };
        let reqData = {
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userdata)
        }
        fetch('http://localhost:4000/hotalregistration', reqData)
            .then(response => console.log(`Data Submitted ${response.status}`))
    }
    return (
        <>
            <Container flud="md">
                <div><h1>Hotel Ragistration from</h1></div>
                <Row>
                    <Col>
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
                    </Col>
                </Row><br />
                <Row>
                    <Col>
                        <button onClick={submitData} className="btn btn-primary">Save</button>
                        <button className="btn btn-warning">Cancel</button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Hotalreg;