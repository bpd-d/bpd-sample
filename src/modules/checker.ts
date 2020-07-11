export interface IChecker {
    check(): boolean;
}

export class CheckerSimple implements IChecker {
    constructor() {

    }

    check() {
        return true;
    }
}

export class CheckerAdvanced implements IChecker {
    #val: boolean;
    constructor(val: boolean) {
        this.#val = val;
    }

    check() {
        return this.#val;
    }
}

export class CheckerFactory {
    public static get(val?: boolean) {
        return val ? new CheckerAdvanced(val) : new CheckerSimple();
    }
}