import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SendMail() {

  const handleSubmit = (e: any) => {
    // const [username, setUsername] = useState('')
    // const [mail, setMail] = useState('')
    // const [workpackageId, setWorkpackageId] = useState('')
    e.preventDefault()

    const bodyData = {
      "username": e.target[0].value,
      "mail": e.target[1].value,
      "workpackageId": e.target[2].value
    }

    const url = 'http://localhost:3001/send'
    fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(bodyData)
    }).then((res) => {
      console.log(res)
    })

  }

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username : </Form.Label>
          <Form.Control type="text" value='ranjanP096' />
        </Form.Group><br></br>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User mail : </Form.Label>
          <Form.Control type='email' value='ranjan@spakengineering.com' />
        </Form.Group><br></br>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>WorkPackage : </Form.Label>
          <Form.Control type='number' value='21740' />
        </Form.Group><br></br>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
  )
}

export default SendMail
