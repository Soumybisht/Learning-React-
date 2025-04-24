import { sum } from "../Sum";


test("sum of two positive numbers",()=>{
    expect(sum(2,3)).toBe(5);
});