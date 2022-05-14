import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading'

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json()
    )
    )

    if(isLoading){
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])


    return (
        <div>
            <h1 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal date={date}
                treatment={treatment} setTreatment={setTreatment} refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;