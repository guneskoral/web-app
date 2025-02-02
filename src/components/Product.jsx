export default function Product({productObj}){
  
    if(!productObj.isActive) return null;
  
    return(
     <div className='card shadow-sm'>
          <img className='card-image-top p-2 p-md-3 border-bottom' src={ "/img/" + productObj.image} alt="" />
          <div className='card-body'>
            <h2 className='card-title'>{productObj.title}</h2>
            <p className='card-text'>{productObj.description}</p>
            <span className='badge text-bg-success' >{productObj.price}tl </span>
          </div>
     </div>
     
    );                                         
  }