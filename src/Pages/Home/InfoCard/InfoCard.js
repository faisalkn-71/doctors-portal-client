import React from 'react';

const InfoCard = ({img, cardTitle, bgColor}) => {
    return (
        <div className={`card lg:card-side shadow-xl pt-5 ${bgColor}`}>
            <figure className='pl-6'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                
            </div>
        </div>
    );
};

export default InfoCard;