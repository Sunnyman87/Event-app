import React from 'react'
import { useState } from 'react'
import eventServices from '../services/eventServices';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SetEvent = (getData) => {
    const [event, setEvent] = useState('')
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    // const [date,setDate] = useState('');
    const history = useNavigate('');

    const onSubmit = e => {
        e.preventDefault();

        history ('/events')
        const setEvent = {
            event: event,
            text: text,
            date: date,
            user: '6306c8444be42f7c02654fa1'
        }
        eventServices.postEvent(setEvent)

        setEvent('');
        setText('');
        setDate('');
        getData()
    }
    return (
        <div className='container'>
          <Button variant="outline-primary" className="mb-5" type="submit"><a href="/events" >Events</a></Button>
          <h1>Set Event</h1>
            <Form className='w-80 m-5' onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEvent">
        <Form.Label>Event name</Form.Label>
          <Form.Control className='bg-light' type="text" placeholder="Event name"
            name='text'
            value={event}
            onChange={(e) => setEvent(e.target.value)} />
            </Form.Group>
          

        <Form.Group className="mb-3 " controlId="formBasicText">
          <Form.Label>About event</Form.Label>
          <Form.Control className='bg-light' as="textarea" rows={3} type="textarea" placeholder="Description" name='text'
            value={text}
            onChange={(e) => setText(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label >Event date</Form.Label>
          <Form.Control className='bg-light' type="date" placeholder="Event date" name='number'
            value={date}
            onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Button variant="dark" className="mb-5"  type="submit">
          Save
        </Button>
        
      </Form>
      
      <Button variant="outline-primary" className="mt-5" type="submit"><a href="/" >Logout</a></Button>
      
        </div>
    )
}

export default SetEvent