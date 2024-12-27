import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState<string>('')
  const [lengthErrorMsg, setLengthErrorMsg] = useState<string>('')
  const [emojiErrorMsg, setEmojiErrorMsg] = useState<string>('')
  const emoji1 = new RegExp('😊');
  const emoji2 = new RegExp('🔥');
  const emoji3 = new RegExp('💥');

  const checkEmoji = () =>{
    const isHavingEmoji1 = emoji1.test(password)
    const isHavingEmoji2 = emoji2.test(password)
    const isHavingEmoji3 = emoji3.test(password)

    if (!isHavingEmoji1 && !isHavingEmoji2 && !isHavingEmoji3) {
      setEmojiErrorMsg("Add an emoji to bring some life to your password.")
    } else {
      setEmojiErrorMsg('')
    }
  }

  const checkLength = () => {
    if (password.length < 8) {
      setLengthErrorMsg("Your password is too short, like my patience.")
    } else {
      setLengthErrorMsg('')
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>Enter your password</div>
      <input 
        type="text" 
        value={password} 
        onChange={e => {
          checkEmoji()
          checkLength()
          setPassword(e.target.value)
        }} 
      />
      <div style={{color:'red'}}>{emojiErrorMsg}</div>
      <div style={{color:'red'}}>{lengthErrorMsg}</div>
    </div>
  );
}

export default App;
