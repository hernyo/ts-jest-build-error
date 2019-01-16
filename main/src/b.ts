import { callA, anotherCallA } from "localLib";

export function checkB(s: string) : string | null {
    const a = callA(anotherCallA(s));
    return a;
}
