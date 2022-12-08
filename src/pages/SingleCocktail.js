import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import { fetchSingleCocktails } from '../redux/features/cocktailSlice';
 
 const SingleCocktail = () => {
  const { isLoading, singleCockt} = useSelector((state) => ({ ...state.cocktail }));
  const [modifiedCock, setModifiedCock] = useState([]);
  const dispatch = useDispatch();
  const {id} =useParams()
  useEffect(() => {
      dispatch(fetchSingleCocktails({id}))
  }, [id,dispatch]);
  //console.log(cocktails);

  useEffect(() => {
      if (singleCockt.length >0) {
         const {  
                strDrink : name, 
                strDrinkThumb:image, 
                strAlcoholic: info, 
                strCategory:categorie,
                strInstructions:instruction,
                strGlass: glass,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
              } = singleCockt[0];
             const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
              const newCocktail ={  name,image,info,categorie,instruction,glass,ingredients }
          setModifiedCock(newCocktail) ;   
      } else {
          setModifiedCock(null)
      }
  }, [id,singleCockt]);
 

  if (!modifiedCock) {
      return <h6>No cocktail display</h6>
  }
else{
    const {name,image,info,categorie,instruction,glass,ingredients} = modifiedCock;
    return(
    <>
      {isLoading?(
          <h2>Loading...</h2>
      ):(
        <div className="backButton contain">
        <div className="img">
            <img src={image} alt={name} />
        </div>
        <div className="twoBox">
            <div className="countriesInfoSection">
                <div className="detailInfo">
                    <h1> Cocktail name : {name}</h1>
                    <p>Description : {info}</p>
                    <p> Categorie : {categorie}</p>
                    <p> Instruction  : {instruction}</p>
                    <p> Verre : {glass}</p>
                </div>
                <div className="otherDetails">
                     <h2>Ingredients :</h2>
                    {
                    ingredients && ingredients.map((item,id) =>{
                    return item ? <p key={id}>{item}</p> : null
                    })
                    }
                </div>
            </div>
        <Link to={`/`}>
        <button  className="back">Go back</button>
        </Link>

        </div>
    </div>
      )}
    </>
    )
}
 
 }
 
 export default SingleCocktail
 