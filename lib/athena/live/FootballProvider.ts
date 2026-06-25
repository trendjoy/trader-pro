import { FootballApiClient } from "./FootballApiClient";
import { FixtureMapper } from "./FixtureMapper";
import { Fixture } from "./Fixture";

export class FootballProvider {

  private readonly client = new FootballApiClient();

  private readonly mapper = new FixtureMapper();

  async getTodayFixtures(): Promise<Fixture[]> {

    const json = await this.client.getLiveFixtures();

    console.log("RAW API:", json.response);

    const fixtures = json.response.map((item: any) =>
      this.mapper.map(item)
    );

    console.log("MAPPED:", fixtures);

    return fixtures;

  }

}