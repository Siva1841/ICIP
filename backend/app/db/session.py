from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..core.config import settings

# Correct format for Neon.tech connection string
SQLALCHEMY_DATABASE_URL = f"postgresql://Intelligent_platform_owner:npg_ZcCp73MQAFVt@ep-soft-wind-a5m0cc7b-pooler.us-east-2.aws.neon.tech/Intelligent_platform?sslmode=require"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True,
    pool_size=5,
    max_overflow=10
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)