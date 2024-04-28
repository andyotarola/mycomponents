import { describe, expect, it } from "vitest"

const sum = (a: number, b: number) => {
	return a + b
}

describe("Sum", () => {
	it("should be a function", () => {
		expect(typeof sum).toBe("function")
	})

	it("should return 9 if the numbers are 4 and 5", () => {
		const result = sum(4, 5)

		expect(result).toBe(9)
	})
})
