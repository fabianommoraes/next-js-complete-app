import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/fabiano.jpeg"
          alt="An image showing Fabiano"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fabiano</h1>
      <p>This is a complete fullstack app using Next.js!</p>
    </section>
  );
}

export default Hero;
