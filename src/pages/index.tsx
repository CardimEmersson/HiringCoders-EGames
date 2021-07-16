import Head from "next/head";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { ModalBuy } from "components/ModalBuy";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-game - gama academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <ModalBuy />
    </>
  );
}
