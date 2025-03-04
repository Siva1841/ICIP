from fastapi import APIRouter

router = APIRouter()

@router.get("")
async def data_status():
    return {"status": "data endpoint working"}