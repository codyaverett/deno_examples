import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-9 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-64 h-64"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to the `fresh` demo. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
