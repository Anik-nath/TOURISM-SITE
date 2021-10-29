import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {bookingId} = useParams();

    return (
        <div className="mt-5 py-5">
            <h2 className="text-center">booking {bookingId}</h2>
        </div>
    );
};

export default Booking;