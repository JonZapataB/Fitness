export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "3c593d61d0msh9bbea8efb7e9f2fp132027jsnd083be310c12",
  },
};

export const fetchData = async (url, options) => {
  console.log(options);
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
