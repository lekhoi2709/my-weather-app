import Image from "next/image";
import { Menu } from '@mui/icons-material'
import moment from 'moment'
import Link from "next/link"

export default function CurrentStatus({data, city}: any){
   const getClosestData = () => {
      const currentTimeStamp = moment()
      const closestTimes = data.list.filter((ele: any) => moment(ele.dt*1000) > currentTimeStamp)
      const closestData = data.list.find((ele: any) => ele.dt = closestTimes[0].dt)
      return closestData
   }
   return (
      <div className="w-full h-2/6">
         <Link href="/"><Menu className="cursor-pointer text-white absolute"></Menu></Link>
         <div className="text-white h-full pl-6 w-full flex justify-between pt-16 md:pl-24">
            <div className="flex flex-col w-3/5 h-3/5">
               <h1 className="text-6xl">{getClosestData().main.temp.toFixed(0)}&deg;</h1>
               <h1 className="text-xl my-2">{city.name} ({city.country})</h1>
               <span>{moment(getClosestData().dt * 1000).format("dd, LT")}</span>   
            </div>
            <div className="flex flex-col items-center w-2/5 md:w-1/5">
               <Image src={`http://openweathermap.org/img/wn/${getClosestData().weather[0].icon}@2x.png`} 
               alt="WeatherIcon" width={100} height={100}/>
               <p>{getClosestData().weather[0].description}</p>
            </div>
         </div>
      </div>
   )
}