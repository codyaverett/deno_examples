import {
    assert, assertEquals, assertNotEquals, assertThrows, assertRejects,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("successful asserts", () => {
    assert(true, "true is truthy");
    assert(false === false, "false is falsy, but false is false");
});

// Deno.test("failing asserts", () => {
//     assert(false, "This will fail");
// });

// Deno.test("failing asserts with custom message", () => {
//     assert(false, "This will fail with a custom message");
// });

// Deno.test("failing asserts with custom message and error", () => {
//     assert(false, new Error("This will fail with a custom error").stack);
// });

Deno.test("assert Equals", () => {
    assertEquals("hello", "hello");
    assertEquals({ hello: "world" }, { hello: "world" });
});

Deno.test("assertNotEquals", () => {
    assertNotEquals("hello", "world");
    assertNotEquals({ hello: "world" }, { hello: "deno" });
});

Deno.test("assertThrows", () => {
    assertThrows(() => {
        throw new Error("Throw me");
    });
});

Deno.test("assertThrows with custom error", () => {
    assertThrows(
        () => {
            throw new Error("Throw me");
        },
        Error,
        "Throw me"
    );
});


Deno.test("assertThrows with async function", async () => {
    await assertRejects(async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Hello Hell");
                resolve("never");
            }, 1000);
        });
    });
});
