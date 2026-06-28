export class FootballServerFixtureClient {

  async getFixture(
    fixtureId:number
  ){

    const response = await fetch(

      `${process.env.API_FOOTBALL_BASE_URL}/fixtures?id=${fixtureId}`,

      {

        headers:{

          "x-apisports-key":
            process.env.API_FOOTBALL_KEY!,

        },

        cache:"no-store",

      }

    );

    const json =
      await response.json();

    return json.response?.[0] ?? null;

  }

}