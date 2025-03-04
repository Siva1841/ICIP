from fastapi import APIRouter

router = APIRouter()

@router.get("")
async def auth_status():
    return {"status": "auth endpoint working"}