import StoneworkStyles from "@styles/stonework.module.css";
import { useEffect, useRef } from "react";

interface Props {
  gap?: string;
  children: React.ReactNode;
}

export default function ({ children, gap = "0" }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--stonework-gap", gap);
    }
  });

  return (
    <section ref={sectionRef} className={`${StoneworkStyles.stonework}`}>
      {children}
    </section>
  );
}
