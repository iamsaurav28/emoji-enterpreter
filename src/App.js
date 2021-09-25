import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "🙈": "shy",
  "😔": "Sad",
  "😇": "angel",
  "❤️": "Love",
  "😑": "Annoyance",
  "😂": "Face with Tears of Joy",
  "😎": "attitude",
  "😭": "Crying",
  "💔":
    "broken" /** add some more to show how the app now expands when there's new data */
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var col = "orange";

  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(e) {
    var userInput = e.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: col }}>Inside Outt!!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 0.5rem",
              cursor: "pointer"
            }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
