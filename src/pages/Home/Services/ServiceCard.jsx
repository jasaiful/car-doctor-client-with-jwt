
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <div className="card-actions items-center text-xl text-orange-500 font-bold">
                    <p>Price: ${price}</p>
                    <Link to={`/bookService/${_id}`}><button><FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;