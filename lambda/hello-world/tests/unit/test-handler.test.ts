import { describe, expect, it } from "@jest/globals";
import { lambdaHandler } from "../../app";

describe("Unit test for app handler", () => {
	it("returns true", async () => {
		const result = await lambdaHandler();

		expect(result).toBe(true);
	});
});
