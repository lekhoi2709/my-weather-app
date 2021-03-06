import { GetServerSideProps } from "next"
import Head from "next/head"
import cities from "../lib/citieslist.json"
import CurrentStatus from "../components/CurrentStatus"
import TodayWeather from "../components/TodayWeather"

export const getServerSideProps: GetServerSideProps = async (context) => {
   const city = getCity(context.query.city)
   
   if(!city){
     return {
        notFound: true
     } 
   }

   const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=${process.env.API_KEY}&units=metric`)
   const data = await res.json()

   return {
      props: {
         city: city,
         data: data
      }
   }
}

const getCity = (param: any) => {
   const splitCity = param.split("-")
   const id = splitCity[splitCity.length - 1]
   
   const city = cities.find(city => city.id == id)
   if (city){
      return city
   } else return null
}

export default function City({city, data}: any){
   return(
      <div>
         <Head>
            <title>{city.name}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="bg-gradient-to-t from-sky-300 via-sky-300 to-sky-400 bg-cover h-screen w-full px-4 pt-6 flex flex-col gap-y-32 md:gap-10 overflow-y-auto scrollbarw">
            <div>
               <CurrentStatus data={data} city={city}/>
            </div>
            <div className="flex justify-center">
               <TodayWeather data={data}/>
            </div>
         </main>
      </div>
   )
}