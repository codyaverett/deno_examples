import {
    assert, assertEquals, assertNotEquals, assertThrows, assertRejects, assertStrictEquals, unreachable, unimplemented, fail, assertObjectMatch, assertNotInstanceOf, assertNotMatch, assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts";

// Reference: https://deno.land/std/testing/asserts.ts

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

Deno.test("assertEquals", () => {
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

Deno.test("assertStrictEquals", () => {
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

Deno.test("assert Array includes", () => {
    assertArrayIncludes([1, 2, 3], [2]);
});

Deno.test("assert Array not contains", () => {
    assert(![1, 2, 3].includes(4));
});

// Regular expressions
Deno.test("assert match (regular expressions)", () => {
    assert("hello world".match(/world/))
});

Deno.test("assertNotMatch", () => {
    assertNotMatch("hello world", /deno/);
});

// Deno.test("assert file does not exist", async () => {
//     const file = await Deno.open("test.txt", { create: true });
//     file.close();
//     assert(!(await Deno.stat("test.txt")).isFile);
// });

Deno.test("unreachable code", () => {

    function foo(x: number): number {
        if (x === 1) {
            return 1;
        } else if (x === 2) {
            return 2;
        } else {
            return unreachable();
        }
    }

    foo(1);
    foo(2);
    // foo(3); // This will fail
});

Deno.test("unimplemented code is not ran", () => {

    function foo(x: number): number {
        if (x === 1) {
            return 1;
        } else if (x === 2) {
            return 2;
        } else {
            return unimplemented("This else block is not implemented and should be used");
        }
    }

    foo(1);
    foo(2);
    // foo(3); // This will trigger a failure
});

// Deno.test("force fail", () => {
//     fail("This will fail");
// });

// Object match allows objects of different shapes to be compared
// Whereas assertEquals will throw a ts error if the objects are not identical
Deno.test("assertObjectMatch objects match", () => {
    const obj1 = {
        a: 1,
        b: 2,
        c: 3,
    };
    const obj2 = {
        a: 1,
        b: 2,
        c: 3,
        // d: 5, // This will trigger a failure
    };
    assertObjectMatch(obj1, obj2);
});

Deno.test("assertNotInstanceOf not an instance of", () => {
    class Foo {
        foo = "bar";
    }
    const foo = new Foo();
    assertNotInstanceOf(foo, Array);
});

Deno.test("assertInstanceOf an instance of", () => {
    class Foo {
        foo = "bar";
    }

    class Bar extends Foo {
        bar = "foo";
    }

    const foo = new Foo();
    assert(foo instanceof Foo);

    const bar = new Bar();
    assert(bar instanceof Foo);

});
