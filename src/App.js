import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const text = "Welcome to emoji interpreter";

  const [meaning, giveAnswer] = useState("translation will appear here..");

  const emojiDictionary = {
    "😀": "Smiling Face",
    "😔": "Sad face",
    "😂": "Laughing",
    "❤️": "Love",
    "💔": "Heartbreak"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);


  function emojiHandler(event) {
    //processing
    const emoji = event.target.value;
    var meaning = emojiDictionary[emoji];

    if (meaning === undefined) {
      meaning = "can't find in database";
    }

    giveAnswer(meaning); //react call to show output
  }

  function emojiValue(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    giveAnswer(meaning); //react call to show output
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <input placeholder="search your emoji" onChange={emojiHandler}></input>

      <h2>{meaning}</h2>
      {/* Actual output set by react using useState */}

      <h3>Emoji's we know</h3>

      <ul style={{ display: "inline-flex", padding: "0" }}>
        {emojisWeKnow.map((emoji) => {
          return (
            <li
              onClick={() => emojiValue(emoji)}
              style={{
                listStyle: "none",
                marginRight: "1rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
