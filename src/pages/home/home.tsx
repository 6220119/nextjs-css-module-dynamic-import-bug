import { FC } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/button";

const LazyLoadBlueButton = dynamic(async () => {
  const module_ = await import("../../components/blue-button");
  return module_.BlueButton;
});

const LazyLoadRedButton = dynamic(async () => {
  const module_ = await import("../../components/red-button");
  return module_.RedButton;
});

export const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1>Home Page</h1>

        <div>
          <Button>Im the base button</Button>
        </div>

        <div>
          This should be blue <LazyLoadBlueButton />
        </div>

        <div>
          This should be red <LazyLoadRedButton />
        </div>

        <Link href="/contact">Go to Contact page</Link>
      </main>
    </div>
  );
};
