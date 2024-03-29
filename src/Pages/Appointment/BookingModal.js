import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';



const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP');
    console.log(treatment)
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, name);
        const booking = {
            treatmentId: _id,
            treatmentName: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email,
            phone: event.target.phone.value,

        }


        fetch(' http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }

                refetch()
                setTreatment(null)
            })








    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>

                    <form onSubmit={(event) => handleBooking(event)} className='grid grid-cols-1 gap-3 mt-4 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-xs" />
                        <select name='slot' className="select select-secondary w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' value={user?.displayName || ''} disabled className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="email" name='email' value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                        


                </div>
            </div>
        </div>
    );
};

export default BookingModal;