export interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Sunrise: string;
  Sunset: string;
}

export default async function getPrayerTimes(city: string, country: string): Promise<PrayerTimes> {
  const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`);
  const times = await res.json();
  return times.data.timings;
}
