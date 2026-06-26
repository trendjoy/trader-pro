import { MatchStatistics } from "./MatchStatistics";

export class FootballStatisticsMapper {

  map(json: any): MatchStatistics {

    const home = json.response[0];

    const away = json.response[1];

    const value = (

      team: any,

      type: string

    ) => {

      const item = team.statistics.find(

        (s: any) => s.type === type

      );

      return item?.value;

    };

    return {

      homePossession:

        parseInt(

          String(

            value(home, "Ball Possession") ?? "0"

          ).replace("%", "")

        ),

      awayPossession:

        parseInt(

          String(

            value(away, "Ball Possession") ?? "0"

          ).replace("%", "")

        ),

      homeShots:

        Number(

          value(home, "Total Shots") ?? 0

        ),

      awayShots:

        Number(

          value(away, "Total Shots") ?? 0

        ),

      homeShotsOnTarget:

        Number(

          value(home, "Shots on Goal") ?? 0

        ),

      awayShotsOnTarget:

        Number(

          value(away, "Shots on Goal") ?? 0

        ),

      homeCorners:

        Number(

          value(home, "Corner Kicks") ?? 0

        ),

      awayCorners:

        Number(

          value(away, "Corner Kicks") ?? 0

        ),

      homeYellowCards:

        Number(

          value(home, "Yellow Cards") ?? 0

        ),

      awayYellowCards:

        Number(

          value(away, "Yellow Cards") ?? 0

        ),

    };

  }

}