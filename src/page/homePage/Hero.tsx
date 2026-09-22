
import img from "../../assets/3-heropng.png"




const Hero = () => {
    return (
        <div className="outer-container ">
            <div className="inner-container">
                <div className="flex justify-between items-center"> 
                    <div className=" flex flex-col gap-5">
                        <div className=" bg-[#def0f7ab] h-9 w-70 flex items-center justify-center text-[#269dd1] text-[15px] font-bold rounded-[20px] ">
                            DISCOVER YOUR POTENTIAL
                        </div>
                        <h1 className=" flex flex-col leading-16 text-[#374152] text-[60px] font-bold ">
                            Build Strength|
                           <span className="text-[#0a2463]"> With DevMe</span>
                            
                        </h1>
                        <div className="">
                            <div className=""></div> 
                            <div className=""></div>
                            <div className=""></div>
                            <div className=""></div>
                        </div>


                        <div className=" flex gap-2 justify-center items-center">
                            <button className=" h-15 w-70 bg-[#0a2463] text-[#ffffff] rounded-[9px] font-bold">Explore Our Coaching Packages</button>
                            <button className="h-fit w-fit p-3 bg-[#039dd1] text-[#ffffff] rounded-[9px] font-bold">Book a Consultation</button>
                        </div>

                    </div> 
                        
                        <div className="">
                            <img src={img} alt="" />



                        </div>
                </div>
                



            </div>


            

        </div>
    )
}

export default Hero