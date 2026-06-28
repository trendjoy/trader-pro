export class FootballServerApiClient {

  async getLiveFixtures() {

    console.log("API_FOOTBALL_BASE_URL =", process.env.API_FOOTBALL_BASE_URL);
    console.log("API_FOOTBALL_KEY =", !!process.env.API_FOOTBALL_KEY);


    const response = await fetch(

      `${process.env.API_FOOTBALL_BASE_URL}/fixtures?live=all`,

      {

        headers: {

          "x-apisports-key":
            process.env.API_FOOTBALL_KEY!,

        },

        cache: "no-store",

      }

    );

    if (!response.ok) {

      throw new Error(
        "Erro ao consultar API Football"
      );

    }

    return response.json();

  }

}
