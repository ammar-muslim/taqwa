"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBooks } from "@/utils/getBooks";
import { Book } from "@/types/book";
import styles from "./BooksSection.module.css";

export default function BooksSection() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) return <div>جاري تحميل الكتب...</div>;

  return (
    <div className={styles.booksSection}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.sectionTitleSpan}>اهم الكتب</span>
      </h2>

      <div className={styles.booksBox}>
        {books.slice(0, 6).map((book) => (
          <div key={book.id} className={styles.book}>
            <Link href={book.link}>
              <h5 className={styles.bookNumber}>{book.id.slice(0, 1)}</h5>
              <div className={styles.imageContainer}>
                <Image
                  src={book.cover}
                  alt="book"
                  width={200}
                  height={250}
                  className={styles.coverImage}
                />
              </div>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <h4 className={styles.bookAuthor}>{book.author}</h4>
              <p className={styles.bookDescription}>{book.description}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.ctaBooksButtonContainer}>
        <Link href="/books" className={styles.ctaBooksButton}>
          باقي الكتب
        </Link>
      </div>
    </div>
  );
}
