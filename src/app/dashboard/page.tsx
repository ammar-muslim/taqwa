"use client"
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, QuerySnapshot, DocumentData } from "firebase/firestore";
import styles from "./Dashboard.module.css";
import { Book } from "@/types/book";
import { Article } from "@/types/article";

export default function Dashboard() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [cover, setCover] = useState("");
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [articleTitle, setArticleTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");

  // تحميل الكتب من Firestore
  const fetchBooks = async () => {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, "books"));
    const booksArray: Book[] = [];
    querySnapshot.forEach(doc => {
      booksArray.push({ id: doc.id, ...doc.data() });
    });
    setBooks(booksArray);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // تحميل المقالات من Firestore
  const fetchArticles = async () => {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const articlesArray: Article[] = [];
    querySnapshot.forEach(doc => {
      articlesArray.push({ id: doc.id, ...doc.data() } as Article);
    });
    setArticles(articlesArray);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // إضافة كتاب جديد
  const handleAddBook = async () => {
    if (!title) return alert("اكتب عنوان الكتاب");
    await addDoc(collection(db, "books"), { title, author, description, link, cover });
    setTitle("");
    setAuthor("");
    setDescription("");
    setLink("");
    setCover("");
    fetchBooks();
  };

  // حذف كتاب
  // const handleDeleteBook = async (bookId: string) => {
  //   try {
  //     await deleteDoc(doc(db, "books", bookId));
  //     setBooks(books.filter(book => book && book.id !== bookId));
  //   } catch (error) {
  //     console.error("Error deleting book:", error);
  //   }
  // };

  // حذف مقال
  // const handleDeleteArticle = async (articleId: string) => {
  //   try {
  //     await deleteDoc(doc(db, "articles", articleId));
  //     setArticles(articles.filter(article => article && article.id === articleId));
  //   } catch (error) {
  //     console.error("Error deleting article:", error);
  //   }
  // };

  // إضافة مقال جديد
  const handleAddArticle = async () => {
    if (!articleTitle) return alert("اكتب عنوان المقال");
    if (!articleAuthor) return alert("اكتب اسم المؤلف");
    if (!content) return alert("اكتب المحتوى");
    if (!slug) return alert("اكتب الرابط");
    await addDoc(collection(db, "articles"), { title: articleTitle, author: articleAuthor, content, slug });
    setArticleTitle("");
    setArticleAuthor("");
    setContent("");
    setSlug("");
    fetchArticles();
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.booksSection}> 
      <h1>لوحة التحكم - الكتب</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="عنوان الكتاب"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="اسم المؤلف"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="وصف الكتاب"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
          className={styles.input}
        placeholder="رابط الكتاب"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="رابط الصورة"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />
      <button className={styles.button} onClick={handleAddBook}>أضف كتاب</button>
      <ul>
        {books.map((book) => {
          if (!book.id) return null;
          return (
            <li key={book.id} className={styles.book}>
              {book.title}
              {/* <button onClick={() => handleDeleteBook(book.id || "")}>حذف</button> */}
            </li>
          );
        })}
      </ul>
  
      </div>
      <div className={styles.articlesSection}> 
      <h1>لوحة التحكم - المقالات</h1>
      <input
        type="text"
        className={styles.input}
        placeholder="عنوان المقال"
        value={articleTitle}
        onChange={(e) => setArticleTitle(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="اسم المؤلف"
        value={articleAuthor}
        onChange={(e) => setArticleAuthor(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="الرابط"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <input
        type="text"
        className={styles.input}
        placeholder="المحتوى"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className={styles.button} onClick={handleAddArticle}>أضف مقال</button>
      <ul>
        {articles.map(article => (
          <li key={article.id} className={styles.article}>
            {article.title}
            {/* <button onClick={() => handleDeleteArticle(article.id || "")}>حذف</button> */}
          </li>
        ))}
      </ul>
  
      </div>
    </div>
  );
}
