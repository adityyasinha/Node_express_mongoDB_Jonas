# Node_express_mongoDB_Jonas
Real-world backend projects built with Node.js ,Express ,and MongoDB based on Jonas Schmedtmann's bootcamp - includes REST API ,authentication, and deployment.

The course focuses on building a production-ready RESTful API using modern backend technologies and best practices in Node.js development.

---

## 📦 Course Repository

- 🔗 Official Starter Files: [jonasschmedtmann/complete-node-bootcamp](https://github.com/jonasschmedtmann/complete-node-bootcamp)
- 📚 Course Link: [Udemy Course](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp)

---

## 💡 What You'll Find Here

- ✅ Complete project code per section
- 📁 Organized folder structure
- ✍️ Code comments and enhancements
- 🔁 Practice exercises
- 🧠 Backend best practices

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB + Mongoose** – Database + ODM
- **JWT Auth** – Authentication and authorization
- **Stripe** – Payments
- **Postman** – API testing
- **MongoDB Atlas** – Cloud DB
- **Render/Heroku** – Deployment

---

## 📁 Folder Structure

```
Node_express_mongoDB_Jonas/
├── 01-node-fundamentals/
├── 02-dev-data/
├── 03-natours-api/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.js
├── 04-authentication/
├── 05-advanced-features/
├── 06-payments/
├── 07-deployment/
├── config.env.example
└── README.md
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/adityyasinha/Node_express_mongoDB_Jonas.git
cd Node_express_mongoDB_Jonas
npm install
cp config.env.example config.env  # Add your env variables
npm run dev
```

- Dev server runs at `http://localhost:3000`
- Uses `nodemon` for auto-reloading

---

## 🔐 Environment Variables

You should create a `.env` file in the root with the following (example):

```
PORT=3000
DATABASE=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
```

---

## 🎯 Key Features You’ll Build

- RESTful API with full CRUD operations
- User auth (JWT) with roles & permissions
- Secure password reset flow
- File uploads and image processing
- Geo-spatial queries with MongoDB
- Stripe payment integration
- API filtering, sorting, pagination
- Deployment to production

---

## 📍 Progress Tracker

| Module | Topic | Status |
|--------|-------|--------|
| 01 | Node.js Basics | ✅ Completed |
| 02 | Express Setup | ✅ Completed |
| 03 | Natours API Project | ⏳ In Progress |
| 04 | Authentication | 🔜 Upcoming |
| 05+ | Advanced Topics | 🔜 Upcoming |

---

## 🙋‍♂️ Author

**Aditya Raj**  
- [LinkedIn](https://www.linkedin.com/in/aditya-raj-18b569312)  
- [GitHub](https://github.com/adityyasinha)  
- 📧 it.adityasinha2701@gmail.com

---

## 📄 License

This project is for educational and personal learning purposes only.  
All course content is © Jonas Schmedtmann.
