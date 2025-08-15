# AI Interview Trainer (Auto-Scoring, Voice-Enabled)

**Demo:** [ai-interview-trainer-beta.vercel.app](https://ai-interview-trainer-beta.vercel.app/)  


##  Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [How It Works](#how-it-works)  
- [Getting Started](#getting-started)  
- [Project Structure](#project-structure)  
- [Customizing Questions](#customizing-questions)  
- [Technologies Used](#technologies-used)  
- [Future Enhancements](#future-enhancements)  
- [License](#license)

---

## Overview

AI Interview Trainer is a lightweight, **vanilla JavaScript** web app to help placement aspirants prepare for interviews interactively and intelligently. It:

- Presents role-based interview questions.  
- Captures spoken answers via microphone.  
- Auto-evaluates responses based on keyword matching.  
- Provides a detailed review and scoring at the end.

Check the live demo [here](https://ai-interview-trainer-beta.vercel.app/).

---

## Features

- **Multiple Job Roles**: Frontend, Backend, Data Analyst, Full Stack, DevOps, AI/ML — each with 10+ questions.  
- **Voice Answer Capture**: Uses the browser's Web Speech API for speech-to-text.  
- **Auto Scoring**: Grades your answers by matching keywords (≥50% match = correct).  
- **Review Screen**: Shows each question, your answer, matched keywords, and result.  
- **Resilient Loading**: Fetches questions from `questions.json`, with fallback to internal defaults if loading fails.  
- **Randomized Order**: Questions appear in a different order every test.

---

## How It Works

1. Choose a **job role** and click **Start Test**.  
2. Speak your answer when prompted; it converts voice to text live.  
3. Click **Next Question** for each prompt.  
4. At the end, the app grades your responses, shows a detailed review, and displays your final score and feedback.

---

## Getting Started

### Prerequisites

- Modern browser with Web Speech API support (e.g. Chrome, Edge).  
- No backend—this is a static frontend application.

### Setup

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/ai-interview-trainer.git
   cd ai-interview-trainer
