import { useState } from "react";
import {Row,Col} from "react-bootstrap";
import {Container} from "react-bootstrap";
function Additem(){
    let[m_id, setM_id] = useState('')
    let[item, setItem] = useState('')
    let[price, setPrice] = useState('')
    let[tag,setTag] = useState('')
    let[avl_option, setAvl_option] = useState('')
    let[h_id, setH_id] = useState('')
    function submitData(){
    let userdata = {
        m_id: m_id,
        item: item,
        price: price,
        tag: tag,
        avl_option: avl_option,
        h_id: h_id
    }
    let reqData = {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userdata)
    }
    fetch('http://localhost:4000/menuitem', reqData)
    .then(response => console.log(`Data Submitted ${response.status}`))
}
    return(
        <>
        <Container flud="md">
            <Row>
                <Col>
                    <label>Menu ID</label>
                    <input className="form-control" placeholder="egg. menuid"
                        type="text" value={m_id} onChange={(e) => setM_id(e.target.value)} />
                    <label>Item</label>
                    <input className="form-control" placeholder="egg. item" type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                    <label>Price</label>
                    <input className="form-control" placeholder="egg. price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <label>Tag</label>
                    <input className="form-control" placeholder="address" type="egg. tag" value={tag} onChange={(e) => setTag(e.target.value)} />
                    <label>Available option</label>
                    <input className="form-control" placeholder="egg. available" type="text" value={avl_option} onChange={(e) => setAvl_option(e.target.value)} />
                    <label>Hotal ID</label>
                    <input className="form-control" placeholder="egg. hotalid" type="number" value={h_id} onChange={(e) => setH_id(e.target.value)} />
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
export default Additem;