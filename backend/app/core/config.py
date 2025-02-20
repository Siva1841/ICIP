from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Intelligent Platform"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Database
    POSTGRES_SERVER: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    
    # Security
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    
    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()