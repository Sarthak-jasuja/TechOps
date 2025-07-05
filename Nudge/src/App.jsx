import { useState } from 'react';
import GoalForm from './components/GoalForm';
import ObstacleForm from './components/ObstacleForm';
import Confirmation from './components/Confirmation';
import Navbar from './components/Navbar';
import Features from './components/Features';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { Routes, Route } from 'react-router-dom';
import Suggestions from './components/Suggestions';
import Signup      from './components/signup';
import Thankyou from './components/Thankyou';
import transformation from './components/transformation';
import './index.css';

function MainFlow() {
  const [goal, setGoal] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [stage, setStage] = useState('goal');

  const handleGoalSubmit = (goalInput) => {
    setGoal(goalInput);
    setStage('obstacle');
  };

  const handleObstacleSubmit = (obstacleInput) => {
    setObstacle(obstacleInput);
    setStage('confirmation');
  };

  const handleConfirm = () => {
    setStage('suggestions');
  };

  return (
    <div className="pt-24 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-transparent border border-white rounded-xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
        {stage === 'goal' && <GoalForm onSubmit={handleGoalSubmit} />}
        {stage === 'obstacle' && <ObstacleForm onSubmit={handleObstacleSubmit} />}
        {stage === 'confirmation' && <Confirmation onConfirm={handleConfirm} />}
        {stage === 'suggestions' && <Suggestions goal={goal} obstacle={obstacle} />}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainFlow />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/"          element={<Suggestions goal="become an engineer" obstacle="laziness" />} />
        <Route path="/signup"    element={<Signup />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/transformation" element={<transformation/>} />
      </Routes>
    </div>
  );
}

export default App;
