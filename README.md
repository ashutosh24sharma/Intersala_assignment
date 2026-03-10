# 🌿 Sustainable AI Platform

A full-stack web application built as part of the **Intersala Assignment**. The platform leverages AI to provide sustainability insights, category analysis, impact tracking, and proposal generation — all through a clean, modular React + Node.js architecture.

🔗 **Live Demo:** [intersala-assignment.vercel.app](https://intersala-assignment.vercel.app)

---

## 📁 Project Structure

```
AI-Systems-Assignment/
├── frontend/                   # React client application
│   ├── public/
│   └── src/
│       ├── api/                # API call handlers
│       ├── assets/             # Static assets (images, icons, etc.)
│       ├── components/
│       │   ├── CategoryModule/
│       │   │   ├── CategoryForm.jsx
│       │   │   ├── CategoryHistory.jsx
│       │   │   ├── CategoryResult.jsx
│       │   │   └── SustainabilityFilters.jsx
│       │   ├── common/         # Shared/reusable components
│       │   ├── ImpactModule/
│       │   │   └── ImpactPlaceholder.jsx
│       │   ├── Layout/
│       │   │   ├── Footer.jsx
│       │   │   ├── Navbar.jsx
│       │   │   └── Sidebar.jsx
│       │   ├── ProposalModule/
│       │   └── WhatsAppModule/
│       │       └── WhatsAppPlaceholder.jsx
│       ├── pages/
│       │   ├── CategoryPage.jsx
│       │   ├── Dashboard.jsx
│       │   ├── ImpactPage.jsx
│       │   ├── ProposalPage.jsx
│       │   └── WhatsAppPage.jsx
│       ├── App.jsx
│       ├── App.css
│       └── index.css
│
└── backend/                    # Node.js server application
    ├── api/
    ├── businessLogic/
    │   ├── categoryRules.js
    │   └── proposalRules.js
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── prompts/
    ├── routes/
    ├── services/
    ├── utils/
    ├── server.js
    ├── .env
    └── vercel.json
```

---

## ✨ Features

- 📊 **Dashboard** — Overview of sustainability metrics and activity
- 🗂️ **Category Module** — Submit category forms, view history, filter by sustainability criteria, and see AI-generated results
- 🌍 **Impact Module** — Track and visualize environmental impact
- 📝 **Proposal Module** — AI-powered proposal generation based on business logic rules
- 💬 **WhatsApp Module** — WhatsApp integration placeholder for notifications/alerts
- 🧠 **AI Business Logic** — Rule-based AI engine for category and proposal decisions (`categoryRules.js`, `proposalRules.js`)

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React.js, JSX, CSS                |
| Backend    | Node.js, Express.js               |
| AI Logic   | Custom prompt engineering + rules |
| Deployment | Vercel                            |
| Language   | JavaScript                        |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm or yarn

---

### 🖥️ Frontend Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

App runs at: `http://localhost:5173` (Vite default) or `http://localhost:3000`

---

### ⚙️ Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Fill in your environment variables

# Start the server
npm start
```

Server runs at: `http://localhost:5000`

---

### 🔐 Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5000
# Add your API keys and config below
AI_API_KEY=your_ai_api_key
# ... other environment variables
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 🌐 Deployment

This project is deployed on **Vercel** (both frontend and backend via `vercel.json`).

To deploy your own version:

1. Fork this repository
2. Connect it to your [Vercel account](https://vercel.com)
3. Deploy `frontend/` and `backend/` as separate Vercel projects
4. Add environment variables in the Vercel dashboard
5. Deploy!

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Ashutosh Sharma**
- GitHub: [@ashutosh24sharma](https://github.com/ashutosh24sharma)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
