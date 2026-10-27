import Image from "next/image";
import styles from "./page.module.css"
import Banner from "@/components/Banner";
import Card from "@/components/Card"
import CardPanel from "@/components/CardPanel";
import Link from "next/link";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner/>
      </main>
      <PromoteCard/>
    </div>
  );
}
