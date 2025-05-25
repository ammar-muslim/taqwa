"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import BackgroundIcons from '@/components/background/BackgroundIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('تم إرسال النموذج:', formData);
    alert('تم إرسال رسالتك بنجاح! نسأل الله أن يوفقنا لخدمتكم.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>تواصل معنا</h1>
          <p className={styles.headerSubtitle}>نُرحب باستفساراتكم وملاحظاتكم فيما يخص الموقع أو المحتوى الإسلامي المُقدم</p>
        </div>
      </header>


      <BackgroundIcons> 
      <main className={styles.main}>
        <section className={styles.contactInfoSection}>
          <h2 className={styles.sectionTitle}>معلومات التواصل</h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <Phone className={styles.infoIcon} size={24} />
              </div>
              <h3 className={styles.infoTitle}>رقم الهاتف</h3>
              <p className={styles.infoDetails}>+966 12 345 6789</p>
              <p className={styles.infoDetails}>+966 98 765 4321</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <Mail className={styles.infoIcon} size={24} />
              </div>
              <h3 className={styles.infoTitle}>البريد الإلكتروني</h3>
              <p className={styles.infoDetails}>info@qibla-time.com</p>
              <p className={styles.infoDetails}>support@qibla-time.com</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <MapPin className={styles.infoIcon} size={24} />
              </div>
              <h3 className={styles.infoTitle}>موقعنا الجغرافي</h3>
              <p className={styles.infoDetails}>الرياض، المملكة العربية السعودية</p>
              <p className={styles.infoDetails}>شارع الإمام أحمد بن حنبل</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIconWrapper}>
                <Clock className={styles.infoIcon} size={24} />
              </div>
              <h3 className={styles.infoTitle}>أوقات الدعم</h3>
              <p className={styles.infoDetails}>الأحد - الخميس: 10:00 ص - 4:00 م</p>
              <p className={styles.infoDetails}>الجمعة والسبت: إجازة</p>
            </div>
          </div>
        </section>

        <section className={styles.contactFormSection}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <MessageSquare className={styles.formHeaderIcon} size={24} />
              <h2 className={styles.formTitle}>راسلنا برسالتك</h2>
              <p className={styles.formSubtitle}>نسعد بتواصلك معنا لأي اقتراح أو استفسار يخدم ديننا وأمتنا</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>الاسم الكامل</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>الموضوع</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="ما موضوع رسالتك؟"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="اكتب رسالتك أو استفسارك هنا..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>إرسال</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </section>


      </main>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>هل لديك استفسار شرعي أو اقتراح؟</h2>
          <p className={styles.ctaText}>لا تتردد في التواصل معنا، هدفنا نشر العلم النافع والمحتوى الهادف.</p>
          <a href="tel:+966123456789" className={styles.ctaButton}>تواصل معنا الآن</a>
        </div>
      </div>

      </BackgroundIcons>
    </div>
  );
};

export default Contact;
