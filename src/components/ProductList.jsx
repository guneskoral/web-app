import { items } from "../data";
import Product from "./Product";

export default function ProductList() {
    
    return(
    
    <>
      
      {
  
          items.length > 0 ? (  
            <div className='row row-cols-2 row-col-md-2 row-cols-xl-3 g-4' id='product-list'>
            {
          items.map((item, index) => (
            <div className='col' key={index}>
            <Product  productObj = {item} />
            </div>
          ))
        }
  
        </div>
        ):(
  
          <p>şu anda satışta olan ürünümüz yoktur</p>
        )
        
      }
    </>
    ); 
  }