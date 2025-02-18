import React, { useEffect } from "react";

export default function Timer({ remainingSeconds, dispatch }) {
  const mins = Math.floor(remainingSeconds / 60);
  const seconds = Math.floor(remainingSeconds % 60);

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "timer" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
