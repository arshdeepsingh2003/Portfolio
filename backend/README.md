# Portfolio Backend Service

FastAPI service component for the portfolio application.

## Constraints & Architectural Rules
- **Database: STRICTLY NONE.** Do not configure SQLite, PostgreSQL, MongoDB, or an ORM (SQLAlchemy, Prisma, etc.).
- **Authentication: NONE.** No user accounts or login systems.
- **Persistent Storage: NONE.** No file-system or database storage for messages.
- **Validation:** Use strict Pydantic schemas for any request payloads.

## Running Locally

1. Create a virtual environment using Python 3.11+:
   ```bash
   py -m venv .venv
   ```

2. Activate virtual environment:
   ```bash
   # Windows PowerShell
   .venv\Scripts\Activate.ps1
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

5. Verify health:
   Navigate to `http://localhost:8000/health` or `http://localhost:8000/docs`.
