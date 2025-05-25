"use client"
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [books, setBooks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [cover, setCover] = useState("");
  
  const [articles, setArticles] = useState<any[]>([]);
  const [articleTitle, setArticleTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  
    
  // تحميل الكتب من Firestore
  const fetchBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    const booksArray: any[] = [];
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
    const articlesArray: any[] = [];
    querySnapshot.forEach(doc => {
      articlesArray.push({ id: doc.id, ...doc.data() });
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
  // إضافة مقال جديد
  const handleAddArticle = async () => {
    if (!articleTitle) return alert("اكتب عنوان المقال");
    await addDoc(collection(db, "articles"), { title: articleTitle, author: articleAuthor, content, slug });
    setArticleTitle("");
    setArticleAuthor("");
    setContent("");
    setSlug("");
    fetchArticles();
  };
  
  
  // حذف كتاب
  const handleDeleteBook = async (id: string) => {
    await deleteDoc(doc(db, "books", id));
    fetchBooks();
  };

  // حذف مقال
  const handleDeleteArticle = async (id: string) => {
    await deleteDoc(doc(db, "articles", id));
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
        {books.map(book => (
          <li key={book.id} className={styles.book}>
            {book.title}
            <button onClick={() => handleDeleteBook(book.id)}>حذف</button>
          </li>
        ))}
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
            <button onClick={() => handleDeleteArticle(article.id)}>حذف</button>
          </li>
        ))}
      </ul>
  
      </div>
    </div>
  );
}
