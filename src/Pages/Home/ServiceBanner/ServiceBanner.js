import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import FucusButton from '../../Shared/FocusButton/FucusButton';

const ServiceBanner = () => {
    return (
        <div className="hero min-h-screen mt-24">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-8'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <FucusButton>Get Started</FucusButton>
    </div>
  </div>
</div>
    );
};

export default ServiceBanner;