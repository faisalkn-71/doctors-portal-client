import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import FucusButton from '../../Shared/FocusButton/FucusButton';
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section 
        style={{
            background: `url(${appointment})`
        }}
        className='flex justify-center items-center mt-28 p-8 pb-0'>
            <div className='flex-1 hidden lg:block'>
                <img height='636px' className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 my-auto'>
                <h1 className='text-xl text-primary font-bold'>Appointment</h1>
                <h1 className='text-4xl text-white font-bold mt-4'>Make an appointment Today</h1>
                <p className='mt-4  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad in ipsa quas aut dolorem illo unde magnam dicta voluptas dolor, impedit eum eos exercitationem beatae est soluta quibusdam nesciunt! Error provident deserunt aspernatur eius! Quia aut ab labore natus!</p>
                <div className='mt-6'>
                    <FucusButton>Get Started</FucusButton>
                </div>
                
            </div>
        </section>
    );
};

export default MakeAppointment;