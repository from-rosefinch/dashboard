import { useEffect, useState } from "react";

const Background = () => {
  const [timeState, setTimeState] = useState({
    message: "",
    bgClass: ""
  });

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    let message = "";
    let bgClass = "";

    if (hour >= 5 && hour < 12) {
      message = "Good Morning";
      bgClass = "bg-morning";
    } else if (hour >= 12 && hour < 18) {
      message = "Good Afternoon";
      bgClass = "bg-afternoon";
    } else if (hour >= 18 && hour < 22) {
      message = "Good Evening";
      bgClass = "bg-evening";
    } else {
      message = "Good Night";
      bgClass = "bg-night";
    }

    setTimeState({ message, bgClass });
  }, []);

  return (
    <>
      <div className={`background ${timeState.bgClass}`}></div>

      <div className="greeting-text">
        {timeState.message}
      </div>
    </>
  );
};

export default Background;