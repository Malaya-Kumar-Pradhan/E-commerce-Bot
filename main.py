from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from nemoguardrails import RailsConfig, LLMRails

load_dotenv()

def check_order_status(order_id:str):
  if("ORD" in order_id):
        return "Shipped"
  elif("RET" in order_id):
        return "Returned"
  else:
      return "Invalid ID"

config = RailsConfig.from_path("./config")
rails = LLMRails(config)

rails.register_action(action=check_order_status, name="check_order_status")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"]
)

class UserQuery(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(query: UserQuery):
    try:
        response = await rails.generate_async(messages=[{
            "role": "user", 
            "content": query.message
        }])

        return {"response": response["content"]}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)