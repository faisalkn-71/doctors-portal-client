import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                    key={service._id}
                    service={service}
                    setTreatment = {setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal date={date}
            treatment = {treatment} setTreatment = {setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;