export class StopWatch {
    constructor() {
        this.seconds = 0;
        this.intervalId = null;
    }
    start() {
        if (this.intervalId !== null)
            return;
        this.intervalId = window.setInterval(() => {
            this.seconds++;
        }, 1000);
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    reset() {
        stop();
        this.seconds = 0;
    }
}
//# sourceMappingURL=StopWatch.js.map