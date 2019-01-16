import { checkB } from "../b";

describe("Module B", () => {
    it("should return the same string", () => {

        expect(checkB("mama")).toEqual("mama");
    });
});