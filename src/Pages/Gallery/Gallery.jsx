import { FcRatings } from "react-icons/fc";

const Gallery = ({ galleries }) => {
    const { name, image, details, rating } = galleries;
    return (
       
          
            <div className="card  bg-base-100 shadow-xl ">
                
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="flex gap-2 text-xl">
                <FcRatings />
                <p className="">{rating}</p>
                </div>
                
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
       
    )
};
export default Gallery;