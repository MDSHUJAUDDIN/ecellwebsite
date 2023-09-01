import Image from "next/image";
import React from "react";
import elwt from "../../public/assets/elwt.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import PropTypes from 'prop-types'


const Eventlist = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; desc: string | number | boolean | React.ReactElement< string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; image:string|undefined;date:string|number|undefined}) => {
  return (
    <>
    
    <div className="bg-black dark:bg-black-900 flex justify-center relative mt-[2px] pt-[2px] pb-[2px] font-family=Kanit">
    <div className="container px-6 py-6 mx-auto lg:w-[95%] flex justify-between">

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex align-items">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <div className="text-xl font-semibold text-gray-400 hover:underline dark:text-gray ">
                        {props.title}
                    </div>
                    <p className="mb-4 ">{props.desc}</p>
                    <div className="mb-2 flex justify-left">
                    <button className="inline-flex header text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
                    </div>
                    
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: {props.date}</span>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

Eventlist.propTypes={
  title : PropTypes.string,
  desc : PropTypes.string
}
Eventlist.defaultProps={
  title:"Coming soon ..",
  desc:"something intresting is being cooked",
  image:"https://picsum.photos/200/300/?blur=2",
  date:"32nd feb,2024"
}

export default Eventlist
