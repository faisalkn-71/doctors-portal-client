import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <>{slots[0]}</> : <span className='text-red-500'>Try another date</span>}</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions">

                    <label htmlFor="booking-modal" 
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(service)}
                    className="btn btn-primary text-white uppercase">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentService;