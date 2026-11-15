
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import doctors from '../data/doctors.js';
import './DoctorSelection.css';

function DoctorSelection() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const filteredDoctors = doctors.filter((doctor) =>
        `${doctor.name} ${doctor.specialty}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );
    console.log("Doctors Data:", doctors);

    return (
        <div className="doctor-selection-page">

            <header className="doctor-selection-header">
                <div>
                    <h1>Find Your Doctor</h1>
                    <p>Choose the right specialist for your healthcare needs.</p>
                </div>
            </header>

            <section className="doctor-selection-content">

                <div className="doctor-search-section">
                    <input
                        type="search"
                        placeholder="Search doctor or specialization..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>

                <div className="doctor-selection-heading">
                    <h2>Available Doctors</h2>
                    <p>Choose a doctor to continue with your appointment.</p>
                    <span>{filteredDoctors.length} Doctors Found</span>
                </div>

                <div className="doctor-selection-grid">

                    {filteredDoctors.map((doctor) => (
                        <article className="selection-doctor-card" key={doctor.name}>

                            <div className="selection-doctor-image">
                                <img src={doctor.photo} alt={doctor.name} />
                            </div>

                            <div className="selection-doctor-info">

                                <span className="selection-specialty">
                                    {doctor.specialty}
                                </span>

                                <h3>{doctor.name}</h3>

                                <p>{doctor.experience}</p>

                                <div className="selection-doctor-timing">
                                    <strong>Consultation Hours</strong>
                                    <span>{doctor.days}</span>
                                    <span>{doctor.hours}</span>
                                </div>

                                <button
                                    className="select-doctor-btn"
                                    onClick={() =>
                                        navigate('/book-appointment', {
                                            state: { doctor }
                                        })
                                    }
                                >
                                    Select Doctor →
                                </button>
                            </div>

                        </article>
                    ))}

                    {filteredDoctors.length === 0 && (
                        <p className="no-doctors-found">
                            No doctors found. Try another name or specialization.
                        </p>
                    )}

                </div>

            </section>

        </div>
    );
}

export default DoctorSelection;
