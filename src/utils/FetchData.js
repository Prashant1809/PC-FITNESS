export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "0370c8dd0fmshda0deef04c99d45p12ebe8jsne754cbfb6af1",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b42be72cf9msh3445471624735f5p18377bjsna86bb7745b67",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};
