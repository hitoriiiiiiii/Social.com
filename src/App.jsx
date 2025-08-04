import React from 'react';
import SignUpCard from './pages/signup';
import SignInCard from './pages/signin';
import LandingPage from './pages/landing';
import Apps from './pages/apps'; 
import ChatPage from './pages/Aichat';// ✅ Make sure this has a default export

function App() {
  return (
    <div className="min-h-screen bg-white">
      <LandingPage/>
    </div>
  );
}

export default App;
