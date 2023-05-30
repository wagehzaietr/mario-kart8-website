import React from "react";

import redshell from "../public/redshell.png";
import Image from "next/image";

export default function RedShell({ styles }) {
  return (
    <Image src={redshell} alt="boo" width={70} height={70} className={styles} />
  );
}

