export class FootballServerEventsClient {

  async getEvents(fixtureId: number) {

    const response = await fetch(

      `${process.env.API_FOOTBALL_BASE_URL}/fixtures/events?fixture=${fixtureId}`,

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
        "Erro ao buscar eventos."
      );

    }

    return response.json();

  }

}
