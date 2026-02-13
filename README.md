# E-commerce-Bot

An intelligent e-commerce chatbot powered by LLM guardrails and FastAPI. This project combines modern conversational AI with safety-focused guardrails to create a reliable customer service bot for e-commerce platforms.

**Live Demo:** https://e-commerce-bot-five.vercel.app

## 🎯 Features

- **AI-Powered Chat Interface**: Interactive chatbot built with FastAPI backend
- **LLM Guardrails**: Safety and policy enforcement using NemoGuardrails
- **Order Status Tracking**: Check order status using order IDs
- **React Frontend**: Modern, responsive UI built with React
- **CORS Support**: Seamless integration across different origins
- **Async Processing**: High-performance async/await architecture
- **LangChain Integration**: Advanced language model chaining capabilities

## 🏗️ Project Structure

```
E-commerce-Bot/
├── main.py                 # FastAPI backend application
├── requirements.txt        # Python dependencies
├── .env                    # Environment variables
├── config/                 # NemoGuardrails configuration
└── frontend-react/         # React frontend application
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Node.js (for React frontend)
- pip (Python package manager)

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Malaya-Kumar-Pradhan/E-commerce-Bot.git
   cd E-commerce-Bot
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your API keys and configuration:
   - LLM API keys (NVIDIA AI, etc.)
   - Database credentials
   - Other configuration

5. **Run the backend server**
   ```bash
   python main.py
   ```
   The API will be available at `http://localhost:8000`

### API Endpoints

#### Chat Endpoint
- **URL**: `POST /chat`
- **Request Body**:
  ```json
  {
    "message": "What is my order status?"
  }
  ```
- **Response**:
  ```json
  {
    "response": "Your order status is: Shipped"
  }
  ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## 📚 Core Technologies

### Backend
- **FastAPI** (0.128.0) - Modern, fast web framework
- **Uvicorn** (0.40.0) - ASGI server
- **Pydantic** (2.12.5) - Data validation
- **NemoGuardrails** (0.19.0) - LLM safety guardrails
- **LangChain** (1.2.3) - LLM orchestration
- **LangGraph** (1.0.6) - Workflow automation
- **NVIDIA AI** - LLM API integration

### Frontend
- **React** - UI framework
- **Streamlit** (1.52.2) - Optional dashboard

### Data Processing
- **Pandas** (2.3.3) - Data manipulation
- **NumPy** (2.4.1) - Numerical computing
- **PyArrow** (22.0.0) - Arrow format support

## 🤖 How It Works

### Order Status Checking
The bot includes a built-in `check_order_status` action that:
- Takes an order ID as input
- Returns "Shipped" for order IDs containing "ORD"
- Returns "Returned" for order IDs containing "RET"
- Returns "Invalid ID" for unrecognized formats

### LLM Guardrails
NemoGuardrails configuration in the `./config` directory:
- Defines safety policies for the chatbot
- Prevents inappropriate responses
- Ensures compliance with business rules

### Async Architecture
All requests are processed asynchronously for:
- Better performance under load
- Non-blocking I/O operations
- Improved user experience

## 🔐 Security Features

- CORS middleware configured for cross-origin requests
- Environment variable management with python-dotenv
- Exception handling for robust error management
- Request validation with Pydantic models

## 📦 Key Dependencies

### AI/ML Stack
- NVIDIA AI
- llama3-70b-instruct
- nemoguardrails
- fastembed
- onnxruntime

### Web & API
- fastapi
- uvicorn
- httpx

### Data & Storage
- pandas
- sqlalchemy
- pyarrow

### Utilities
- python-dotenv
- requests
- pydantic
- pydantic-settings

See `requirements.txt` for the complete list of dependencies and versions.

## 🛠️ Configuration

### NemoGuardrails Configuration
Create configuration files in the `./config` directory to define:
- Chat guidelines
- System prompts
- Custom actions
- Output validation rules

### Environment Variables
Key variables to configure in `.env`:
```
NVIDIA_API_KEY=your_api_key_here
DATABASE_URL=your_database_url
ENVIRONMENT=development
```

## 🧪 Testing

To test the API endpoints:

```bash
# Using curl
curl -X POST http://localhost:8000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Check order status for ORD12345"}'

# Using Python requests
import requests
response = requests.post("http://localhost:8000/chat", 
                        json={"message": "Check order status for ORD12345"})
print(response.json())
```

## 📝 API Documentation

Once the server is running, access the interactive API documentation:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🚨 Error Handling

The API includes comprehensive error handling:
- Returns HTTP 500 with error details for server-side exceptions
- Request validation with Pydantic models
- Async exception handling in chat endpoint

## 🔄 CORS Configuration

The API is configured to accept requests from all origins:
```python
CORSMiddleware(
    allow_origins=["*"],
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"]
)
```

**Note**: For production, restrict `allow_origins` to specific domains.

## 📈 Deployment

### Production Considerations

1. **Environment Variables**: Use secure methods to manage API keys
2. **CORS Restriction**: Limit to specific frontend domains
3. **Rate Limiting**: Implement rate limiting for API endpoints
4. **Logging**: Enable comprehensive logging for monitoring
5. **Error Handling**: Customize error responses for production

### Vercel Deployment
The project is configured for deployment on Vercel:
- Visit https://e-commerce-bot-five.vercel.app

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Malaya Kumar Pradhan**
- GitHub: [@Malaya-Kumar-Pradhan](https://github.com/Malaya-Kumar-Pradhan)
- Repository: [E-commerce-Bot](https://github.com/Malaya-Kumar-Pradhan/E-commerce-Bot)

## 📞 Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/Malaya-Kumar-Pradhan/E-commerce-Bot/issues).

## 🎓 Learn More

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [NemoGuardrails Documentation](https://github.com/NVIDIA/NeMo-Guardrails)
- [LangChain Documentation](https://python.langchain.com/)
- [React Documentation](https://reactjs.org/)

---

**Last Updated**: February 2026
