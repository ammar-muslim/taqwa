import React from 'react';
import styles from './About.module.css';
import { Book, Home, Users, Heart, Globe, MessageSquare } from 'lucide-react';
import BackgroundIcons from '@/components/background/BackgroundIcons';

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>من نحن</h1>
          <p className={styles.headerSubtitle}>نرحب بكم في موقعنا الإسلامي - منارة العلم والإيمان</p>
        </div>
      </header>
      <BackgroundIcons>

      <main className={styles.section}>
        {/* رؤية ورسالة */}
        <section className="mb-16">
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>رؤيتنا ورسالتنا</h2>
            <div className="mb-8">
              <h3 className={styles.subTitle}>رؤيتنا</h3>
              <p>نتطلع إلى بناء مجتمع إسلامي واعٍ ومثقف...</p>
            </div>
            <div>
              <h3 className={styles.subTitle}>رسالتنا</h3>
              <p>نسعى إلى توفير محتوى إسلامي موثوق وشامل...</p>
            </div>
          </div>
        </section>

        {/* القيم */}
        <section className="mb-16">
          <h2 className={styles.sectionTitle}>قيمنا</h2>
          <div className={styles.valueGrid}>
            {[
              { icon: <Book />, title: 'العلم والمعرفة', desc: 'نؤمن بأهمية طلب العلم...' },
              { icon: <Home />, title: 'الوسطية والاعتدال', desc: 'نتبنى منهج الوسطية...' },
              { icon: <Users />, title: 'التعاون والأخوة', desc: 'نعزز روح التعاون...' },
              { icon: <Heart />, title: 'الرحمة والتسامح', desc: 'نؤمن بقيم الرحمة...' },
              { icon: <Globe />, title: 'العالمية', desc: 'نؤمن بعالمية الرسالة...' },
              { icon: <MessageSquare />, title: 'الحوار البناء', desc: 'نشجع الحوار البناء...' },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className={styles.valueItem}>
                <div className={styles.valueIcon}>{icon}</div>
                <h3 className={styles.subTitle}>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* فريقنا */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>فريقنا</h2>
          <div className={styles.card}>
            <p className="leading-relaxed mb-8">يضم فريقنا نخبة من العلماء والدعاة...</p>
            <div className={styles.teamBox}>
              <h3 className={styles.subTitle}>تخصصات فريقنا:</h3>
              <ul className={styles.list}>
                <li>علماء متخصصون في علوم القرآن الكريم والتفسير</li>
                <li>خبراء في الحديث النبوي الشريف وعلومه</li>
                <li>متخصصون في الفقه الإسلامي والأصول</li>
                <li>دعاة وخطباء ذوو خبرة</li>
                <li>مستشارون في مجال الأسرة</li>
                <li>خبراء في تقنية المعلومات</li>
                <li>متخصصون في الإعلام والتصميم</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* التذييل */}

            </BackgroundIcons>
    </div>
  );
};

export default About;
