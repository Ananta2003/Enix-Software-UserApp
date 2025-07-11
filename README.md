# 📱 React Native User Listing App — Assignment for Enix Software

This project is a **React Native mobile application** built using **TypeScript** as part of the technical assignment for **Enix Software**. It demonstrates the ability to fetch remote data, render clean UI components, manage navigation, and implement screen-based state handling.

---
## 🎥 Demo Video

[Watch the demonstration of the app in action:

https://github.com/user-attachments/assets/21e76d7c-1d08-43c9-ad52-155eb015a195

## ✅ Assignment Objective

To create a mobile app that:

- Fetches user data from a remote API.
- Displays a list of users in a clean, scrollable interface.
- Shows detailed information on a separate screen when a user is tapped.

---

## 🛠️ Tech Stack

- **React Native (via Expo)** — for cross-platform mobile development.
- **TypeScript** — for type safety and robust code structure.
- **React Navigation** — to handle stack-based screen navigation.
- **API Integration (Fetch/Axios)** — for remote data fetching.
- **Functional Component Architecture** — for reusability and clarity.

---

## ✨ Features Implemented

- **User List Screen**:
  - Fetches users from an external API on component mount.
  - Renders user names in a clean, scrollable list.
  - Each list item is pressable to navigate to details.

- **User Profile Screen**:
  - Displays full information about the selected user.
  - Receives user data via React Navigation parameters.

- **Navigation**:
  - Implemented using React Navigation with stack flow.
  - Maintains a smooth transition between screens.

---

## 📦 How to Run the Project

### Prerequisites

- Node.js and npm installed
- Expo CLI installed globally:
```bash
npm install -g expo-cli
