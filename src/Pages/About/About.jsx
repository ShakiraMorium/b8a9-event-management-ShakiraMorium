import image from '../../assets/aboutus.jpg'

const About = () => {
    return (

        <div>
            <h1 className="text-center font-bold text-5xl mt-5 text-red-200 ">About Us</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-center text-red-200">WHO WE ARE</h1>
                        <p className="py-6 text-center">Bangladesh, with Dhaka at the heart of it, is a country that has become a wonder for quite a few people with its rapid economic growth in the last 10 years or so. Companies, organizations and various businesses have become the driving force for the economic development of this country.</p>
                        
                    </div>
                </div>
            </div>

        </div>
    )
};
export default About;