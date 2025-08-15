// ---------- Built-in fallback if questions.json fails to load ----------
const FALLBACK_QUESTIONS = {
  "frontend": [
    { "q": "Explain event delegation in JavaScript.", "keywords": ["event", "delegation", "bubbling", "listener"] },
    { "q": "Difference between var, let, and const?", "keywords": ["var", "let", "const", "scope"] },
    { "q": "What are promises in JavaScript?", "keywords": ["promise", "async", "resolve", "reject"] },
    { "q": "Explain CSS Flexbox.", "keywords": ["flexbox", "container", "justify", "align"] },
    { "q": "What is the DOM?", "keywords": ["dom", "document", "object", "model"] },
    { "q": "Difference between == and ===?", "keywords": ["double", "triple", "equals", "type"] },
    { "q": "What is responsive design?", "keywords": ["responsive", "design", "media", "query"] },
    { "q": "What is a CSS Grid?", "keywords": ["grid", "row", "column", "layout"] },
    { "q": "Explain arrow functions.", "keywords": ["arrow", "function", "syntax", "this"] },
    { "q": "What is a service worker?", "keywords": ["service", "worker", "offline", "cache"] }
  ],
  "backend": [
    { "q": "What is REST API?", "keywords": ["rest", "http", "stateless", "get", "post"] },
    { "q": "Explain middleware in Node.js.", "keywords": ["middleware", "request", "response", "next"] },
    { "q": "What is JWT?", "keywords": ["jwt", "json", "token", "auth"] },
    { "q": "What is ORM?", "keywords": ["orm", "object", "relational", "mapping"] },
    { "q": "What is MVC architecture?", "keywords": ["mvc", "model", "view", "controller"] },
    { "q": "Explain CORS.", "keywords": ["cors", "origin", "cross", "header"] },
    { "q": "Difference between PUT and PATCH?", "keywords": ["put", "patch", "update", "resource"] },
    { "q": "What is a database transaction?", "keywords": ["transaction", "commit", "rollback", "atomic"] },
    { "q": "Explain microservices.", "keywords": ["microservice", "independent", "deploy", "service"] },
    { "q": "What is API rate limiting?", "keywords": ["api", "rate", "limit", "throttle"] }
  ],
  "data": [
    { "q": "What is data normalization?", "keywords": ["normalization", "database", "redundancy"] },
    { "q": "Difference between supervised and unsupervised learning.", "keywords": ["supervised", "unsupervised", "labels", "clustering"] },
    { "q": "What is a pivot table?", "keywords": ["pivot", "table", "excel", "summarize"] },
    { "q": "Explain ETL process.", "keywords": ["extract", "transform", "load", "etl"] },
    { "q": "What is data cleaning?", "keywords": ["data", "clean", "missing", "error"] },
    { "q": "What is correlation?", "keywords": ["correlation", "relationship", "positive", "negative"] },
    { "q": "Explain regression analysis.", "keywords": ["regression", "predict", "dependent", "independent"] },
    { "q": "What is a histogram?", "keywords": ["histogram", "bar", "frequency", "distribution"] },
    { "q": "What is SQL JOIN?", "keywords": ["join", "inner", "left", "right"] },
    { "q": "Difference between OLAP and OLTP.", "keywords": ["olap", "oltp", "analytics", "transaction"] }
  ],
  "fullstack": [
    { "q": "What is the MERN stack?", "keywords": ["mern", "mongodb", "express", "react", "node"] },
    { "q": "Explain SSR vs CSR.", "keywords": ["ssr", "csr", "server", "client"] },
    { "q": "What is GraphQL?", "keywords": ["graphql", "query", "api", "schema"] },
    { "q": "Explain RESTful services.", "keywords": ["rest", "service", "http", "api"] },
    { "q": "What is state management?", "keywords": ["state", "management", "redux", "context"] },
    { "q": "Explain WebSockets.", "keywords": ["websocket", "real-time", "connection", "socket"] },
    { "q": "What is CI/CD?", "keywords": ["ci", "cd", "continuous", "deployment", "integration"] },
    { "q": "Difference between monolith and microservices.", "keywords": ["monolith", "microservices", "architecture"] },
    { "q": "Explain authentication vs authorization.", "keywords": ["authentication", "authorization", "login", "access"] },
    { "q": "What is Docker?", "keywords": ["docker", "container", "image", "virtualization"] }
  ],
  "devops": [
    { "q": "What is CI/CD pipeline?", "keywords": ["ci", "cd", "continuous", "deployment", "integration"] },
    { "q": "Explain Infrastructure as Code.", "keywords": ["infrastructure", "code", "iac", "terraform"] },
    { "q": "What is container orchestration?", "keywords": ["container", "orchestration", "kubernetes", "docker"] },
    { "q": "What is load balancing?", "keywords": ["load", "balancing", "traffic", "distribution"] },
    { "q": "What is monitoring in DevOps?", "keywords": ["monitoring", "metrics", "alert", "logging"] },
    { "q": "Explain blue-green deployment.", "keywords": ["blue", "green", "deployment", "switch"] },
    { "q": "What is version control?", "keywords": ["version", "control", "git", "repository"] },
    { "q": "Explain serverless computing.", "keywords": ["serverless", "function", "aws", "lambda"] },
    { "q": "What is a reverse proxy?", "keywords": ["reverse", "proxy", "nginx", "load"] },
    { "q": "What is high availability?", "keywords": ["high", "availability", "uptime", "redundancy"] }
  ],
  "aiml": [
    { "q": "What is supervised learning?", "keywords": ["supervised", "labels", "training", "data"] },
    { "q": "What is reinforcement learning?", "keywords": ["reinforcement", "reward", "agent", "environment"] },
    { "q": "Explain neural networks.", "keywords": ["neural", "network", "layer", "weights"] },
    { "q": "What is overfitting?", "keywords": ["overfitting", "model", "train", "data"] },
    { "q": "Explain convolutional neural network.", "keywords": ["cnn", "convolution", "image", "filter"] },
    { "q": "What is natural language processing?", "keywords": ["nlp", "text", "language", "processing"] },
    { "q": "What is a confusion matrix?", "keywords": ["confusion", "matrix", "accuracy", "precision", "recall"] },
    { "q": "Explain gradient descent.", "keywords": ["gradient", "descent", "optimization", "learning"] },
    { "q": "What is transfer learning?", "keywords": ["transfer", "learning", "pretrained", "model"] },
    { "q": "Difference between classification and regression.", "keywords": ["classification", "regression", "predict", "continuous"] }
  ]
};

