import React, { useState } from "react";
import styles from "./Home.module.css";
import Button from "./Button";

function Home() {
  const [res, setRes] = useState("");

  const buttons = [
    "C",
    "9",
    "/",
    "8",
    "7",
    "6",
    "*",
    "5",
    "4",
    "3",
    "+",
    "2",
    "1",
    "0",
    "-",
    ".",
    "Del",
    "=",
  ];

  function findVal(){
    let result = Function("return "+res)();
    setRes(result.toString());
  }

  function handler(arg) {

    if(res === "Infinity"){
      setRes("");
      return;
    }

    if (arg == "C") setRes("");
    else if (arg == "=") findVal();
    else if (arg == "Del") {
      let n = res.length;
      if (n > 0) setRes(res.slice(0, n - 1));
    } else setRes(res.concat(arg));
  }

  return (
    <div className={styles.home}>
      <div className={styles.inner}>
        <div className={styles.result}>
          <div className={styles.resbox}>
            {res}
          </div>
        </div>
        <div className={styles.btns}>
          {buttons.map((btn, i) => (
            <Button value={btn} key={i} handler={handler}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
