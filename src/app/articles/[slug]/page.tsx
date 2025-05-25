"use client";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import styles from "./Article.module.css";
import React, { useEffect, useState } from "react";
import { getData } from "./server";

interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
  content: string;
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const article = await getData(params.slug);
        setArticle(article);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [params.slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/articles" className={styles.backLink}>
          <FaArrowLeft /> العودة لصفحة المقالات
        </Link>
        <h1>{article.title}</h1>
        <p> {article.author} - نُشر بواسطة المستخدم</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
}
