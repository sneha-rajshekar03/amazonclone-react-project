# 🛒 Amazon Clone

A full-stack **Amazon clone** built using **React**, **Node.js**, **Express**, and **MongoDB**.  
Features product listings, cart functionality, user login, and more.

---

## 🔧 Tech Stack

- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB (local or Atlas)
- **Authentication**: Simple email-password login

---

## 📁 Project Structure

amazon-clone/
├── backend/
│ ├── models/
│ ├── routes/
│ └── server.js
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
├── public/
├── package.json
└── .gitignore 
---

## ✨ Features

- 🔍 Browse products
- 🛒 Add to cart
- 🔐 User sign in
- 🔄 Persistent login via `localStorage`
- 💬 Toast popup when item added
- 🧾 Checkout placeholder

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone
npm install
Install Backend Dependencies
cd backend
npm install
Start MongoDB (if local)
mongod
node server.js
npm start
