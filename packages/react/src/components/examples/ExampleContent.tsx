import { useEffect, useRef, useState } from "react";

interface Props {
  width: number | string;
  height: number | string;
  color?: string;
  aspectRatio?: string;
}

export default function ({
  width,
  height,
  color = "red",
  aspectRatio = "auto",
}: Props) {
  const [count, setCount] = useState(Math.round(Math.random() * 100));
  const intervalId = useRef(0);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCount(count + Math.round(Math.random() * 20 - 10));
    }, 500);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio,
        width,
        height,
        background: color,
      }}
    >
      {count}
    </div>
  );
}
