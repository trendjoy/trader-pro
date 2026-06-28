export class FootballServerStatisticsClient {

  async getStatistics(fixtureId: number) {

    const response = await fetch(

      `${process.env.API_FOOTBALL_BASE_URL}/fixtures/statistics?fixture=${fixtureId}`,

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
        "Erro ao carregar estatísticas."
      );

    }

    return response.json();

  }

}
