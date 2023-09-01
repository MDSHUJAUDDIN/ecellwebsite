import Eventlist from '@/components/event/eventlist'
import { Imperial_Script } from 'next/font/google'
import Header from '@/components/event/header'
import Footer from '@/components/home/footer'
import Workshop from '@/components/event/upcomingworkshops'

export default function event() {
    return (
      <>
        <Header/>
        
        <div className="grid-container-gap-10px">
        <h1 className="text-3Xl container px-6 py-6 mx-auto lg:w-[95%] flex justify-betweenfont-semibold text-gray-800 capitalize lg:text-4xl mt-1 dark:text-white">Previous Events</h1>
        <Eventlist title ="Event" desc="hi this is one of the prestigious event of ecell is going to be super successful event which is going to be super succesful event of the year." date="20th may,2022"/>
       <Eventlist />
       <Eventlist />
       <Eventlist />
       <Eventlist />
       </div>
       <br className='bg-gray'></br>
       <div className="grid-container-gap-10px">
        <h1 className="text-4Xl container px-6 py-6 mx-auto lg:w-[95%] flex justify-between font-semibold text-gray-500 capitalize ml-4  lg:text-4xl m-2 dark:text-white">Upcoming Events</h1>
        <Eventlist title ="Event" desc="hi this is one of the prestigious event of ecell is going to be super successful event which is going to be super succesful event of the year." date="20th may,2022"/>
       <Eventlist />
       <Eventlist />
       <Eventlist />
       <Eventlist />
       </div>
       
      </>
    )
  }