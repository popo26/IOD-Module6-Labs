import { useState } from "react";

export default function Emoji() {
  const [emoji, setEmoji] = useState("😺");

  const handleClick = () => {
    let newMood = "🙀";
    if (emoji === "🙀") newMood = "😺";
    else if (emoji === "😺") newMood = "🙀";
    setEmoji(newMood);
  };

  return (
    <div>
      <div className="Emoji">{emoji}</div>
      <button onClick={handleClick} className="change-mood-btn">
        Change Mood
      </button>
    </div>
  );
}
