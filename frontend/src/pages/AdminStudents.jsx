
import { useState } from 'react';
import './AdminStudents.css';

function AdminStudents() {
    const [students, setStudents] = useState([
        {
            studentId: 'STU2026001',
            name: 'Demo Student',
            email: 'student@medconnect.com',
            department: 'Computer Science',
            year: '3rd Year'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [editingStudent, setEditingStudent] = useState(null);

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (student) => {
        setEditingStudent({ ...student });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.studentId === editingStudent.studentId
                    ? editingStudent
                    : student
            )
        );

        setEditingStudent(null);
        alert('Student details updated successfully!');
    };

    const handleDelete = (studentId) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this student?'
        );

        if (confirmDelete) {
            setStudents((prevStudents) =>
                prevStudents.filter(
                    (student) => student.studentId !== studentId
                )
            );
        }
    };

    return (
        <div className="admin-students-page">

            <div className="admin-students-header">
                <div>
                    <h1>Student Management</h1>
                    <p>View and manage registered students.</p>
                </div>
            </div>

            <div className="students-count">
                <h3>Total Students: {students.length}</h3>
            </div>

            <div className="student-search">
                <input
                    type="text"
                    placeholder="Search by name, email or student ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {editingStudent && (
                <form className="edit-student-form" onSubmit={handleUpdate}>
                    <h2>Edit Student Details</h2>

                    <label>Student Name</label>
                    <input
                        type="text"
                        value={editingStudent.name}
                        onChange={(e) =>
                            setEditingStudent({
                                ...editingStudent,
                                name: e.target.value
                            })
                        }
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        value={editingStudent.email}
                        onChange={(e) =>
                            setEditingStudent({
                                ...editingStudent,
                                email: e.target.value
                            })
                        }
                        required
                    />

                    <label>Department</label>
                    <input
                        type="text"
                        value={editingStudent.department}
                        onChange={(e) =>
                            setEditingStudent({
                                ...editingStudent,
                                department: e.target.value
                            })
                        }
                        required
                    />

                    <label>Year</label>
                    <select
                        value={editingStudent.year}
                        onChange={(e) =>
                            setEditingStudent({
                                ...editingStudent,
                                year: e.target.value
                            })
                        }
                    >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                    </select>

                    <div className="edit-student-actions">
                        <button type="submit" className="save-student-btn">
                            Save Changes
                        </button>

                        <button
                            type="button"
                            className="cancel-student-btn"
                            onClick={() => setEditingStudent(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            <div className="admin-students-list">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                        <div
                            className="admin-student-card"
                            key={student.studentId}
                        >
                            <h3>{student.name}</h3>
                            <p>{student.email}</p>
                            <span>{student.studentId}</span>

                            <div className="student-details">
                                <p>Department: {student.department}</p>
                                <p>Year: {student.year}</p>
                            </div>

                            <div className="student-card-actions">
                                <button
                                    className="edit-student-btn"
                                    onClick={() => handleEdit(student)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-student-btn"
                                    onClick={() => handleDelete(student.studentId)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-students">No students found.</p>
                )}
            </div>

        </div>
    );
}

export default AdminStudents;


