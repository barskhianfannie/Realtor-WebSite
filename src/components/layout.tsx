import { useState, useEffect } from "react";
import styles from "../styles/layout.module.css";

export default function TransitionLayout({ children }:any){
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) {
      // console.log(displayChildren.type.name);
      setTransitionStage("fadeOut");
    }
  }, [children, displayChildren]);

  return (
    <div>
      <div
        onTransitionEnd={() => {
          // console.log("transitionended");
          if (transitionStage === "fadeOut") {
            window.scrollTo(0, 0);
            setDisplayChildren(children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
    </div>
  );
}
