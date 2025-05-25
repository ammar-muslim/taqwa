import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const country = searchParams.get('country');

  if (!city || !country) {
    return NextResponse.json(
      { error: 'Missing required parameters: city and country' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`);
    if (!res.ok) {
      throw new Error('Failed to fetch prayer times');
    }
    const data = await res.json();
    return NextResponse.json(data.data.timings);
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prayer times' },
      { status: 500 }
    );
  }
}
