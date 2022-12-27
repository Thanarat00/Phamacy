import React,{ useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import '../App.css'
import { AiFillLock } from "react-icons/ai";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import app from '../config';
function Login() {

  const auth = getAuth(app);
  const [email,setEmail] = useState ("");
  const [password,setPassword] = useState ("");

  const handleSubmit = () => {

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("เข้าสู่ระบบสำเร็จ")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
     alert(errorCode)
  });
  }
  return (
    <Form className='continer' >
      <AiFillLock className='logo' />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="จำรหัสผ่าน" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       เข้าสู่ระบบ
      </Button>
    </Form>
  );
}

export default Login;