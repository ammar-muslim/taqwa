import styles from './Prayer-time.module.css';
import BackgroundIcons from '@/components/background/BackgroundIcons';
import PrayerTimesWidget from '@/components/PrayerTimesWidget/PrayerTimesWidget';


function PrayerTimesPage() {


  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>مواقيت الصلوات</h1>
          <p className={styles.headerSubtitle}>
            إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا
          </p>
        </div>
      </div>


      <BackgroundIcons>

        <div className={styles.content}>
          <PrayerTimesWidget />
        </div>

      </BackgroundIcons>
    </div>
  )
}

export default PrayerTimesPage






