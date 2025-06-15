"use client";
import GridBackground from "./grid/GridBackground";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Projects from "./components/work/page";

export default function Home() {
  return (
    <>
      <GridBackground>
        <Header />
        <Projects/>
        <Footer />
      </GridBackground>
    </>
  );
}
