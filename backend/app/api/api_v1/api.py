from fastapi import APIRouter
from app.api.api_v1.endpoints import health, auth, data  # Use 'app.' not 'backend.app.'

api_router = APIRouter()

api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(data.router, prefix="/data", tags=["data"])