# Next.js Todo List App

A modern, full-stack todo list application built with Next.js 15, HeroUI, and PostgreSQL.

## ✨ Features

- 🔐 **Authentication**: GitHub OAuth and credentials login
- 📝 **Todo Management**: Create, edit, delete, and organize todos
- 🏷️ **Categories & Priorities**: Organize todos with custom categories and priority levels
- 📅 **Due Dates**: Set and track due dates for todos
- 🔍 **Search & Filter**: Advanced filtering and search capabilities
- 📊 **Statistics**: Track your productivity with detailed stats
- 🌙 **Dark/Light Theme**: Beautiful UI with theme switching
- 📱 **Responsive Design**: Works perfectly on all devices

## 🚀 Technologies Used

- [Next.js 15](https://nextjs.org/docs/getting-started) - React framework with App Router
- [HeroUI v2](https://heroui.com/) - Modern React UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [PostgreSQL](https://postgresql.org/) - Robust database
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-todolist-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL="your-postgresql-connection-string"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

4. **Set up the database**
   ```bash
   # Run the SQL schema
   psql -d your-database -f lib/database/schema.sql
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (page)/           # Route groups
│   ├── api/              # API routes
│   ├── lib/              # App logic
│   ├── todos/            # Todo pages
│   └── login/            # Auth pages
├── components/           # Reusable components
│   ├── ui/               # Base UI components
│   └── todos/            # Todo-specific components
├── lib/                  # Utilities and services
│   ├── api/              # API layer
│   ├── database/         # Database services
│   └── utils.ts          # Helper functions
├── types/                # TypeScript definitions
└── config/               # Configuration files
```

## 🎯 Key Features

### Todo Management
- ✅ Create, edit, and delete todos
- 🏷️ Organize with categories and priorities
- 📅 Set due dates and track deadlines
- 🔍 Advanced search and filtering
- 📊 Productivity statistics

### Authentication
- 🔐 Secure authentication with NextAuth.js
- 🐙 GitHub OAuth integration
- 👤 User session management

### UI/UX
- 🎨 Modern design with HeroUI components
- 🌙 Dark/light theme support
- 📱 Fully responsive design
- ⚡ Fast and smooth animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 License

Licensed under the [MIT License](LICENSE).
