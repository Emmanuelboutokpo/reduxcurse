import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCocktails } from '../redux/features/cocktailSlice';
 

const CocktailList = () => {
    const { isLoading, cocktails } = useSelector((state) => ({ ...state.cocktail }));
    const [modifiedCock, setModifiedCock] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails())
    }, [dispatch]);

    useEffect(() => {
        if (cocktails) {
            const newCocktail = cocktails.map((item) => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                }
            })
            setModifiedCock(newCocktail)
        } else {
            setModifiedCock([])
        }
    }, [cocktails]);

    if (isLoading) {
        return <h6>Loading...</h6>
    }
    console.log(cocktails);

    return (
      <div className="container">
         { (cocktails ===null) && <span className='notfound'> Cocktail not found &#128557;</span> }
   

        <section className="countries_detail">
            {
                modifiedCock.map((item) => {
                    const { id, name, image, info, glass } = item;
                    return (
                        <div key={id} className="countrie">
                            <div className="countrie_img">
                                <img src={image} alt={name} />
                            </div>
                            <div className="contrieInfo">
                                <h2 className="name">
                                    {name}
                                </h2>
                                <p><b>Description: </b>{info}</p>
                                <p><b>Glass: </b>{glass}</p>
                                <Link to={`/single/${id}`}>
                                     <button className="btn"> info</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    </div>
    )
}

export default CocktailList
