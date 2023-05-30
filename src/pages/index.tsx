import { Inter } from "next/font/google";
import Page from "@/components/Layout/Page";
import { FC, memo } from "react";
import { homePageMeta } from "@/data/data";
import Header from "@/components/Sections/Header";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Resume from "@/components/Sections/Resume";
import Contact from "@/components/Sections/Contact";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Contact />
    </Page>
  );
});

export default Home;
