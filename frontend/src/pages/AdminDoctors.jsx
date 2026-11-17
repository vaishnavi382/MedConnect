
import { useState } from 'react';
import doctorsData from '../data/doctors';
import './AdminDoctors.css';

function AdminDoctors() {
    const [doctors, setDoctors] = useState(doctorsData);
    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const [newDoctor, setNewDoctor] = useState({
        name: '',
        specialty: '',
        experience: '',
        days: 'Monday - Friday',
        hours: '09:00 AM - 01:00 PM',
        initials: '',
        photo: ''
    });

    const handleChange = (e) => {
        setNewDoctor({
            ...newDoctor,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setNewDoctor({
            name: '',
            specialty: '',
            experience: '',
            days: 'Monday - Friday',
            hours: '09:00 AM - 01:00 PM',
            initials: '',
            photo: ''
        });

        setEditingIndex(null);
        setShowForm(false);
    };

    const handleAddDoctor = (e) => {
        e.preventDefault();

        const doctorToSave = {
            ...newDoctor,
            initials: newDoctor.name
                .replace('Dr. ', '')
                .split(' ')
                .map((word) => word[0])
                .join('')
                .toUpperCase()
        };

        if (editingIndex !== null) {
            const updatedDoctors = [...doctors];
            updatedDoctors[editingIndex] = doctorToSave;
            setDoctors(updatedDoctors);
        } else {
            setDoctors([...doctors, doctorToSave]);
        }

        resetForm();
    };

    const handleEditDoctor = (index) => {
        setNewDoctor({ ...doctors[index] });
        setEditingIndex(index);
        setShowForm(true);
    };
    const handleDeleteDoctor = (index) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this doctor?'
        );

        if (confirmDelete) {
            const updatedDoctors = doctors.filter(
                (_, i) => i !== index
            );

            setDoctors(updatedDoctors);
        }
    };
    return (
        <div className="admin-doctors-page">

            <div className="admin-doctors-header">
                <div>
                    <h1>Doctor Management</h1>
                    <p>View and manage all registered doctors.</p>
                </div>

                <button
                    className="add-doctor-btn"
                    onClick={() => {
                        if (showForm) {
                            resetForm();
                        } else {
                            setEditingIndex(null);
                            setNewDoctor({
                                name: '',
                                specialty: '',
                                experience: '',
                                days: 'Monday - Friday',
                                hours: '09:00 AM - 01:00 PM',
                                initials: '',
                                photo: ''
                            });
                            setShowForm(true);
                        }
                    }}
                >
                    {showForm ? 'Close Form' : '+ Add New Doctor'}
                </button>
            </div>

            {showForm && (
                <form className="add-doctor-form" onSubmit={handleAddDoctor}>
                    <h2>
                        {editingIndex !== null ? 'Edit Doctor' : 'Add New Doctor'}
                    </h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Doctor Name"
                        value={newDoctor.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="specialty"
                        placeholder="Specialization"
                        value={newDoctor.specialty}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="experience"
                        placeholder="Experience"
                        value={newDoctor.experience}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="days"
                        placeholder="Available Days"
                        value={newDoctor.days}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="hours"
                        placeholder="Consultation Hours"
                        value={newDoctor.hours}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="save-doctor-btn">
                        {editingIndex !== null ? 'Update Doctor' : 'Save Doctor'}
                    </button>
                </form>
            )}

            <div className="doctors-count">
                <h3>Total Doctors: {doctors.length}</h3>
            </div>

            <div className="admin-doctors-list">
                {doctors.map((doctor, index) => (
                    <div className="admin-doctor-card" key={index}>

                        <div className="admin-doctor-info">
                            <h3>{doctor.name}</h3>
                            <p>{doctor.specialty}</p>
                            <span>{doctor.experience}</span>
                        </div>

                        <div className="admin-doctor-actions">
                            <button
                                className="edit-doctor-btn"
                                onClick={() => handleEditDoctor(index)}
                            >
                                Edit
                            </button>

                            <button
                                className="delete-doctor-btn"
                                onClick={() => handleDeleteDoctor(index)}
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default AdminDoctors;


