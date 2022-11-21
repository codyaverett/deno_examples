import {
    assert, assertEquals, assertNotEquals, assertThrows, assertRejects, assertStrictEquals,
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


Deno.test("assertRejects within async function or promise", async () => {
    await assertRejects(async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Hello Hell");
                resolve("never");
            }, 10);
        });
    });
});

Deno.test("assertRejects with async function and custom error", async () => {
    await assertRejects(
        async () => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error("Hello Hell"));
                    resolve("never");
                }, 10);
            });
        },
        Error,
        "Hello Hell"
    );
});

Deno.test("assert strict equals", () => {
    assertStrictEquals("hello", "hello");
});

// Deno.test("assert strict not equals", () => {
//     assertStrictEquals("hello", "world");
// });

Deno.test("assert string contains", () => {
    assert("hello world".includes("world"));
});

Deno.test("assert string not contains", () => {
    assert(!"hello world".includes("deno"));
});

Deno.test("assert string starts with", () => {
    assert("hello world".startsWith("hello"));
});

Deno.test("assert string not starts with", () => {
    assert(!"hello world".startsWith("world"));
});

Deno.test("assert string ends with", () => {
    assert("hello world".endsWith("world"));
});

Deno.test("assert Array contains", () => {
    assert(["hello", "world"].includes("world"));
});

Deno.test("assert Array not contains", () => {
    assert(!["hello", "world"].includes("deno"));
});

// Regular expressions
Deno.test("assert match (regular expressions)", () => {
    assert("hello world".match(/world/))
});

// Deno.test("assert file does not exist", async () => {
//     const file = await Deno.open("test.txt", { create: true });
//     file.close();
//     assert(!(await Deno.stat("test.txt")).isFile);
// });

