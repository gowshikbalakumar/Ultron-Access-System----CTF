# Ultron-Access-System----CTF

A vulnerable authentication-based Capture The Flag (CTF) project designed for cybersecurity learners, penetration testers, and developers who want to practice real-world web exploitation techniques in a safe environment.

Built with modern web technologies, this project simulates a login and access management system with intentionally vulnerable endpoints, hidden secrets, authentication flaws, and security misconfigurations for educational purposes. Inspired by modern web exploitation and CTF environments. ([GitHub][1])

---

# 🚀 Features

* User Registration & Login System
* JWT Authentication
* MongoDB Database Integration
* REST API Backend
* Secure Password Hashing
* Hidden CTF Flags
* API Exploitation Challenges
* Beginner Friendly
* Docker Support
* Educational Vulnerabilities
* Realistic Authentication Flow

---

# 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT
* **Package Manager:** npm

---

# 📂 Project Structure

```bash
Ultron-Access-System----CTF/
│
├── client/
│   ├── public/
│   ├── src/
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── config/
│
├── .env
├── package.json
├── README.md
└── docker-compose.yml
```
dW1wQGtpZGRv"
---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/gowshikbalakumar/Ultron-Access-System----CTF.git
```

```bash
cd Ultron-Access-System----CTF

{
key: "eW91QGFyZUBk
    role: "admin",
    backup: "aWFtd2F0Y2hpbmd5b3VAZ21haWwuY29t"
```

---

# 📦 Install Dependencies

## Install Backend Dependencies

```bash
cd server
npm install
```

## Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

# 🔧 Environment Setup

Create a `.env` file inside the `server/` directory.

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ultron
JWT_SECRET=ultron_super_secret_key
NODE_ENV=development
```

---

# ▶️ Running the Application

## Start Backend

```bash
cd server
npm run dev
```

## Start Frontend

```bash
cd client
npm start
```

---

# 🐳 Docker Setup

## Build & Run

```bash
docker-compose up --build
```

---

# 🌐 Application URLs

| Service     | URL                                            |
| ----------- | ---------------------------------------------- |
| Frontend    | [http://localhost:3000](http://localhost:3000) |
| Backend API | [http://localhost:5000](http://localhost:5000) |

---

# 🔐 Demo Credentials

```md
```js
const users = [
  {
    role: "guest",
    id: "9281"
  },

---

# 🧪 API Testing

## Register User

```bash
curl -X POST http://localhost:5000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "username":"admin",
  "email":"admin@test.com",
  "password":"admin123"
}'
```

---

## Login User

```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email":"admin@test.com",
  "password":"admin123"
}'
```

---

# 🎯 CTF Objectives

Participants may explore:

* Authentication Bypass
* JWT Manipulation
* Hidden API Endpoints
* Broken Access Control
* Sensitive Data Exposure
* IDOR Vulnerabilities
* Weak Input Validation
* Misconfigured Middleware
* Information Disclosure

---

# 🧠 Recommended Tools

* Burp Suite
* Postman
* OWASP ZAP
* curl
* Browser DevTools

---

# 📚 Learning Resources

* [OWASP Top 10](https://owasp.org/www-project-top-ten/?utm_source=chatgpt.com)
* [PortSwigger Web Security Academy](https://portswigger.net/web-security?utm_source=chatgpt.com)
* [Awesome CTF Resources](https://github.com/apsdehal/awesome-ctf?utm_source=chatgpt.com)

---

# ⚠️ Disclaimer

This project is created strictly for:

* Educational purposes
* Cybersecurity training
* Ethical hacking practice
* Security research

Do NOT deploy this project on public infrastructure or use it for unauthorized activities.

---

# 🤝 Contributing

Pull requests are welcome.

If you'd like to improve challenges, fix bugs, or add features:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Submit a pull request

---

# 📜 License

MIT License

---

# 👨‍💻 Author

Developed by [Gowshik Balakumar GitHub](https://github.com/gowshikbalakumar?utm_source=chatgpt.com)

---

# ⭐ Support

If you found this project useful:

* Star the repository
* Share it with cybersecurity learners
* Contribute new challenges

---

> “Security is not a product, but a process.” – Bruce Schneier

[1]: https://github.com/topics/web-exploitation?l=python&o=desc&s=updated&utm_source=chatgpt.com "web-exploitation"
