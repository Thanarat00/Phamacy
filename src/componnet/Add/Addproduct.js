import React, {  useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineUserAdd} from "react-icons/ai";



function Addproduct() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [unit,setUnit] = useState ('');
    const [amount,setAmount] = useState ('');
    const [price,setPrice] = useState ('');
    const [sell,setSell] = useState ('');


 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ unit, amount, price , sell});
        setUnit("");
        setAmount("");
        setPrice ("");
        setSell ("");
  
      };

  return (
    <div>      <Button variant="primary"  onClick={handleShow} >
    <AiOutlineUserAdd />
    </Button>
 

  <Modal show={show}   size="xl" onHide={handleClose} >
    <Modal.Header closeButton>
      <Modal.Title className='text-center'></Modal.Title>
    </Modal.Header>
    <Modal.Body>
  <Form onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>หน่วย</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>จำนวน/ปริมาณ</Form.Label>
      <Form.Control type="amount" onChange={(e) => setAmount(e.target.value)} />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>ราคาหน้าฉลาก</Form.Label>
      <Form.Control type="price"   onChange={(e) => setPrice(e.target.value)}  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>ราคาหน่วบ</Form.Label>
      <Form.Control type="text"  onChange={(e) => setSell(e.target.value)} />
    </Form.Group>
  </Row>
  </Form>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="primary" onClick={handleSubmit}>
        Save
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default Addproduct