import {Table,Button} from "react-bootstrap";
import { useState,useEffect } from "react";
import {Modal} from "react-bootstrap";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import swal from 'sweetalert';
function Viewitem(){
    const [data1, setData1] = useState([]);
    const[show,setShow] = useState(false);
    const handleClose =() => setShow(false);
    let[m_id, setM_id] = useState('')
    let[item, setItem] = useState('')
    let[price, setPrice] = useState('')
    let[tag,setTag] = useState('')
    let[avl_option, setAvl_option] = useState('')
    let[h_id, setH_id] = useState('');
    let [index, setIndex] = useState(-1);

    const handleShow = (m_id, item, price, tag, avl_option, h_id, index) => {
        //console.log(index)
        setShow(true);
        setM_id(m_id);
        setItem(item);
        setPrice(price);
        setTag(tag);
        setAvl_option(avl_option);
        setH_id(h_id);
        setIndex(index);
    }
    useEffect(() => {
     async function dataFetch(){
            let response = await fetch("http://localhost:4000/menulist")
            let Udata = await response.json()
            setData1(Udata.response);
            //console.log(Udata.response)
     }dataFetch();
 },[])

 function deleteUser(m_id){
    // alert(uid)
    fetch(`http://localhost:4000/mdelete/${m_id}`,{method:"DELETE"})
     .then((res) =>{
        if(res.status === 200)
        {
        //   alert("user deleted")
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
    //let users = [{m_id,item,price,tag,avl_option,h_id}]
     //console.log("users", users)
       fetch(`http://localhost:4000/mupdate/${m_id}`,
       {method:"PUT",
       headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'},
        body:JSON.stringify({
            "item": item,
            "price": price,
            "tag": tag,
            "avl_option": avl_option
        })
    })
   .then((res)=>{
    if(res){       
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
// function Display(){
//     return(
//         <Table striped bordered hover size="sm">
//             <thead>
//             <tr>
//               <th>m_id</th>
//               <th>item</th>
//               <th>price</th>
//               <th>tag</th>
//               <th>avl_option</th>
//               <th>h_id</th>
//               <th>Update</th>
//               <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//                 {data1.map((user,index) => {
//                     return(
//                         <tr key={index}>
//                         <td>{user.m_id}</td>
//                         <td>{user.item}</td>
//                         <td>{user.price}</td>
//                         <td>{user.tag}</td>
//                         <td>{user.avl_option}</td>
//                         <td>{user.h_id}</td>
//                         <td><Button variant="primary" onClick={()=>handleShow(user.m_id,user.item,user.price,user.tag,user.avl_option,user.h_id)}>Update</Button></td>
//                         <td><Button onClick={()=>deleteUser(user.m_id)} variant="danger">Delete</Button></td>
//                      </tr>
//                     )
//                 }
//             )} 
//             </tbody>
//         </Table>
//     )
// }
return (
    <>
      <Table striped bordered hover size="sm">
            <thead>
            <tr>
              <th>m_id</th>
              <th>item</th>
              <th>price</th>
              <th>tag</th>
              <th>avl_option</th>
              <th>h_id</th>
              <th>Update</th>
              <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {data1.map((user,index) => {
                    return(
                        <tr key={index}>
                        <td>{user.m_id}</td>
                        <td>{user.item}</td>
                        <td>{user.price}</td>
                        <td>{user.tag}</td>
                        <td>{user.avl_option}</td>
                        <td>{user.h_id}</td>
                        <td><Button variant="primary" onClick={()=>handleShow(user.m_id,user.item,user.price,user.tag,user.avl_option,user.h_id, index)}>Update</Button></td>
                        <td><Button onClick={()=>deleteUser(user.m_id)} variant="danger">Delete</Button></td>
                     </tr>
                    )
                }
            )} 
            </tbody>
        </Table>
      {/*  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Menu ID</label>
            <input className="form-control" placeholder="eg. menu id" type="number" value={m_id} onChange={(e) => setM_id(e.target.value)} />
            <label>Item</label>
            <input className="form-control" placeholder="eg. menu item" type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <label>Price</label>
            <input className="form-control" placeholder="eg. $$$$$$$$" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label>Tag</label>
            <input className="form-control" placeholder="eg. red and green" type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
            <label>Availble</label>
            <input className="form-control" placeholder="eg. availble option" type="text" value={avl_option} onChange={(e) => setAvl_option(e.target.value)} />
            <label>Hotal ID</label>
            <input className="form-control" placeholder="eg. hotal id" type="number" value={h_id} onChange={(e) => setH_id(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
            <Button varient="secondery" onClick={handleClose}>Close</Button>
            <Button varient="primary" onClick={updateData}>Save changes</Button>
        </Modal.Footer>
        </Modal>
    </>
);
}
export default Viewitem;