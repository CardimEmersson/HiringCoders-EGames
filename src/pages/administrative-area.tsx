import Head from "next/head";
import { Header } from "components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalRegisterProducts } from "components/ModalRegisterProducts";
import { MainAdministrative } from "components/MainAdministrative";

export default function AdministrativeArea() {
  return (
    <>
      <Head>
        <title>E-game Administrativo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <MainAdministrative />
      <ModalRegisterProducts />
      <ToastContainer />
    </>
  );
}
