"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { db } from "@/utils/firebase"; 
import { collection, getDocs } from "firebase/firestore";

import styles from "./Books.module.css"
import Image from 'next/image'
import Link from 'next/link'
import BackgroundIcons from '@/components/background/BackgroundIcons';

const Books = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
    const fetchBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    const booksArray: any[] = [];
    querySnapshot.forEach(doc => {
      booksArray.push({ id: doc.id, ...doc.data() });
    });
    setBooks(booksArray);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <p>جاري تحميل الكتب...</p>;

  return (
    <div>

       <header className={styles.header}>
        <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>الكتب</h1>
        <p className={styles.headerSubtitle}>الكتب الإسلامية</p>
        </div>
      </header>

      <BackgroundIcons> 
<div className={styles.booksBox}>
{books.map((book) => (
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
</BackgroundIcons>    
          </div>
  )
}

export default Books
