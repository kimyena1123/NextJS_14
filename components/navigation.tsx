
"use client"; //usePathname은 client component에서만 작동함. 그래서 "use client"를 넣어줌

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";


export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);
    // console.log(path);
    console.log("hellooo");

    return (
        <nav className={styles.nav}>
        <ul className={styles.list}>
            <li><Link href="/">Home</Link>{path == "/" ? "🔥" : ""}</li>
            <li><Link href="/about-us">About us</Link>{path == "/about-us" ? "🔥" : ""}</li>
            <li><button onClick={() => setCount(c => c+1)}>{count}</button></li>
        </ul>
        </nav>
    );
}
