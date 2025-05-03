import {
  FaSnowflake,
  FaCloudRain,
  FaSmog,
  FaWind,
  FaCloud,
  FaCloudSun,
  FaMoon,
  FaSun,
  FaRegMoon
} from "react-icons/fa";

const weatherIcons = {
  snow: <FaSnowflake />,
  rain: <FaCloudRain />,
  fog: <FaSmog />,
  wind: <FaWind />,
  cloudy: <FaCloud />,
  "partly-cloudy-day": <FaCloudSun />,
  "partly-cloudy-night": <FaRegMoon />,
  "clear-day": <FaSun />,
  "clear-night": <FaMoon />,
};

export default weatherIcons;
