
import {

  get_byId

} from "../../JS/Action/ActionProduct";
import { useDispatch, useSelector } from "react-redux";
import "../Product/ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  
  return (

    <div className="card"> 
<div className="sf"><img className="card-p" src={product.photo} /></div> 
    <div className="card-countent">
    <h5>{product.name}</h5>
     
        <h6> {product.price} TND</h6>
 

        <Link className="LL"  to={`/Details/${product._id}`}>
          <button  className="dbt" onClick={() => dispatch(get_byId(product._id))}>
          Details
          </button>
        </Link>
       
    </div>
</div>
  );
}

export default ProductCard;
