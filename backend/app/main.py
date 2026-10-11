"""
Portfolio Backend Service (FastAPI)

Status: Scaffolded / Dormant for approved future server-side features.
Database: STRICTLY NONE. No ORM, persistent storage, or database configuration.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="ARSH.DEV Backend Service",
    description="Backend API for approved server-side functionality (zero database)",
    version="0.1.0",
)

# CORS configuration restricted to frontend dev and preview origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:4173",
        "http://127.0.0.1:4173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/health", tags=["Health"])
async def health_check():
    """Health check endpoint to verify backend service status."""
    return {
        "status": "healthy",
        "service": "portfolio-backend",
        "database": "none",
    }
