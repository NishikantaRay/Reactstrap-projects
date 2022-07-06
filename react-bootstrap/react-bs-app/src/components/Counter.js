import React from 'react'
import { useEffect ,useState} from 'react';
import { Container,Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    useEffect(() => {
        console.log('useEffect');
        document.title = `You clicked ${count} times`;
    },[count]);
  return (
    <div>
        <Container className='text-center mt-3'>
            <Card style={{ width: '18rem' }}>
            <Card.Header><h1>Counter{count}</h1></Card.Header>
            <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
            <Card.Footer className="text-muted"> <Button variant="success" onClick={increment} className='m-2'>+</Button>
                <Button variant="danger" onClick={decrement}>-</Button></Card.Footer>
            </Card>
           
        
        </Container>
        
    </div>
  )
}
