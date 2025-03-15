# React TypeScript DDD Template

A modern React application template using TypeScript, following Domain-Driven Design (DDD) and Feature-Based Architecture principles.

## 🚀 Features

- **Modern Stack**: React 18, TypeScript, Vite
- **Architecture**: Domain-Driven Design (DDD) with Feature-Based Architecture
- **State Management**: Zustand for efficient state management
- **Routing**: React Router for client-side routing
- **HTTP Client**: Axios with interceptors and error handling
- **Testing**: Vitest for unit and integration testing
- **Code Quality**: ESLint and TypeScript strict mode

## 📁 Project Structure

```
src/
│── features/                # Grouped by feature
│   ├── featureA/
│   │   ├── application/     # Application layer (use cases, services)
│   │   ├── domain/         # Domain models, entities, value objects
│   │   ├── infrastructure/ # API calls, persistence, external services
│   │   ├── ui/            # React components specific to this feature
│   │   ├── index.ts       # Public API - only export what's needed
│── shared/                 # Cross-feature utilities and components
│── app/                    # App initialization, providers, routing
│── infrastructure/         # Global services (auth, API clients)
│── config/                # Environment variables, constants
│── tests/                 # Test utilities and integration tests
```

## 🛠 Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Feature Development

1. Create a new feature directory in `src/features/`
2. Follow the layer separation:
   - `domain/`: Business logic and models
   - `application/`: Use cases and state management
   - `infrastructure/`: External services integration
   - `ui/`: React components
3. Export only what's needed through `index.ts`

### State Management

- Use local state for UI-only state
- Use Zustand stores for feature-level state
- Avoid prop drilling (max 2 levels)

### Code Quality

- Run tests: `npm test`
- Check linting: `npm run lint`
- Build for production: `npm run build`

## 🧪 Testing Strategy

- Unit tests for domain logic
- Integration tests for features
- Component tests with React Testing Library
- E2E tests (coming soon)

## 📚 Documentation

- Architecture decisions in `docs/architecture/`
- Component documentation with JSDoc
- API documentation (coming soon)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT
