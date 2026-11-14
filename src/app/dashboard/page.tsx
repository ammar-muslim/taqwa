
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth, db, ADMIN_UID } from "@/utils/firebase";

import styles from "./Dashboard.module.css";
import type { Book } from "@/types/book";
import type { Article } from "@/types/article";

export default function Dashboard() {
  const router = useRouter();

  // Data states
  const [books, setBooks] = useState<Book[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  // Book form states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [cover, setCover] = useState("");

  // Article form states
  const [articleTitle, setArticleTitle] = useState("");
  const [articleAuthor, setArticleAuthor] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");

  // UI states
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingBook, setIsSavingBook] = useState(false);
  const [isSavingArticle, setIsSavingArticle] = useState(false);
  const [error, setError] = useState("");

  // Authentication + Fetch Data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user || user.uid !== ADMIN_UID) {
        if (user) {
          await signOut(auth);
        }

        router.replace("/admin/login");
        setIsLoading(false);
        return;
      }

      try {
        const [booksSnapshot, articlesSnapshot] = await Promise.all([
          getDocs(collection(db, "books")),
          getDocs(collection(db, "articles")),
        ]);

        setBooks(
          booksSnapshot.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          })) as Book[]
        );

        setArticles(
          articlesSnapshot.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          })) as Article[]
        );
      } catch (error) {
        console.error("Dashboard loading error:", error);
        setError("Failed to load dashboard data.");
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Add book
  const handleAddBook = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    setError("");
    setIsSavingBook(true);

    const newBook = {
      title: title.trim(),
      author: author.trim(),
      description: description.trim(),
      link: link.trim(),
      cover: cover.trim(),
    };

    try {
      const docRef = await addDoc(
        collection(db, "books"),
        newBook
      );

      setBooks((prev) => [
        { ...newBook, id: docRef.id } as Book,
        ...prev,
      ]);

      setTitle("");
      setAuthor("");
      setDescription("");
      setLink("");
      setCover("");
    } catch (error) {
      console.error("Add book error:", error);
      setError("Failed to add book.");
    } finally {
      setIsSavingBook(false);
    }
  };

  // Delete book
  const handleDeleteBook = async (bookId: string) => {
    if (!window.confirm("Are you sure you want to delete this book?")) {
      return;
    }

    setError("");

    try {
      await deleteDoc(doc(db, "books", bookId));

      setBooks((prev) =>
        prev.filter((book) => book.id !== bookId)
      );
    } catch (error) {
      console.error("Delete book error:", error);
      setError("Failed to delete book.");
    }
  };

  // Add article
  const handleAddArticle = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !articleTitle.trim() ||
      !articleAuthor.trim() ||
      !content.trim() ||
      !slug.trim()
    ) {
      return;
    }

    setError("");
    setIsSavingArticle(true);

    const newArticle = {
      title: articleTitle.trim(),
      author: articleAuthor.trim(),
      content: content.trim(),
      slug: slug.trim(),
    };

    try {
      const docRef = await addDoc(
        collection(db, "articles"),
        newArticle
      );

      setArticles((prev) => [
        { ...newArticle, id: docRef.id } as Article,
        ...prev,
      ]);

      setArticleTitle("");
      setArticleAuthor("");
      setContent("");
      setSlug("");
    } catch (error) {
      console.error("Add article error:", error);
      setError("Failed to add article.");
    } finally {
      setIsSavingArticle(false);
    }
  };

  // Delete article
  const handleDeleteArticle = async (articleId: string) => {
    if (!window.confirm("Are you sure you want to delete this article?")) {
      return;
    }

    setError("");

    try {
      await deleteDoc(doc(db, "articles", articleId));

      setArticles((prev) =>
        prev.filter((article) => article.id !== articleId)
      );
    } catch (error) {
      console.error("Delete article error:", error);
      setError("Failed to delete article.");
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className={styles.loadingSpinner}>
        Loading dashboard...
      </div>
    );
  }

  return (
    <main className={styles.container}>
      {error && (
        <div className={styles.alertDanger} role="alert">
          {error}

          <button
            type="button"
            onClick={() => setError("")}
            aria-label="Close error"
          >
            ×
          </button>
        </div>
      )}

      {/* Books Section */}
      <section className={styles.booksSection}>
        <h1>Books Dashboard</h1>

        <form onSubmit={handleAddBook}>
          <div className={styles.formGroup}>
            <input
              className={styles.input}
              placeholder="Book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              className={styles.input}
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <textarea
              className={styles.input}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              className={styles.input}
              placeholder="Book link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />

            <input
              className={styles.input}
              placeholder="Cover image URL"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
            />

            <button
              className={styles.button}
              type="submit"
              disabled={isSavingBook}
            >
              {isSavingBook ? "Adding..." : "Add Book"}
            </button>
          </div>
        </form>

        <div className={styles.booksList}>
          <h2>Books ({books.length})</h2>

          {books.length === 0 ? (
            <p>No books found.</p>
          ) : (
            <ul>
              {books.map((book) => (
                <li key={book.id} className={styles.book}>
                  <div className={styles.bookInfo}>
                    <strong>{book.title}</strong>
                    <p>{book.author}</p>
                  </div>

                  <button
                    className={styles.deleteBtn}
                    type="button"
                    onClick={() => handleDeleteBook(book.id!)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Articles Section */}
      <section className={styles.articlesSection}>
        <h1>Articles Dashboard</h1>

        <form onSubmit={handleAddArticle}>
          <div className={styles.formGroup}>
            <input
              className={styles.input}
              placeholder="Article title"
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              required
            />

            <input
              className={styles.input}
              placeholder="Author"
              value={articleAuthor}
              onChange={(e) => setArticleAuthor(e.target.value)}
              required
            />

            <input
              className={styles.input}
              placeholder="Slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />

            <textarea
              className={styles.input}
              placeholder="Article content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <button
              className={styles.button}
              type="submit"
              disabled={isSavingArticle}
            >
              {isSavingArticle ? "Adding..." : "Add Article"}
            </button>
          </div>
        </form>

        <div className={styles.articlesList}>
          <h2>Articles ({articles.length})</h2>

          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            <ul>
              {articles.map((article) => (
                <li key={article.id} className={styles.article}>
                  <div className={styles.articleInfo}>
                    <strong>{article.title}</strong>
                    <p>{article.author}</p>
                  </div>

                  <button
                    className={styles.deleteBtn}
                    type="button"
                    onClick={() => handleDeleteArticle(article.id!)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
