import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { AiOutlineUserAdd} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';


function Addsupplier() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [type,setType] = useState ('');
    const [namesup,setNamesup] = useState ('');
    const [tex,setTex] = useState ('');
    const [address,setAddress] = useState ('');
    const [web,setWeb] = useState ('');
    const [tel,setTel] = useState ('');
    const [more,setMore] = useState ('');
    const [namebus,setNamebus] = useState ('');
    const [email,setEmail] = useState ('');
    const [tel2,setTel2] = useState ('');
    const [bank,setBank] = useState ('');
    const [numberbank,setNumberbank] = useState ('');
    const [namebank,setNamenank] = useState ('');
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
      if (images.length < 1) return;
      const newImageUrls = [];
      images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
      setImageURLs(newImageUrls);
    }, [images]);
  
    function onImageChange(e) {
      setImages([...e.target.files]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ type, namesup,tex,address,web,tel,more,namebus,email,tel2,bank,numberbank,namebank ,images ,imageURLs});
        setType("");
        setNamesup("");
        setTex("");
        setAddress("");
        setWeb("");
        setTel("");
        setMore("");
        setNamebus("");
        setEmail("");
        setTel2("");
        setBank("");
        setNumberbank("");
        setNamenank("");
 
      };

  return (
    <div>      <Button variant="primary"  onClick={handleShow} >
    <AiOutlineUserAdd />
    </Button>
 

  <Modal show={show} onHide={handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title className='text-center'></Modal.Title>
    </Modal.Header>
    <Modal.Body>
  <Form onSubmit={handleSubmit}>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>???????????????????????????????????????</Form.Label>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3"  >
        <Form.Check
        inline
        label="????????????????????????"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        onChange={(e) => setType(e.target.value)}
      />
      <Form.Check
        inline
        label="??????????????????"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
        onChange={(e) => setType(e.target.value)}
      />
    </div>
  ))}
  </Form.Group>
  
  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>?????????????????????????????????</Form.Label>
  <Form.Control type="text" onChange={(e) => setNamesup(e.target.value)} />
</Form.Group>
</Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>??????????????????????????????????????????????????????????????????</Form.Label>
      <Form.Control type="number"   onChange={(e) => setTex(e.target.value)}  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>????????????????????? </Form.Label>
    <Form.Control as="textarea" rows={3}  onChange={(e) => setAddress(e.target.value)}/>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>????????????????????????</Form.Label>
      <Form.Control type="first-name"  onChange={(e) => setWeb(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>?????????????????????????????????</Form.Label>
      <Form.Control type="number"  onChange={(e) => setTel(e.target.value)} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>??????????????????????????????????????????????????????????????????</Form.Label>
    <Form.Control type="first-name"  onChange={(e) => setMore(e.target.value)}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>???????????????????????????????????????</Form.Label>
    <Form.Control type="last-name"  onChange={(e) => setNamebus(e.target.value)} />
  </Form.Group>
</Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>???????????????</Form.Label>
    <Form.Control type="first-name"  onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>???????????????????????????????????????</Form.Label>
    <Form.Control type="number"  onChange={(e) => setTel2(e.target.value)} />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>??????????????????????????????</Form.Label>
    <Form.Control type="first-name"  onChange={(e) => setBank(e.target.value)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>????????????????????????</Form.Label>
    <Form.Control type="number"  onChange={(e) => setNumberbank(e.target.value)} />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>???????????????????????????</Form.Label>
    <Form.Control type="first-name"  onChange={(e) => setNamenank(e.target.value)}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>??????????????????</Form.Label>
    <Form.Control
    type="file"
    required
    name="file"
    onChange={onImageChange}
  />
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

export default Addsupplier