import React from 'react';
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}>
            <h3>تَـقـوَى</h3>
            <p>منصة تعليمية إسلامية شاملة</p>
          </div>
          
          <div className={styles.navLinks}>
            <a href="/about">عن الموقع</a>
            <a href="/contact">اتصل بنا</a>
            <a href="/privacy">سياسة الخصوصية</a>
            <a href="/terms">الشروط والأحكام</a>
            <a href="/faq">الأسئلة الشائعة</a>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} تَـقـوَى. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
