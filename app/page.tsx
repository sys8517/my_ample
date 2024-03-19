"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import { ampleData } from "@/ampleData";

export default function Home() {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");

  const [resultList, setResultList] = useState<any[]>([]);
  return (
    <main className={styles.main}>
      <div className={styles.hori_box}>
        <span>R</span>
        <input
          value={red}
          type="number"
          max={255}
          onChange={(e) => {
            const value = e.currentTarget?.value;
            setRed(value);
          }}
        />
        <span>G</span>
        <input
          value={green}
          type="number"
          max={255}
          onChange={(e) => {
            const value = e.currentTarget?.value;
            setGreen(value);
          }}
        />
        <span>B</span>
        <input
          value={blue}
          type="number"
          max={255}
          onChange={(e) => {
            const value = e.currentTarget?.value;
            setBlue(value);
          }}
        />
        <button
          onClick={() => {
            const filter = ampleData.filter((a) => {
              if (
                Number(red) - 8 <= a.red &&
                a.red <= Number(red) + 8 &&
                Number(green) - 8 <= a.green &&
                a.green <= Number(green) + 8 &&
                Number(blue) - 8 <= a.blue &&
                a.blue <= Number(blue) + 8
              ) {
                return a;
              } else {
                return;
              }
            });
            console.log("filter : ", filter);
            setResultList((old) => {
              return filter;
            });
          }}
        >
          검색
        </button>
        <button>등록</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>R</th>
            <th>G</th>
            <th>B</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {resultList.map((r) => {
            return (
              <tr key={r.red + r.price}>
                <td>{r.red}</td>
                <td>{r.green}</td>
                <td>{r.blue}</td>
                <td>{r.price}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </main>
  );
}
