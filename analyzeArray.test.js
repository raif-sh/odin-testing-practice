import { analyzeArray } from "./analyzeArray";

test("returns analyzed object with 4 properties", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})