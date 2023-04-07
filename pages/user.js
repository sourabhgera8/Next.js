import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://randomuser.me/api/?results=60");
  const data1 = await res.json();
  const data = data1.results;


  return {
    props: {
      data,
    },
  };
};



const user = ({ data }) => {
  const hw = 200;
  return (
    <>
      <Navbar />
      {data.map((curElem) => {
        return (
          <div key={"curElem.id"} className="ssr-styles">
            <h3>{""+curElem.name.last.charAt(0)}</h3>

             <Image             
            className="image"
              src={curElem.picture.medium }
              width={128} height={128}  
              layout="fixed"          
              alt="about"
              />

            <style jsx>{`
              .image {
                width: 64px;
                
              }
            `}</style>
            <div >
              <h2>{curElem.name.title + ". " + curElem.name.last}</h2>


              <h22>{curElem.login.uuid}</h22>
              <h22>{curElem.login.username}</h22>
            </div>
          </div>
        );
      })}
    </>
  );
};

// const user = () => {

//   //https://randomuser.me/api/?results=60
//   return (
//     <>
//       <Head>
//         <title>About Page </title>
//       </Head>
//       <Navbar />
//       <div style={{ textAlign: "center" }}>
//         <h1 className={styles.mainHeading}>Hello World my about </h1>
//         <Image
//           src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//           width="500"
//           height="300"
//           alt="aboutImage"></Image>
//       </div>
//     </>
//   );
// };

export default user;
