import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

interface CardData {
  img: string;
  title: string;
}

export default async function Home() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const data: ExploreData[] = await res.json();

  const res2 = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardData: CardData[] = await res2.json();
  return (
    <div className="">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm-px-16">
        <section className="mt-10">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((item) => (
              <div className="">
                <SmallCard
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardData.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}
