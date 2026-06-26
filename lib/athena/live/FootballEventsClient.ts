export class FootballEventsClient {

  async getEvents(fixtureId: number) {

    const response = await fetch(

      `/api/live/events?fixture=${fixtureId}`,

      {

        cache: "no-store",

      }

    );

    if (!response.ok) {

      throw new Error("Erro ao buscar eventos.");

    }

    return response.json();

  }

}