import { Maybe } from "./Maybe";

export class Option<T> {
    value:Maybe<T>
    constructor(v:Maybe<T>=undefined) {
        this.value = v ?? undefined; //null -> undefined
    }
    bind<Next>(f:(v:T) => Next):Option<Next> {
        return  new Option<Next>(
            this.value ? f(this.value): undefined
        )
    }
    set(v:Maybe<T>) {
        this.value = v
    }
    get() {
        return this.value
    }
}

export function option<T>(v:Maybe<T>) {
    return new Option(v)
}