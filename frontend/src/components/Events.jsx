import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import eventServices from '../services/eventServices';
import {Button, Table } from 'react-bootstrap';


const Events = () => {
    
    
    const [events, setEvents] = useState([]);

    const getData = () => {
        eventServices.getEvents().then(res => {
            setEvents([...res.data]);
        })
    }
    useEffect(() => {
        getData();
    }, []);

    console.log(events);
    

    return (
        <div>
            <h1 className='text-center my-3'>Events</h1>
            {events.length > 0 ? (
                <Table striped bordered hover variant="dark" className='m-5'>
                    <thead>
                        <tr>
                            <th>Event name</th>
                            <th>About</th>
                            <th>Event date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                {/* <td>{event._id}</td> */}
                                <td>{event.event}</td>
                                <td>{event.text}</td>
                                <td>{event.date}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>) : (<h3 className='text-center my-3'>You don't have any Events upcoming!</h3>)}
                
        <Button variant="outline-primary"className="mt-5" type="submit"><a href="/form"  >Form</a></Button>{' '}
      <Button variant="outline-primary"className="mt-5" type="submit"><a href="/" >Logout</a></Button>{' '}
      </div>
        

    )
}

export default Events