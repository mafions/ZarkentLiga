export const fetchFixtures = async () => {
  const apiKey = "953c5247bfmsh834e1258f271226p132277jsn7d296c0cfc3e";
  const apiUrl = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching fixtures:", error);
    return null;
  }
};
