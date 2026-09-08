
# AGENTS.md

## Codebase Context
...

## Code Style Guidelines

### Error Handling Philosophy
- **Let exceptions bubble up** naturally for better error visibility
- Only catch exceptions when you can meaningfully recover from them
- Prefer clear failures over hidden bugs

### Code Style
- Self-descriptive code over excessive comments
- Comments for intent, not implementation

### Anti-Defensive Programming Philosophy
- **Fail Fast**: Let exceptions bubble up naturally for clear debugging information
- **Minimal Try-Catch**: Only use try-catch when absolutely necessary for error recovery
- **No Excessive Null Checks**: Avoid defensive programming for things that should never be null
- **Assumption Validation**: It's fine to assume correctness for things that would fail during initialization and be caught in basic smoke testing

**Why**: Defensive programming hides bugs instead of revealing them. Clear exceptions with full stack traces are more valuable than swallowed errors.

