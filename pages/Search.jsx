import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

export default function Search({searchResults}) {

  const route = useRouter();
  // ES6 Destructuring
  const { location, startDate, endDate, numberOfGuests } = route.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className='h-screen' >
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
        <main className='flex flex-col xl:flex-row' >
          <section className='flex-grow pt-14 px-6' >
            <p className='text-xs' >300+ Stays - {range} - for {numberOfGuests} number of guests</p>
            <h1 className='text-3xl font-semibold
            mt-2 mb-6' >Stays in {location}</h1>
            <div className='hidden lg:inline-flex mb-5 space-x-3
            text-gray-800 whitespace-nowrap' >
              <p className='button' >Cancelation Flexibility</p>
              <p className='button' >Type of Place</p>
              <p className='button' >Price</p>
              <p className='button' >Rooms and Beds</p>
              <p className='button' >More filters</p>
            </div>
            <div className='flex flex-col' >
              {searchResults.map(item => (
                <InfoCard
                  key={item.img}
                  img={item.img}
                  location={item.location}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  star={item.star}
                  total={item.total}
                />
              ))}
            </div>
          </section>
          <section className='xl:min-w-[600px] xl:h-[100em] w-[100%] h-[600px]' >
            <Map searchResults={searchResults} />
          </section>
        </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
  return {
    props: {
      searchResults,
    }
  }
}
