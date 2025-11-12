import './SecondSection.css'
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

import Skeleton from '@mui/joy/Skeleton';
import MovieSection from './MovieSection';
import SideBarControl from './SideBarControl';




export default function SecondSection() {
   const{isLoading, popular} = useContext(MovieContext);

   // const showVideo = () =>{
      console.log(popular);

   //    popular.map((item, index)=>{
   //       console.log(item, index);
   //    })
   // }
   
  return (
      <div className='second-section '>

         <div className='combine-container'>
            <div className='first-section'></div>
         </div>

         <div className="content-wrapper font-netflix text-headline1 sm:text-headline1 md:text-headline1 lg:text-title2 font-normal">
            <h5 className='font-bold'>Trending Now</h5>

            <div className = 'flex font-netflix p-0 m-[20px] gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px]'>
               
               {popular.slice(0,4).map((item, index)=>
                  <div key={index}> 
                     <MovieSection contents={item} numbers={index}/>
                  </div> 
               )} 
            <SideBarControl />

            </div>
         </div>
  
      </div>
  )
}