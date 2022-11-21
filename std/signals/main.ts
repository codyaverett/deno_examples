import { signal } from "https://deno.land/std@0.165.0/signal/mod.ts";

const sig = signal("SIGINT", "SIGUSR1");
setTimeout(() => { }, 5000); // wait for 5 seconds

for await (const _ of sig) {
    console.log("Got SIGINT or SIGUSR1");
}

// At some other point in your code when finished listening for signals
sig.dispose();
