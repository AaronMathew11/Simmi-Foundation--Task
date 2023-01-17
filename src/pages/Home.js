import "../css/Home.css";
import Banner from "../components/Banner";
import data from "../data.json";
import Header from "../components/Header";
import CardRow from "../components/CardRow";

function Home() {
  const cards = data.card;

  console.log(cards);

  return (
    <div className='home'>
      {/* header */}
      <Header />
      <div className='text-3xl w-full px-8 pt-8'>Some of my hobbies :</div>
      {/* Banner */}
      <Banner />

      <div className='text-3xl w-full px-8'>Some stuff I did :</div>

      {/* cards */}
      <CardRow />
    </div>
  );
}

export default Home;
