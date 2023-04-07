import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
{
  /* <head>
  <style>

  </style>
</head>; */
}
const Contact = () => {
  return (
    <>
      <Navbar />
      {/* <h1 style={{ color: "green" }}>Hello World my contact </h1> */}
      <h1>Hello World my contact </h1>
      <p className="intro"> I am keshav Gera </p>

     
      <div className="ssr-styles ssr-styles-inside">
        <h3>{""}</h3>
        <h2>{"Hello"}</h2>
        <p>{"I am fine"}</p>
      </div>
    
      <style jsx>
        {`
          h1 {
            color: pink;
          }

          .intro {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
