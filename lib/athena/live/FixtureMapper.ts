import { Fixture } from "./Fixture";

export class FixtureMapper {

  map(api: any): Fixture {

    return {

      id: api.fixture.id,

      date: api.fixture.date,

      timestamp: api.fixture.timestamp,

      home: {

        id: api.teams.home.id,

        name: api.teams.home.name,

        logo: api.teams.home.logo,

      },

      away: {

        id: api.teams.away.id,

        name: api.teams.away.name,

        logo: api.teams.away.logo,

      },

      score: {

        home: api.goals.home ?? 0,

        away: api.goals.away ?? 0,

      },

      league: {

        id: api.league.id,

        name: api.league.name,

        country: api.league.country,

        round: api.league.round,

      },

      venue: {

        id: api.fixture.venue.id,

        name: api.fixture.venue.name,

        city: api.fixture.venue.city,

      },

      status: {

        short: api.fixture.status.short,

        long: api.fixture.status.long,

        minute: api.fixture.status.elapsed ?? 0,

      },

    };

  }

}