import moment from "moment"
import Image from "next/image"
import OpacityIcon from '@mui/icons-material/Opacity';

export default function TodayWeather({ data }: any){
   const currentTimeStamp = moment().unix()
   const tomorrowTimeStamp = moment().add(1, 'days').unix()
   const filterData = data.list.filter((ele: any) => {
      if(ele.dt >= currentTimeStamp && ele.dt <= tomorrowTimeStamp){
         return ele
      }
   })

   return (
      <div className="flex rounded-2xl w-full h-[200px] pl-8 pt-4 text-sm overflow-x-auto bg-gray-400 bg-cover scrollbarw md:justify-between">
         {filterData.slice(1).map((ele: any) => {
            return (
               <div key={ele.dt_txt} className="text-white pr-8 flex flex-col justify-around items-center">
                  <p>{moment(ele.dt * 1000).format("HH:MM")}</p>
                  <Image src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png`} alt="weatherIcon" width={40} height={40}/>
                  <p>{ele.main.temp.toFixed(0)}&deg;</p>
                  <div>
                     <OpacityIcon></OpacityIcon>
                     <p>{100 - ele.main.humidity}%</p>
                  </div>
               </div>
            )
         })}
      </div>
   )
}