import Image from 'next/image'
import Link from 'next/link'
import Secondpage from './secondpage/page';


async function getData() {
  const res = await fetch('https://api.corona-zahlen.org/germany');
  return res.json();
}


export default async function Home() {
  const data  = getData();
  const [covidData]= await Promise.all([data])
  return (
    <>
    <div className='margin-auto'>
    <p className='text-5xl pt-60 pl-60'> Number of cases of infection СOVID-19 for all time in Germany: <b>{covidData.cases}</b></p>
    <p className='text-5xl pt-20 pl-60'> Deaths: <b>{covidData.deaths}</b></p>
    <Link href={'/secondpage'}><button><p className='text-5xl pt-20 pl-60'>Go to the next page</p></button> </Link>
    </div>
    </>
  )
}


