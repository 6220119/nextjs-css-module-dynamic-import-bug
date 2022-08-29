import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/button";

export const Contact: FC = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
      </Head>

      <main>
        <h1>Contact Page</h1>

        <div>
          <Button>Hi, Im the base button</Button>
        </div>

        <Link href="/">Go to Home page</Link>
      </main>
    </div>
  );
};
