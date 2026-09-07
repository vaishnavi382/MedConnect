# MedConnect

### Doctor Appointment Platform for University Health Centre

MedConnect is a web-based platform designed to make doctor appointments at a university health centre simpler, faster, and more organized.

Instead of waiting in long physical queues or visiting the health centre just to check doctor availability, students can view doctors, check available slots, book an appointment, and receive a digital appointment token.

---

## Why MedConnect?

University health centres often rely on walk-in appointments, which can cause long queues, waiting time, and uncertainty about doctor availability.

MedConnect provides a simple digital solution where students can check doctors, view available slots, book appointments, and receive a digital token.

---

## Key Features

### For Students

* Register and securely log in
* Browse doctors by medical category
* View doctor specialization, room number, and OPD timings
* Check available and booked time slots
* Book a 15-minute consultation slot
* Receive a digital appointment token
* View upcoming and previous appointments
* Cancel eligible upcoming appointments

### For Doctors

* Manage visiting and working hours
* View daily appointment queue
* View booked appointments
* Update appointment status
* Add brief medical remarks

### For Admin

* Manage doctor profiles
* Manage medical categories
* Configure doctor availability
* View appointment information
* Monitor basic queue and appointment activity

---

## How It Works

```text
Student Login
      ↓
Select Medical Category
      ↓
Choose Doctor
      ↓
Select Date
      ↓
View Available Slots
      ↓
Book Appointment
      ↓
Digital Token Generated
```

The system also prevents two students from booking the same doctor, date, and time slot.

---

## Medical Categories

The proposed platform includes:

* General Physician
* Gynecologist
* Dentist
* Orthopedic
* Mental Health Counselor
* Physiotherapist
* Ophthalmologist
* ENT Specialist

---

## Main Modules

| Module                     | Purpose                                                 |
| -------------------------- | ------------------------------------------------------- |
| Student Module             | Doctor search, slot booking, and appointment management |
| Doctor Module              | Queue, availability, and appointment management         |
| Admin Module               | Doctor, category, and appointment management            |
| Doctor & Category Module   | Maintains doctor and specialization details             |
| Slot Management Module     | Generates and manages consultation slots                |
| Appointment & Token Module | Handles booking and digital token generation            |

---

## Technology Stack

### Frontend

* HTML
* CSS
* JavaScript
* React.js
* React Router
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* REST APIs

### Development & Testing

* Visual Studio Code
* Git & GitHub
* Postman
* Browser Developer Tools

The project is planned using the MERN Stack — MongoDB, Express.js, React.js, and Node.js.

---

## Security

The system is planned to include:

* Secure user authentication
* Role-based access for students, doctors, and admins
* Password hashing using bcryptjs
* JWT-based authentication
* Input validation
* Prevention of duplicate appointment bookings

---

## Team

* Vartika Agnihotri
* Vaishnavi Maheshwari
* Sneha Tripathi
* Vandana Pathak
* Rinku

---




