import React, { useState, useRef } from 'react'
import './Filter.css'
import { FaStar } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"

function Filter(props) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [propsMovies] = useState(props.movies)

    let nameRef = useRef('')
    console.log(rating)

    let filtered = () =>{ props.filtering(propsMovies.filter(el=>(el.title.toLowerCase().trim().includes(nameRef.current.value.toLowerCase().trim()) && el.rate >= rating )?el:'')) }

    //filtre par texte marche mais filtre par étoiles marche en retard de 1 state

        return (
        <div className="Filter">        
            <div className="Filter__searchText">
                <input type="text" ref={nameRef} onChange={filtered}></input>
                <AiOutlineSearch className="Filter__searchText__img"/>
            </div>
            <div className="Filter__searchStars">
            {[...Array(5)].map((el,i)=>{
                return <label  key={Math.random()*1000}>
                        <input className="starRadio" type="radio" value={i+1}  onClick={()=> setRating(i+1)} onChange={filtered} />
                        <FaStar className="star" color={i+1 <= (hover || rating) ? "yellow" : "grey"} onMouseEnter={()=>setHover(i+1)} onMouseLeave={()=>setHover(0)}/>
                        </label>
            } )}
            </div>            
        </div>
    )
}

export default Filter
