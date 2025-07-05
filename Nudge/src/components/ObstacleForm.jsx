import { useState } from 'react';

function ObstacleForm({ onSubmit }) {
  const [obstacle, setObstacle] = useState('');
  const [obstacleList, setObstacleList] = useState([]);

  const handleAddObstacle = () => {
    const trimmed = obstacle.trim();
    if (trimmed) {
      setObstacleList([...obstacleList, trimmed]);
      setObstacle('');
    }
  };

  const handleSubmit = () => {
    if (obstacleList.length > 0) {
      const combined = obstacleList.map((item) => `• ${item}`).join('\n');
      onSubmit(combined);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (obstacle.trim()) {
        handleAddObstacle();
      } else if (obstacleList.length > 0) {
        handleSubmit();
      }
    }
  };

  const removeObstacle = (indexToRemove) => {
    setObstacleList(obstacleList.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <section className="bg-transparent px-6 py-10 rounded-xl max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-white mb-4">
        What's stopping you from achieving it?
      </h2>

      <textarea
        className="w-full p-4 text-white placeholder-grey border border-white/40 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        rows={2}
        placeholder="Type one obstacle at a time. Press Enter to add."
        value={obstacle}
        onChange={(e) => setObstacle(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="flex gap-4 mt-4">
        <button
          onClick={handleAddObstacle}
          className="bg-white text-gray-600 font-medium px-6 py-2 rounded-md transition"
        >
          Add Obstacle
        </button>

        <button
          onClick={handleSubmit}
          disabled={obstacleList.length === 0}
          className="bg-green-400 text-white font-medium px-6 py-2 rounded-md transition disabled:opacity-50"
        >
          Continue
        </button>
      </div>

      {obstacleList.length > 0 && (
        <ul className="mt-6 text-white space-y-2">
          {obstacleList.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="mr-2">• {item}</span>
              <button
                onClick={() => removeObstacle(index)}
                className="text-red-300 hover:text-red-500 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ObstacleForm;
