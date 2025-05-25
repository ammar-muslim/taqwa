import Image from "next/image";
import styles from "./page.module.css";
import BackgroundIcons from "@/components/background/BackgroundIcons";
import PrayerTimesWidget from "@/components/PrayerTimesWidget/PrayerTimesWidget";
import { FiSun, FiArrowRight } from "react-icons/fi";
import { FaMosque, FaPray } from "react-icons/fa";
import { 
  FiBookOpen, 
  FiCompass, 
  FiCheckCircle, 
} from "react-icons/fi";
import { 
  BsPersonLinesFill, 
  BsFillMoonStarsFill 
} from "react-icons/bs";
import { 
  IoIosGlobe, 
  IoIosBookmarks 
} from "react-icons/io";
import { 
  FaQuran, 
  FaPrayingHands 
} from "react-icons/fa";
import Link from "next/link";
import BooksSection from "@/components/BookSection/BooksSection";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.headerContent}>
          <div className={styles.heroContent}>
            <div className={styles.headerTitleContainer}>
              <FiSun className={styles.icon} />
              <h1 className={styles.headerTitle}>تَــقــوَى
              </h1>
            </div>
            <div className={styles.headerSubtitleContainer}>
              <FiBookOpen className={styles.icon} />
              <p className={styles.headerSubtitle}>
                قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ
              </p>
            </div>
            <div className={styles.heroDecorations}>
              <div className={styles.floatingSun} />
              <div className={styles.floatingCloud} />
            </div>
            <div className={styles.squares}>
              <div className={styles.square} />
              <div className={styles.square} />
              <div className={styles.square} />
              <div className={styles.square} />
            </div>

            <Link href="/elm-path" className={styles.ctaButton} >

              <span>مسار العلم الشرعي</span>
              <FiArrowRight className={styles.ctaButtonIcon} />
            </Link>
          </div>
          <div className={styles.heroTimes}>
          <div className={styles.prayerTimesBox}>
            <PrayerTimesWidget />
          </div>
          </div>

        </div>
      </div>

      <BackgroundIcons>

          <BooksSection />
<div className={styles.section}>
  <h2 className={styles.sectionTitle}>
    <span className={styles.sectionTitleSpan}>مواضيع أخرى</span>
  </h2>

  <div className={styles.grid}>
    {/* مسار العلم الشرعي */}
    <div className={styles.card}>
      <IoIosBookmarks className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>مسار العلم الشرعي</h3>
      <p className={styles.cardDescription}>
        اكتشف مسارات التعلم المنهجية في العلوم الشرعية.
      </p>
      <Link href="/elm-path" className={styles.ctaButton}>
        ابدأ الآن
      </Link>
    </div>

    {/* القبلة */}
    <div className={styles.card}>
      <FiCompass className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>القبلة</h3>
      <p className={styles.cardDescription}>
        اعرف اتجاه القبلة أينما كنت بدقة وسهولة.
      </p>
      <Link
        href="https://qiblafinder.withgoogle.com/intl/ar/desktop"
        className={styles.ctaButton}
        target="_blank"
      >
        اعرض القبلة
      </Link>
    </div>

    {/* طريقة الصلاة */}
    <div className={styles.card}>
      <FaPrayingHands className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>طريقة الصلاة</h3>
      <p className={styles.cardDescription}>
        تعلّم كيفية أداء الصلاة خطوة بخطوة للمبتدئين.
      </p>
      <Link
        href="https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9+%D9%85%D9%86+%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%AD%D9%8A%D9%86"
        className={styles.ctaButton}
        target="_blank"
      >
        شاهد الفيديو
      </Link>
    </div>

    {/* أركان الإسلام */}
    <div className={styles.card}>
      <FiCheckCircle className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>أركان الإسلام</h3>
      <p className={styles.cardDescription}>
        تعرّف على أركان الإسلام الخمسة .
      </p>
      <Link
        href="https://alfarooqcentre.com/ar/islam/pillars-of-islam/"
        className={styles.ctaButton}
      >
        اقرأ المقال
      </Link>
    </div>

    {/* أسماء الله الحسنى */}
    <div className={styles.card}>
      <BsFillMoonStarsFill className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>أسماء الله الحسنى</h3>
      <p className={styles.cardDescription}>
        استكشف معاني أسماء الله وصفاته وتعلّم كيف تدعو بها.
      </p>
      <Link
        href="https://ar.wikipedia.org/wiki/%D8%A3%D8%B3%D9%85%D8%A7%D8%A1_%D8%A7%D9%84%D9%84%D9%87_%D8%A7%D9%84%D8%AD%D8%B3%D9%86%D9%89"
        className={styles.ctaButton}
      >
        اقرأ المقال
      </Link>
    </div>

    {/* الأذكار اليومية */}
    <div className={styles.card}>
      <BsPersonLinesFill className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>الأذكار اليومية</h3>
      <p className={styles.cardDescription}>
        احرص على حفظ وقراءة الأذكار التي تحفظك .
      </p>
      <Link
        href="https://snazzy-hamster-390b7d.netlify.app"
        className={styles.ctaButton}
      >
        استعرض الأذكار
      </Link>
    </div>

    {/* السيرة النبوية */}
    <div className={styles.card}>
      <IoIosGlobe className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>السيرة النبوية</h3>
      <p className={styles.cardDescription}>
        تعرّف على حياة النبي ﷺ وغزواته ومواقفه العظيمة.
      </p>
      <Link
        href="https://www.noor-book.com/..."
        className={styles.ctaButton}
      >
        اقرأ السيرة
      </Link>
    </div>

    {/* فضل القرآن الكريم */}
    <div className={styles.card}>
      <FaQuran className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>فضل القرآن الكريم</h3>
      <p className={styles.cardDescription}>
        اعرف الفضل العظيم لتلاوة القرآن والعمل به.
      </p>
      <Link
        href="https://www.youtube.com/watch?v=OghbJ48Foko"
        className={styles.ctaButton}
        target="_blank"
      >
        شاهد الفيديو
      </Link>
    </div>
  </div>
