import React, { useState } from 'react';

const MoviesForm = ({ getFormValue }) => {
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        rating: ''
    });

    const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getFormValue(formData);
        setFormData({
            title: '',
            year: '',
            rating: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Enter title"
                value={formData.title}
                onChange={handleChange}
            />

            <input
                type="number"
                name="year"
                placeholder="Enter year"
                value={formData.year}
                onChange={handleChange}
            />

            <input
                type="number"
                name="rating"
                placeholder="Enter rating"
                value={formData.rating}
                onChange={handleChange}
            />

            <button type="submit">Add Movie</button>
        </form>
    );
};

export default MoviesForm;