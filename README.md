# 🧠 AIBlogForge

AIBlogForge is a full-stack AI-powered blogging platform that allows users to write, publish, and manage their blog posts with intelligent assistance. It integrates OpenAI for content suggestions and real-time editing, with a minimal, modern design built using the MERN stack.

## 🚀 Features

- ✍️ Create, edit, and delete blog posts
- 🧠 AI content generation and suggestions
- 📊 Dashboard to manage blog analytics
- 🔍 Search and category filtering
- 🌓 Light and dark mode support
- 🔒 User authentication and authorization


## 🛠️ Tech Stack

**Frontend:** React.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**AI Integration:** OpenAI API  
**Authentication:** JWT, bcrypt  
**Deployment:**  Vercel

## 📁 Folder Structure

```
/client         → React frontend  
/server         → Express backend  
/public         → Static files (logo, etc.)  
.env            → Environment variables  
README.md       → Project documentation
```

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AIBlogForge.git
cd AIBlogForge
```

### 2. Setup Environment

Create `.env` files for both client and server:

**/server/.env**
```
PORT=3000
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_key
JWT_SECRET=your_jwt_secret
```

### 3. Install Dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 4. Run Locally

```bash
cd server
npm start

cd ../client
npm run dev
```

Open `http://localhost:3000` in your browser.

## 📦 Deployment

- **Frontend:** Vercel or Netlify
- **Backend:** Render or Cyclic
- **MongoDB:** MongoDB Atlas

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
