export class Sample {
    #text: string
    constructor() {
        this.#text = "AAA"
    }

    text(): string {
        return this.#text;
    }
}