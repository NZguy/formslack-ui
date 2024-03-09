"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/data/UserContext";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  if(!user){
    redirect('/login');
  }

  return (
    <main className={styles.main}>
      index
    </main>
  );
}
