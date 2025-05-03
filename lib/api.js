const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const BASE_WEATHER_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const BASE_AIR_QUALITY_URL = "https://air-quality-api.open-meteo.com/v1/air-quality";
const BASE_GEOCODE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export const fetchWeatherData = async (city = "Bekasi") => {
  try {
    const params = new URLSearchParams({
      unitGroup: "metric",
      elements: [
        "datetime", "datetimeEpoch", "address", "resolvedAddress",
        "latitude", "longitude", "tempmax", "tempmin", "temp", "feelslike",
        "humidity", "windspeed", "windspeedmean", "winddir", "uvindex",
        "sunrise", "sunset", "conditions", "description", "icon"
      ].join(","),
      include: "days,hours,current",
      key: WEATHER_API_KEY || "",
      contentType: "json"
    });

    const url = `${BASE_WEATHER_URL}/${encodeURIComponent(city)}?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Gagal mengambil data cuaca: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchWeatherData:", error);
    throw error;
  }
};

export const fetchAirQualityData = async (lat, lon) => {
  try {
    const url = `${BASE_AIR_QUALITY_URL}?latitude=${lat}&longitude=${lon}&current=us_aqi,pm2_5,carbon_monoxide,nitrogen_monoxide,nitrogen_dioxide,sulphur_dioxide&hourly=us_aqi,pm2_5,carbon_monoxide,nitrogen_monoxide,nitrogen_dioxide,sulphur_dioxide&timezone=auto`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Gagal mengambil data kualitas udara: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      current: {
        us_aqi: data.current?.us_aqi ?? null,
        pm2_5: data.current?.pm2_5 ?? null,
        co: data.current?.carbon_monoxide ?? null,
        no: data.current?.nitrogen_monoxide ?? null,
        no2: data.current?.nitrogen_dioxide ?? null,
        so2: data.current?.sulphur_dioxide ?? null,
      },
      hourly: data.hourly ?? {},
    };
  } catch (error) {
    console.error("Error in fetchAirQualityData:", error);
    return null;
  }
};

export const reverseGeocode = async (lat, lon) => {
  try {
    const url = `${BASE_GEOCODE_URL}?latitude=${lat}&longitude=${lon}&localityLanguage=id`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Reverse geocode gagal: ${response.statusText}`);
    }

    const data = await response.json();
    return data.city || data.locality || "Lokasi Tidak Diketahui";
  } catch (error) {
    console.error("Error in reverseGeocode:", error);
    return "Lokasi Tidak Diketahui";
  }
};

export const fetchAllDataByCity = async (city) => {
  try {
    const weatherData = await fetchWeatherData(city);
    const { latitude, longitude } = weatherData;
    const airQuality = await fetchAirQualityData(latitude, longitude);

    return {
      weather: weatherData,
      airQuality,
      displayLocation: weatherData.resolvedAddress || city,
    };
  } catch (error) {
    console.error("Error in fetchAllDataByCity:", error);
    throw error;
  }
};

export const fetchAllDataByCoords = async (lat, lon) => {
  try {
    const cityName = await reverseGeocode(lat, lon); // Dapatkan nama lokasi dari koordinat
    const weatherData = await fetchWeatherData(cityName); // Gunakan nama lokasi, bukan koordinat
    const airQuality = await fetchAirQualityData(lat, lon);

    return {
      weather: weatherData,
      airQuality,
      displayLocation: cityName, // Ini akan menampilkan nama lokasi
    };
  } catch (error) {
    console.error("Error in fetchAllDataByCoords:", error);
    throw error;
  }
};