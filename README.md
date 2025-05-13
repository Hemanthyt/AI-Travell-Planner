# 🌍 PlantitAI - AI Travel Planner

PlantitAI is an AI-powered travel planning web application that helps users effortlessly plan trips based on their travel date, budget, preferences (places & people), and more. The app leverages **generative AI via Gemini API**, integrates **Google Maps API** for hotel recommendations, and provides a seamless, interactive experience with **React** and **Firebase**.

---

## 🚀 Features

- ✈️ Smart destination suggestions based on:
  - Travel date
  - Budget
  - User preferences (places & companions)
- 🧠 Generative AI integration using Gemini API
- 🏨 Nearby hotel recommendations with real-time pricing using Google Maps API
- 🔐 User authentication and cloud storage using Firebase
- ⚡ Modern UI with React

---

## 🛠️ Tech Stack

| Category      | Technologies                      |
|---------------|-----------------------------------|
| Frontend      | React, Tailwind CSS               |
| Backend       | Firebase (Auth, Firestore, Hosting) |
| AI            | Gemini API (Generative AI)        |
| Maps & Hotels | Google Maps API                   |

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/plantitAI.git
cd plantitAI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your keys:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

> ⚠️ Make sure to enable the necessary APIs in the Firebase and Google Cloud Console.

### 4. Run the Application

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 📸 Screenshots

<!-- You can add screenshots here once available -->
<!-- ![Screenshot](./screenshots/demo.png) -->

---

## 🤖 How It Works

1. The user enters their travel preferences (date, budget, interests, group).
2. Gemini API generates a list of recommended destinations.
3. Google Maps API fetches nearby hotels and their prices.
4. Firebase handles authentication and stores user selections.

---

## 📚 Future Enhancements

- Travel itinerary generation with estimated travel time
- Integration with flight/train booking APIs
- Collaborative trip planning with friends
- Real-time weather and activity suggestions

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Hemanth Kumar**  
GitHub: [@Hemanthyt](https://github.com/Hemanthyt)  
Email: hemanth25052004@gmail.com

---

