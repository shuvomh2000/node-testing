import { useState } from "react";
import {Form,Container,Button} from "react-bootstrap"
import axios from "axios";

function App() {

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [price, setPrice] = useState('')

  let handleSubmit = async (e)=>{
    e.preventDefault()
    let data =await axios.post("http://localhost:8000/")
    console.log(data)
  }


  return (
   <>
   <Container>
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Brand Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Brand Name" onChange={(e)=>setBrand(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Model Code</Form.Label>
        <Form.Control type="text" placeholder="Enter Model" onChange={(e)=>setModel(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>
      <Button className="w-100" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
   </Container>
   </>
  );
}

export default App;
