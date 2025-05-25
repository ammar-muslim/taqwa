"use client";
import React from "react";
import styles from './Articles.module.css';
import Link from "next/link";
import BackgroundIcons from '@/components/background/BackgroundIcons';
import { useState, useEffect } from "react";
import Image from 'next/image'

import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const articlesArray: any[] = [];
        querySnapshot.forEach(doc => {
          articlesArray.push({ id: doc.id, ...doc.data() })
        })
        setArticles(articlesArray);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();

  }, [])


  return (
    <div className={styles.container}>
      {/* الهيدر */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>المقالات</h1>
          <p className={styles.headerSubtitle}>إقرأ مقالاتنا لتعلم كل الاسلام</p>
        </div>
      </header>
      <BackgroundIcons>
        {/* المحتوى الرئيسي */}

        <section className={styles.section}>
          <div className={styles.sectionWrapper}>
            {articles.map((article: any) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <div className={`${styles.card} ${styles.withPattern}`}>

                  <h2 className={styles.sectionTitle}>
                    {article.title ? article.title.slice(0, 50) : "بدون عنوان"}
                  </h2>
                  <p className={styles.subTitle}>
                    {article.content ? article.content.slice(0, 70) + "..." : "لا يوجد محتوى"}
                  </p>
                  <p className={styles.author}>
                    {article.author || "غير معروف"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </BackgroundIcons>
    </div>
  );
}

export default ArticlesPage;
