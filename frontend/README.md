# ABC Company Website

This is a full-stack project for Company ABC consisting of:

- A **Spring Boot backend** with a MySQL database for content management (CMS).
- A **React frontend** built as per a Figma design, with pixel-perfect implementation.
- CMS functionality to dynamically update the homepage heading using a database.

---

## 📁 Project Structure
## Backend Setup (Spring Boot)

### Requirements
- Java 17+
- Maven
- MySQL

### 🔧 Configuration
1. Create MySQL DB:
   ```sql
   CREATE DATABASE abc_company;
   ```

2. Update `application.properties`:
   ```
   spring.datasource.url=jdbc:mysql://localhost:3306/abc_company
   spring.datasource.username=YOUR_USERNAME
   spring.datasource.password=YOUR_PASSWORD
   spring.jpa.hibernate.ddl-auto=update
   ```

### Run Backend
```
cd backend/company
./mvn spring-boot:run
```

### API Endpoints
- `GET /api/heading/get` – Fetch heading
- `POST /api/heading/update` – Update heading

---

## 💻 Frontend Setup (React)

### Requirements
- Node.js (v18+ recommended)
- npm

### Install Dependencies
```
cd frontend
npm install
```

### Run Frontend
```
npm start
```

---

## 🌐 Features

- Dynamic homepage heading from CMS
- Figma-perfect UI design
- Fetch-based API calls
- Modular architecture
- Fully responsive layout

---




