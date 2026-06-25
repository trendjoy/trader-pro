import { LiveMatch } from "../match/live-match";
import { MatchClock } from "./MatchClock";
import { EventGenerator } from "./EventGenerator";
import { TeamSide } from "../types/team-side";
import { MatchEvent } from "../models/match-event";

export class MatchSimulator {

    private readonly clock = new MatchClock();

    private readonly generator = new EventGenerator();

    private match = new LiveMatch();

    start() {

        this.clock.start();

    }

    stop() {

        this.clock.stop();

    }

    reset() {

        this.clock.reset();

        this.match = new LiveMatch();

    }

    tick() {

        this.clock.tick();

        const event = this.generator.generate(

            this.clock.getMinute(),

            this.clock.getSecond()

        );

        if (!event) {

            return;

        }

        this.addEvent(event);

    }

    private addEvent(event: MatchEvent) {

        if (event.team === TeamSide.HOME) {

            this.match.addHomeEvent(event);

            return;

        }

        this.match.addAwayEvent(event);

    }

    getMatch() {

        return this.match;

    }

    getClock() {

        return this.clock.getTime();

    }

}