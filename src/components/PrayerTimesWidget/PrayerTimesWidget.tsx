"use client"
import styles from "./PrayerTimesWidget.module.css";
import type { PrayerTimes } from "@/app/api/prayer-times/route";
import { useEffect, useState } from "react";

interface PrayerTimesWidgetProps {
  city: string;
  country: string;
}

export default function PrayerTimesWidget({ city, country }: PrayerTimesWidgetProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);

  const [checkedPrayers, setCheckedPrayers] = useState<Record<string, boolean>>({
    Fajr: false,
    Dhuhr: false,
    Asr: false,
    Maghrib: false,
    Isha: false,
  });

  // كائن لترجمة أسماء الصلوات
  const prayerNamesAr: Record<string, string> = {
    Fajr: "الفجر",
    Dhuhr: "الظهر",
    Asr: "العصر",
    Maghrib: "المغرب",
    Isha: "العشاء",
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setCheckedPrayers((prev) => {
      const newState = {
        ...prev,
        [value]: checked,
      };
      return newState;
    });
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/prayer-times?city=${city}&country=${country}`);
        if (!response.ok) {
          throw new Error('Failed to fetch prayer times');
        }
        const times = await response.json();
        setPrayerTimes(times);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'حدث خطأ');
      } finally {
        setLoading(false);
      }
    };
    fetchPrayerTimes();
  }, [city, country]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>جارٍ جلب مواقيت الصلاة...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>حدث خطأ: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.prayerTimes}>
      <ul className={styles.prayerTimesList}>
        {Object.entries(prayerTimes || {})
          .filter(([prayer]) =>
            ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].includes(prayer)
          )
          .map(([prayer, time]) => {
            return (
              <li key={prayer} className={styles.prayerTime}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    value={prayer}
                    checked={checkedPrayers[prayer] || false}
                    onChange={handleCheckboxChange}
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <strong className={styles.prayerTimeName}>
                  {prayerNamesAr[prayer]}
                </strong>{" "}
                : <span>{time}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
