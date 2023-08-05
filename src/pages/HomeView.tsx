import { Header, HeroSection } from "../components";

const HomeView = () => {
  return (
    <div style={{ maxWidth: "1700px", margin: "0 auto", width: "90%" }}>
      <Header type="home" />
      <HeroSection />
    </div>
  );
};

export default HomeView;
