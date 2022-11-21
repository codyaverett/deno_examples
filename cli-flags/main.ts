import { parse, ParseOptions } from "https://deno.land/std@0.165.0/flags/mod.ts";

const { args } = Deno;

const options: ParseOptions = {
    boolean: ["help", "version"],
    alias: {
        help: "h",
        version: "v",
    },
};

const parsedArgs = parse(args, options);

console.dir(parsedArgs);

// Example output
/**
 * deno run main.ts h asdf asdfj joke --help
 * {
 * _: [ "h", "asdf", "asdfj", "joke" ],
 * help: true,
 * h: true,
 * version: false,
 * v: false
 * }
 */