export class FootballStatisticsClient {

  async getStatistics(fixtureId: number) {

    const response = await fetch(

      `/api/live/statistics?fixture=${fixtureId}`,

      {

        cache: "no-store"

      }

    );

    if (!response.ok) {

      throw new Error("Erro ao buscar estatísticas.");

    }

    return response.json();

  }

}