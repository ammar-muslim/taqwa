"use client";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import styles from "../Article.module.css";
import { Article } from "@/types/article";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
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
