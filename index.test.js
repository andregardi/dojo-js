import { getPrice } from "./index";
import { lakewood } from "./hotels";

it('should get prices right for multiples weekdays', () => {
    const price = getPrice(lakewood , 2,0);
    expect(price).toBe(200);
});