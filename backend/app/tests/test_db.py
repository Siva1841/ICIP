import pytest
from sqlalchemy import text
from app.db.session import engine  # Use relative import

def test_database_connection():
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            assert result.scalar() == 1
    except Exception as e:
        pytest.fail(f"Database connection failed: {str(e)}")