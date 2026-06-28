export class FootballApiClient {

  async getLiveFixtures() {

    const response = await fetch(
      "/api/live/fixtures"
    );

    if (!response.ok) {

      throw new Error(
        "Erro ao consultar API Football"
      );

    }

    return response.json();

  }

}
