import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <>{slots[0]}</> : <span className='text-red-500'>Try another date</span>}</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions">

                    <label for="booking-modal" 
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(service)}
                    class="btn btn-primary text-white uppercase">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentService;