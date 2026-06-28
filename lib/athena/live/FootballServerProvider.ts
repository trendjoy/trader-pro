import { FootballServerApiClient } from "./FootballServerApiClient";
import { FixtureMapper } from "./FixtureMapper";
import { Fixture } from "./Fixture";

export class FootballServerProvider {

  private readonly client =
    new FootballServerApiClient();

  private readonly mapper =
    new FixtureMapper();

  async getTodayFixtures(): Promise<Fixture[]> {

    const json =
      await this.client.getLiveFixtures();

    return json.response.map(
      (item: any) =>
        this.mapper.map(item)
    );

  }

}
