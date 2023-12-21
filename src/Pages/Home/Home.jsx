import About from "../About/About";

import Navbar from "../Shared/Navbar/Navbar";
import background from '../../assets/im2.jpg';
import { Link, useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";




const Home = () => {
    const galleries = useLoaderData();
    console.log(galleries)
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="hero min-h-screen" style={{backgroundImage: `url(${background})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-red-300">It's Time To Enjoy<br/> 
                        Your Party</h1>
                        <p className="mb-5">With a perfect blend of experience and passion, Dhaka Event Planner is an event management company in Bangladesh. We've emerged as a company with ideas to turn ...</p>
                        <Link to="/about">
                        <button className="btn text-red-200 bg-gray-500">More Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <About></About>
            {/* Gallery images */}
            
            <div>
            <h1 className="text-5xl font-bold text-center text-red-200 mt-5">Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                
                {
                    galleries.map(gallery => <Gallery
                    key={gallery.id}
                    galleries={gallery}
                    ></Gallery>)
                }

            </div>
            </div>


        </div>
    )
};
export default Home;