
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, ADMIN_UID } from "@/utils/firebase";
import styles from "./Login.module.css";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const user = userCredential.user;

      console.log("Logged in UID:", user.uid);
      console.log("Expected Admin UID:", ADMIN_UID);

      if (user.uid !== ADMIN_UID) {
        await signOut(auth);
        setError("You are not authorized to access the dashboard.");
        return;
      }

      router.replace("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.decorationOne} />
      <div className={styles.decorationTwo} />

      <div className={styles.container}>
        <header className={styles.brand}>
          <h1 className={styles.brandTitle}>Taqwa</h1>
          <p className={styles.brandSubtitle}>
            Islamic Website Administration
          </p>
        </header>

        <section className={styles.card}>
          <div className={styles.heading}>
            <h2>Welcome Back</h2>
            <p>Sign in to manage your Taqwa dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className={styles.form}>
            {error && (
              <div className={styles.error} role="alert">
                {error}
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                autoComplete="username"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>

              <div className={styles.passwordWrapper}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className={`${styles.input} ${styles.passwordInput}`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.togglePassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={styles.submitButton}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner} />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className={styles.footerDivider}>
            Secure Administration Access
          </div>
        </section>

        <p className={styles.copyright}>
          © 2026 Taqwa. All rights reserved.
        </p>
      </div>
    </main>
  );
}
