import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const nowTime = new Date().toLocaleTimeString();
  const [lastUpdateAt, setLastUpdateAt] = useState(nowTime);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const plus10 = () => {
    setCount(count + 10);
  };

  const minus10 = () => {
    setCount(count - 10);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(
    function() {
      const nowTime = new Date().toLocaleTimeString();
      setLastUpdateAt(nowTime);
    },
    [count]
  );

  return (
    <div>
      <div>
        <button onClick={plus}>+</button>
      </div>
      <div>カウント : {count}</div>
      <div>
        <button onClick={minus}>-</button>
      </div>
      <div>カウント最終更新日時 : {lastUpdateAt}</div>
      <div>
        <button onClick={plus10}>+10ボタン</button>
      </div>
      <div>
        <button onClick={minus10}>-10ボタン</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
