# Smart Packing - Full Stack Application

A comprehensive full-stack application with React Native frontend and Express.js backend for smart packing solutions.

## 🚀 Project Overview

Smart Packing is a full-stack application that provides intelligent packing solutions across multiple platforms:

- **Frontend**: React Native with Expo (Android, iOS, Web)
- **Backend**: Express.js with TypeScript API server

## 📁 Project Structure

```
smart-packing/
├── frontend/          # React Native + Expo application
│   ├── app/          # Expo Router pages
│   ├── components/   # Reusable React components
│   ├── constants/    # App constants and themes
│   ├── hooks/        # Custom React hooks
│   ├── assets/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Express.js + TypeScript API
│   ├── src/          # Backend source code
│   ├── package.json  # Backend dependencies
│   └── tsconfig.json # TypeScript configuration
├── .cursor/rules/    # Cursor development rules
└── package.json      # Root workspace configuration
```

## 🛠 Technology Stack

### Frontend
- **React Native** 0.79.5 - Cross-platform mobile development
- **Expo SDK** 53 - Development platform and tools
- **TypeScript** - Type safety and better development experience
- **Expo Router** - File-based navigation system
- **React Navigation** - Tab navigation and routing

### Backend
- **Express.js** 4.18.2 - Web application framework
- **TypeScript** - Type safety and modern JavaScript features
- **Node.js** - JavaScript runtime
- **CORS, Helmet, Morgan** - Security and logging middleware
- **Rate Limiting** - API protection and abuse prevention

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Expo CLI: `npm install -g @expo/cli`
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-packing
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cd backend
   cp env.example .env
   # Edit .env with your configuration
   ```

### Development

#### Start Both Applications
```bash
npm run dev
```

#### Start Frontend Only
```bash
npm run dev:frontend
# or
cd frontend && npm start
```

#### Start Backend Only
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

#### Platform-Specific Development
```bash
# iOS
cd frontend && npm run ios

# Android
cd frontend && npm run android

# Web
cd frontend && npm run web
```

## 📱 Frontend Development

The frontend is a React Native application built with Expo that supports:

- **Android**: Native Android support with adaptive icons
- **iOS**: Native iOS support with SwiftUI integration capability
- **Web**: Web platform support with static output

### Key Features
- File-based routing with Expo Router
- Themed components with dark/light mode support
- Platform-specific optimizations
- TypeScript for type safety
- ESLint for code quality

### Development Commands
```bash
cd frontend
npm start          # Start Expo development server
npm run android    # Start Android development
npm run ios        # Start iOS development
npm run web        # Start web development
npm run lint       # Run ESLint
```

## 🔧 Backend Development

The backend is an Express.js API server with TypeScript that provides:

- RESTful API endpoints
- Security middleware (Helmet, CORS, Rate Limiting)
- Request logging and monitoring
- Error handling and validation
- Environment-based configuration

### Key Features
- TypeScript for type safety
- Express.js with modern middleware
- Security best practices
- API documentation ready
- Scalable architecture

### Development Commands
```bash
cd backend
npm run dev        # Start development server with hot reload
npm run build      # Build TypeScript to JavaScript
npm start          # Start production server
npm run lint       # Run ESLint
npm test           # Run test suite
```

## 🧪 Testing

### Frontend Testing
- Test on all target platforms (iOS, Android, Web)
- Use iOS Simulator for iOS testing
- Use Android Emulator for Android testing
- Test on physical devices for final validation

### Backend Testing
- Unit tests for all functions
- Integration tests for API endpoints
- Proper mocking for external dependencies
- Error scenario testing

## 📦 Building and Deployment

### Frontend
- Use EAS Build for production builds
- Configure build profiles in `frontend/app.json`
- Deploy to app stores (iOS App Store, Google Play Store)
- Web deployment with static output

### Backend
- Build TypeScript to JavaScript
- Deploy to cloud platforms (Heroku, AWS, etc.)
- Use environment variables for configuration
- Set up CI/CD pipelines

## 🔒 Security

### Frontend
- Secure API communication
- Input validation
- Platform-specific security features
- Secure storage for sensitive data

### Backend
- Helmet for security headers
- CORS configuration
- Rate limiting to prevent abuse
- Input validation and sanitization
- Environment variable management

## 📊 Monitoring and Analytics

- Frontend performance monitoring
- Backend API performance tracking
- Error tracking and crash reporting
- User analytics and behavior tracking
- Server health monitoring

## 🤝 Contributing

1. Create a feature branch
2. Follow the coding standards defined in `.cursor/rules/`
3. Write tests for new features
4. Update documentation as needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation in `.cursor/rules/`
- Review the code examples
- Create an issue for bugs or feature requests

---

**Built with ❤️ using React Native, Expo, Express.js, and TypeScript**
