//import './App.css';
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef hook for button and copy reference
  const PasswordRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "@!$%^&{}_+-)(&";

    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyPasswordToClipboard= useCallback(()=>{
    PasswordRef.current?.select()
    
    // It will select the password range you want to copy
   // PasswordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{passGen()},[length,number,char,passGen])

  return (
    <>
      <h1 className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-4 text-orange-500 bg-gray-800">
        Password Generator
      </h1>
      <dic className='classname="flex shadow rounded-lg overflow-hidden mb-4'></dic>
      <input
        type="text"
        value={Password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={PasswordRef}
      />
      <button onClick={copyPasswordToClipboard}  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
        Copy
      </button>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />

          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={setChar}
            id="CharInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="CharInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
