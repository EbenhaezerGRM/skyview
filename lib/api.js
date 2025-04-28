// //AQI = https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-6.2349&longitude=106.9896&current=us_aqi,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide&hourly=pm2_5,carbon_monoxide,carbon_dioxide,nitrogen_dioxide,sulphur_dioxide&timezone=auto
// //WEATHER = https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Caddress%2CresolvedAddress%2Clatitude%2Clongitude%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeed%2Cwindspeedmean%2Cwinddir%2Cuvindex%2Csunrise%2Csunset%2Cconditions%2Cdescription%2Cicon&include=days%2Chours%2Ccurrent&key=${apiKey}&contentType=json

export const fetchWeatherData = async (city = "Bekasi") => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Caddress%2CresolvedAddress%2Clatitude%2Clongitude%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeed%2Cwindspeedmean%2Cwinddir%2Cuvindex%2Csunrise%2Csunset%2Cconditions%2Cdescription%2Cicon&include=days%2Chours%2Ccurrent&key=${apiKey}&contentType=json`
  );

  if (!response.ok) {
    throw new Error("Gagal mengambil data cuaca");
  }

  return response.json();
};

export const fetchCityFromCoords = async (lat, lon) => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Caddress%2CresolvedAddress%2Clatitude%2Clongitude%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeed%2Cwindspeedmean%2Cwinddir%2Cuvindex%2Csunrise%2Csunset%2Cconditions%2Cdescription%2Cicon&include=days%2Chours%2Ccurrent&key=${apiKey}&contentType=json`
  );

  if (!response.ok) {
    throw new Error("Gagal mendapatkan nama lokasi dari koordinat");
  } 

  const data = await response.json();
  return data.resolvedAddress;
};

export const fetchAirQualityData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,pm2_5,carbon_monoxide,nitrogen_monoxide,nitrogen_dioxide,sulphur_dioxide&hourly=us_aqi,pm2_5,carbon_monoxide,nitrogen_monoxide,nitrogen_dioxide,sulphur_dioxide&timezone=auto`
    );

    if (!response.ok) {
      throw new Error("Gagal mengambil data kualitas udara");
    }

    const data = await response.json();

    return {
      current: {
        us_aqi: data.current.us_aqi,
        pm2_5: data.current.pm2_5,
        co: data.current.carbon_monoxide,
        no: data.current.nitrogen_monoxide,
        no2: data.current.nitrogen_dioxide,
        so2: data.current.sulphur_dioxide,
      },
      hourly: data.hourly
    };
  } catch (error) {
    console.error("Error fetching air quality data:", error);
    return null;
  }
};
