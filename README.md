🛠 Manual Testing Practice - React & Node.js App

This project is designed for manual testers to practice finding and debugging frontend and backend issues. The application contains intentional bugs to simulate real-world scenarios.

🚀 Project Overview

This app consists of:

A React frontend (served from food-frontend/).
A Node.js backend (served from food-backend/).
Intentional bugs in both frontend and backend to test debugging skills.
🏗 How to Set Up the Project

1️⃣ Install Dependencies
Run this command in the root directory to install all necessary packages for both frontend and backend:

npm install
Alternatively, you can install dependencies separately for both:

cd food-backend
npm install

cd ../food-frontend
npm install
2️⃣ Start the Application
Use the following command to start both the backend and frontend together:

npm start
If needed, you can start them manually:

Start the backend:
cd food-backend
node server.js
Start the frontend:
cd food-frontend
npm start
The frontend runs on http://localhost:3000
The backend runs on http://localhost:5001

❌ Intentional Bugs (For Testing)

This project contains intentionally added bugs to help testers practice identifying frontend and backend issues.

🔴 Frontend Bugs:
The "Update Food List" button doesn't work
Clicking the button logs a message but doesn't send the request.
🕵️ Check DevTools Console (F12 > Console)
Fix: Implement updateFoodList correctly.
Wrong image for "Sushi"
Instead of the correct image, "Sushi" is displayed with:
http://localhost:5001/images/bad-food.jpg
🕵️ Check Network tab for a 404 error.
Only 15 items are displayed, even if the backend has more
🕵️ Check the API response in DevTools (F12 > Network > XHR > /api/foods).
The API might return 20 items, but the frontend only shows 15.
🔴 Backend Bugs:
POST /api/foods does not update the food list
The backend logs the new food list but doesn't save it.
🕵️ Check the backend terminal logs.
Fix: Uncomment the correct app.post handler in server.js.
Wrong API response format
The API response for /api/foods has incorrect formatting for "Sushi" (name: "Nyers hal és rizs") instead of "Sushi".
🔍 How to Test the Bugs

1️⃣ Test the Frontend Bugs

Open DevTools Console (F12).
Click "Update Food List" → It should not update the list.
Check the Network tab for /api/foods requests.
2️⃣ Test the Backend Bugs

Open the backend terminal (food-backend running logs).
Try adding new foods using Postman:
Send a POST request to:
http://localhost:5001/api/foods
Expected behavior: API should update the food list.
Actual bug: The list does not change.
3️⃣ Fix and Validate

Fix the issues by uncommenting the correct backend code.
Fix the frontend bugs by properly implementing updateFoodList.
🏁 Fixing the Issues

To make the app work correctly:

Uncomment the correct POST /api/foods route in server.js.
Fix updateFoodList in App.js to correctly send requests.
Ensure images load correctly from the backend.
📚 Resources

React Docs: https://reactjs.org/
Node.js Docs: https://nodejs.org/
Express Docs: https://expressjs.com/
Postman: https://www.postman.com/
🚀 Happy Testing & Debugging!
🔍 Find the bugs, fix them, and improve your testing skills! 🛠🔥

