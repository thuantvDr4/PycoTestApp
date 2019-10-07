// import AxiosBase from "./AxiosBaseConfig";
import axios from 'axios';

const URL =
  'http://api.openweathermap.org/data/2.5/find?units=metric&APPID=42581cab190df96d46e6b3709a7d5a4c&q=saigon';

export const GetTemps = cityName => {
  return axios
    .get(URL)
    .then(res => res.json())
    .then(resJSON => resJSON.list[0].main.temp)
    .catch(function(error) {
      console.log(error);
    });
};

const user_uri = 'https://randomuser.me/api/0.4/?randomapi';
export const GetUserData = () => {
  return axios
    .get(user_uri)
    .then(res => res.json())
    .then(resJSON => resJSON.result)
    .catch(function(error) {
      console.log(error);
    });
};

// fetch(URL)
//     .then(res => res.json())
//     .then(resJSON => resJSON.list[0].main.temp);
