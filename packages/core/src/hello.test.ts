import { describe, expect, test } from "@jest/globals";
import { hello } from "./hello";

describe("hello", () => {
    describe("with Vince param", () => {
        test("returns 'Hello there, Vince!'", () => {
            expect(hello("Vince")).toBe("Hello there, Vince!")
        })
    })
})