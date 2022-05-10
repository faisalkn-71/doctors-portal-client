import React from 'react';

const Review = ({ review }) => {
    return (
        <div >
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='mt-5' >
                        <div className="avatar">
                            <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} />
                            </div>
                            <div >
                                <h1 className='text-xl'>{review.name}</h1>
                                <p>{review.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;