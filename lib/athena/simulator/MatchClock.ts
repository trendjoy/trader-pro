export class MatchClock {

    private minute = 0;

    private second = 0;

    private running = false;

    start() {
        this.running = true;
    }

    stop() {
        this.running = false;
    }

    reset() {
        this.minute = 0;
        this.second = 0;
        this.running = false;
    }

    tick() {

        if (!this.running) {
            return;
        }

        this.second++;

        if (this.second >= 60) {

            this.second = 0;

            this.minute++;

        }

    }

    getMinute() {
        return this.minute;
    }

    getSecond() {
        return this.second;
    }

    isRunning() {
        return this.running;
    }

    getTime() {

        return {

            minute: this.minute,

            second: this.second

        };

    }

}