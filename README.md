# Workday HR ERP - Employee Lifecycle Management

A modern, responsive, full-stack frontend application for managing the entire employee lifecycle from recruitment to offboarding.

## 🚀 Features

### Core Modules
- **Dashboard** - Comprehensive analytics with charts and KPIs
- **Recruitment** - Job postings and candidate pipeline management
- **Employees** - Employee directory with detailed profiles
- **Attendance** - Check-in/out and leave request management
- **Payroll** - Employee compensation and salary processing
- **Performance** - KPIs, reviews, and performance tracking
- **Offboarding** - Exit process and clearance management
- **Settings** - User preferences and profile management

### Technology Stack
- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **TailwindCSS** for modern styling
- **Framer Motion** for smooth animations
- **Recharts** for data visualization
- **React Router** for navigation
- **Lucide React** for icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Features

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Collapsible sidebar for mobile navigation

### Dark Mode Support
- Persistent theme with localStorage
- System preference detection
- Smooth theme transitions

### User Roles
- Admin
- HR Manager
- Team Manager
- Employee

### Animations & Interactions
- Smooth page transitions
- Hover effects on cards and buttons
- Animated modals and dropdowns
- Loading states and transitions

## 🗂️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── Navbar/
│   │   ├── Sidebar/
│   │   └── ui/
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Recruitment.tsx
│   │   ├── Employees.tsx
│   │   ├── EmployeeDetail.tsx
│   │   ├── Attendance.tsx
│   │   ├── Payroll.tsx
│   │   ├── Performance.tsx
│   │   ├── Offboarding.tsx
│   │   └── Settings.tsx
│   ├── routes/
│   │   └── PrivateRoute.tsx
│   ├── App.tsx
│   └── main.tsx
```

## 🔐 Authentication

The application uses a mock authentication system. You can log in with any credentials and select your role. User sessions are persisted in localStorage.

## 🎯 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open http://localhost:5173 in your browser

## 🛠️ Development

### Adding New Features
- Create new components in `src/components/`
- Add new pages in `src/pages/`
- Define types and interfaces in component files
- Use the mock data structure in `src/data/mockData.ts`

### Styling
- Use TailwindCSS utility classes
- Follow the existing color scheme
- Maintain responsive design patterns
- Use Framer Motion for animations

## 📝 License

This project is created for educational and demonstration purposes.

## 👥 Contributing

Feel free to submit issues and enhancement requests!