// ---------- App State ----------
let allQuestions = {};
let currentQuestions = [];
let answers = [];
let currentIndex = 0;
let score = 0;

// ---------- DOM ----------
const roleSelect = document.getElementById("role");
const startTestBtn = document.getElementById("startTest");
const quizSection = document.getElementById("quizSection");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");
const resultSection = document.getElementById("resultSection");
const scoreText = document.getElementById("scoreText");
const feedback = document.getElementById("feedback");
const restartBtn = document.getElementById("restartBtn");
const startVoiceBtn = document.getElementById("startVoice");
const stopVoiceBtn = document.getElementById("stopVoice");
const reviewDiv = document.getElementById("review");

// ---------- Load Questions with cache-busting & fallback ----------
(async function loadQuestions() {
  try {
    const res = await fetch(`questions.json?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    allQuestions = await res.json();
    console.log("Loaded questions.json successfully.");
  } catch (e) {
    console.warn("Could not load questions.json. Using built-in fallback.", e);
    allQuestions = FALLBACK_QUESTIONS;
    // Optional: show a small notice to the user
    const notice = document.createElement("div");
    notice.className = "muted";
    notice.style.fontSize = "12px";
    notice.textContent = "Loaded built-in questions (questions.json not found).";
    document.getElementById("startSection").appendChild(notice);
  }
})();

// ---------- Speech Recognition ----------
let recognition;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    answerEl.value = transcript;
  };
} else {
  alert("Speech Recognition not supported in this browser.");
}

// ---------- Helpers ----------
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showQuestion() {
  if (currentIndex < currentQuestions.length) {
    questionEl.textContent = currentQuestions[currentIndex].q;
    progressEl.textContent = `Progress: ${currentIndex + 1} / ${currentQuestions.length}`;
    answerEl.value = "";
    nextBtn.textContent = (currentIndex === currentQuestions.length - 1) ? "Finish Test" : "Next Question";
  } else {
    gradeTest();
  }
}

function gradeTest() {
  quizSection.style.display = "none";
  resultSection.style.display = "grid";
  reviewDiv.innerHTML = "";
  score = 0;

  currentQuestions.forEach((item, idx) => {
    const ans = (answers[idx] || "").toLowerCase();
    const matchedKeywords = item.keywords.filter(kw => ans.includes(kw));
    const isCorrect = matchedKeywords.length >= Math.ceil(item.keywords.length / 2);
    if (isCorrect) score++;

    reviewDiv.innerHTML += `
      <div class="review-item">
        <strong>Q${idx + 1}: ${item.q}</strong><br/>
        <em>Your Answer:</em> ${answers[idx] || "<span class='muted'>No answer</span>"}<br/>
        <em>Matched Keywords:</em> ${matchedKeywords.join(", ") || "<span class='muted'>None</span>"}<br/>
        <em>Result:</em> ${isCorrect ? "✅ Correct" : "❌ Needs Work"}
      </div>
    `;
  });

  const percentage = ((score / currentQuestions.length) * 100).toFixed(0);
  scoreText.textContent = `Your Score: ${score} / ${currentQuestions.length} (${percentage}%)`;
  feedback.textContent =
    percentage >= 80 ? "Excellent preparation! 🚀" :
    percentage >= 50 ? "Good work! Keep practicing. 👍" :
    "Needs improvement. 💡";
}

// ---------- Events ----------
startTestBtn.addEventListener("click", () => {
  const role = roleSelect.value;
  if (!role) {
    alert("Please select a job role.");
    return;
  }
  // Use loaded questions (or fallback), then randomize order
  currentQuestions = shuffle([...(allQuestions[role] || [])]);
  currentIndex = 0;
  answers = [];
  score = 0;

  document.getElementById("startSection").style.display = "none";
  quizSection.style.display = "grid";
  showQuestion();
});

nextBtn.addEventListener("click", () => {
  answers.push(answerEl.value.trim());
  currentIndex++;
  showQuestion();
});

startVoiceBtn.addEventListener("click", () => { if (recognition) recognition.start(); });
stopVoiceBtn.addEventListener("click", () => { if (recognition) recognition.stop(); });

restartBtn.addEventListener("click", () => {
  resultSection.style.display = "none";
  document.getElementById("startSection").style.display = "grid";
});
