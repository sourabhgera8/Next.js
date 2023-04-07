import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Web assignment Project" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js, react-query" />
        <meta name="author" content="Keshav Gera Next.js" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
    </>
  );
};

export default index;
