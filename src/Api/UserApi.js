// import AxiosBase from "./AxiosBaseConfig";

const URL =
  'http://api.openweathermap.org/data/2.5/find?units=metric&APPID=42581cab190df96d46e6b3709a7d5a4c&q=saigon';

export const GetUserData = cityName => {
  // return AxiosBase.getInstance().get(
  //   'https://jsonplaceholder.typicode.com/users',
  // );
  return fetch(URL)
    .then(res => res.json())
    .then(resJSON => resJSON.list[0].main.temp);
};
