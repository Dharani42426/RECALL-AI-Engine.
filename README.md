# RECALL: AI-Powered Knowledge Tracing Engine

## 🚀 The Vision
RECALL is not a standard flashcard app. It is an AI-driven learning engine that hacks the human forgetting curve. Instead of relying on manual self-reporting (Standard SRS), RECALL uses AI to perform "Semantic Grading" on user answers, dynamically calculating exactly when a user is about to forget a specific topic.

## 🧠 How It Works (The 3-Step Loop)
1. **Define the Skill:** Users input a macro-skill (e.g., "Full-Stack Development") and nest specific micro-topics underneath it.
2. **AI Assessment:** The Python AI acts as a tutor, generating 3 highly specific questions. Users answer in their own words.
3. **Dynamic Half-Life Graph:** The AI grades the depth of the answer and generates a custom retention curve for that specific topic, alerting the user right before their memory drops to zero.

## 🛠️ Tech Stack
* **Frontend:** React.js + Tailwind CSS (Interactive Dashboards)
* **Backend:** Node.js + Express (API Routing & Logic)
* **Database:** MongoDB (Topic tracking and User Mastery histories)
* **AI Engine:** Python (Semantic Grading and dynamic variable generation)

## 📐 Core Algorithm
RECALL abandons rigid timers in favor of a Dynamic Half-Life Model. 
The AI calculates two variables per assessment:
* **M (Mastery):** Initial comprehension percentage.
* **h (Half-Life):** Predicted days until 50% memory decay.

These variables populate our retention visualizer using the exponential decay formula to draw personalized graphs for every single user.