</div>

<section className={styles.ayahSection}>
  
  <div className={styles.ayahContent}>
    <p className={styles.ayahText}>
      " وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ "
    </p>
    <p className={styles.ayahExplanation}>
      يخبرنا الله سبحانه وتعالى في هذه الآية أن الغاية من خلق الجن والإنس هي تحقيق عبادة الله وحده لا شريك له. فليست الحياة عبثًا، بل لها هدف سامٍ وهو توحيد الله وطاعته.
    </p>
    <blockquote className={styles.hadith}>
      <div className={styles.hadithText}>قال رسول الله ﷺ: حق الله على العباد أن يعبدوه ولا يشركوا به شيئًا</div>
      <span className={styles.hadithSource}>[متفق عليه]</span>
    </blockquote>
  </div>
</section>


<section className={styles.aboutSection}>
  <div className={styles.aboutContainer}>
  <h2 className={styles.sectionTitle}>
    <span className={styles.sectionTitleSpan}>عن الموقع</span>
  </h2>    <p className={styles.aboutDescription}>
      موقع إسلامي شامل يهدف إلى نشر العلم الشرعي بطريقة منظمة وسهلة، تساعد كل مسلم ومسلمة على فهم دينهم 
      والعمل به في حياتهم اليومية بكل يسر وثقة.  
      نسعى لأن يكون الموقع مرجعًا موثوقًا لكل من يبحث عن المعرفة الشرعية الصحيحة والهادفة، 
      مع توفير مصادر متنوعة من كتب، مقالات، ومحاضرات مرئية.
    </p>
    <p className={styles.aboutDescription}>
      كما نركز على تبسيط المفاهيم الإسلامية وتعزيز القيم النبيلة، مع توفير أدوات تعليمية تناسب مختلف المستويات،  
      سواء كنت مبتدئًا أو تبحث عن تعمق في العلوم الشرعية.
    </p>
    <Link href="/about" className={styles.aboutButton}>
      اعرف المزيد
    </Link>
  </div>
</section>


<section className={styles.contactSection}>
  <div className={styles.contactContainer}>
    <h2 className={styles.contactTitle}>تواصل معنا</h2>
    <p className={styles.contactDescription}>
      هل لديك استفسار أو اقتراح؟ نحن هنا لنستمع إليك ونسعد بتواصلك في أي وقت. 
      سواء كان لديك سؤال حول المحتوى، أو رغبة في تقديم فكرة جديدة، لا تتردد في مراسلتنا.
    </p>
    <Link href="/contact" className={styles.contactButton}>
      راسلنا
    </Link>
  </div>
</section>




      </BackgroundIcons>
    </div>
  );
}

