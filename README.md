CLEANLINK

CleanLink is a full-stack link management and sharing platform designed to organize, store, and manage important links efficiently with a modern and responsive interface

🚀 Features

- Save and organize important links
- Responsive modern UI
- Fast frontend and backend integration
- Full-stack MERN architecture
- Protected backend configuration using environment variables
- Clean project structure for scalability

🛠️ Tech Stack

Frontend

* React
* Vite
* Tailwind CSS

Backend

* Node.js
* Express.js

Database

* MongoDB Atlas

📁 Project Structure

cleanlink/
│
├── client/        # Frontend
├── server/        # Backend
└── README.md

⚙️ Installation
1. Clone the repository
   
git clone https://github.com/indu2809/cleanlink.git

2. Navigate into the project

cd cleanlink

📦 Install Dependencies

Frontend

cd client
npm install

Backend

cd server
npm install

🔑 Environment Variables

Create a `.env` file inside the `server` folder.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

▶️ Run the Application

Start Backend

cd server
npm run dev

Start Frontend

cd client
npm run dev


🌐 API Endpoints

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api               | Test route        |
| POST   | /api/links         | Create a new link |
| GET    | /api/links         | Fetch all links   |
| POST   | /api/auth/login    | User login        |
| POST   | /api/auth/register | User registration |


📌 Future Improvements

* Add dark mode
* Improve performance
* Add deployment support
* Add testing


🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

📄 License
This project is licensed under the MIT License.

👤 Author
Indujha

* GitHub: https://github.com/indu2809
* LinkedIn: https://linkedin.com/in/indujha2809
