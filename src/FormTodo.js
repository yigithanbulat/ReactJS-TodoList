import React,{ Component,useState } from 'react'
import {Button, Form} from 'react-bootstrap';

function FormTodo({addTodo}) {
    const [value, setValue] = useState('');
    const asd = e => setValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('')
        }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Görev Ekleyiniz</b></Form.Label>
                <Form.Control type='text' className='input' value={value} onChange={asd} placeholder='Görev Giriniz' />
            </Form.Group>
            <Button className='mt-3' type='Submit'>Gönder</Button>
        </Form>
    )
}

export default FormTodo