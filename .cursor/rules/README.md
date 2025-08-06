# Cursor Rules for Smart Packing Full-Stack Application

This directory contains Cursor Rules that help guide development for the Smart Packing full-stack application. These rules provide context, best practices, and guidelines for maintaining code quality and consistency across both frontend and backend.

## Project Overview

Smart Packing is a full-stack application with:
- **Frontend**: React Native with Expo (Android, iOS, Web)
- **Backend**: Express.js with TypeScript API server

## Rules Overview

### 1. [project-structure.mdc](project-structure.mdc)
**Always Applied** - Provides an overview of the full-stack project structure, key files, and architecture. Essential for understanding the monorepo organization.

### 2. [react-native-coding-standards.mdc](react-native-coding-standards.mdc)
**Applied to TypeScript/JavaScript files** - Defines coding standards, component structure, TypeScript guidelines, and React Native best practices for the frontend.

### 3. [ios-swiftui-integration.mdc](ios-swiftui-integration.mdc)
**Applied to iOS-specific files** - Guidelines for integrating SwiftUI with React Native, native module development, and iOS-specific features.

### 4. [expo-development.mdc](expo-development.mdc)
**Applied to Expo configuration files** - Expo-specific development guidelines, configuration management, and platform-specific features.

### 5. [component-architecture.mdc](component-architecture.mdc)
**Applied to component files** - Component organization, design patterns, theming, and architecture guidelines for the frontend.

### 6. [backend-development.mdc](backend-development.mdc)
**Applied to backend files** - Express.js development guidelines, API design patterns, security best practices, and backend architecture.

### 7. [development-workflow.mdc](development-workflow.mdc)
**Always Applied** - Full-stack development workflow, task management, testing strategies, and deployment processes for both frontend and backend.

## Usage

These rules are automatically applied by Cursor based on:
- **alwaysApply**: Rules that apply to every request
- **globs**: File pattern matching for specific file types
- **description**: Manual application based on description matching

## Key Features

- **Full-Stack Development**: Guidelines for both frontend and backend
- **Multi-platform Support**: Android, iOS, and Web development guidelines
- **SwiftUI Integration**: Specific rules for iOS native development
- **Expo Ecosystem**: Comprehensive Expo development guidelines
- **Express.js Backend**: Modern API development with TypeScript
- **TypeScript Focus**: Strong typing and code quality standards
- **Monorepo Management**: Workspace and dependency management
- **Performance Optimization**: Best practices for both frontend and backend

## Project Structure

```
smart-packing/
├── frontend/          # React Native + Expo application
├── backend/           # Express.js + TypeScript API
├── .cursor/rules/     # Cursor rules for development
└── package.json       # Root workspace configuration
```

## Technology Stack

### Frontend
- React Native 0.79.5
- Expo SDK 53
- TypeScript for type safety
- Expo Router for navigation
- React Navigation for tab navigation

### Backend
- Express.js 4.18.2
- TypeScript for type safety
- Node.js runtime
- CORS, Helmet, Morgan for security and logging
- Rate limiting and compression middleware

## Development Commands

- `npm run dev` - Start both frontend and backend
- `npm run dev:frontend` - Start frontend only
- `npm run dev:backend` - Start backend only
- `npm run build` - Build both applications
- `npm run lint` - Lint both applications
- `npm run test` - Test both applications

## Maintenance

- Update rules when project structure changes
- Add new rules for emerging patterns
- Review and refine rules based on team feedback
- Keep rules aligned with current best practices
- Maintain consistency between frontend and backend guidelines 