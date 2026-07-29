# Contributing Guidelines & Coding Standards

We follow enterprise software engineering standards across this codebase:

## Coding Standards

1. **File Line Count Limit**: No file should exceed 300 lines of code. Extract modular helpers or child components.
2. **Layer Isolation**:
   - Routes must never contain business logic.
   - Controllers must delegate to service classes.
   - Database operations must be contained within repository abstractions.
3. **TypeScript Strictness**: Always provide full interfaces and types. Avoid `any` where possible.
4. **Skeuomorphic Styling**: Maintain Apple-inspired skeuomorphism (tactile button depth, subtle specular highlights, recessed panel containers).
5. **Testing**: Add Jest and Supertest specifications for new routes or business services.
