import React, {useState, useRef, useEffect} from 'react'
import './Adder.css'
import { FaStar } from "react-icons/fa"
import { v4 as uuidv4 } from 'uuid'
import MovieCard from './MovieCard'

function Adder(props) {

    const [rating, setRating] = useState(0)
    const [addedMovie, setAddedMovie] = useState([])
    const [hover, setHover] = useState(0)

    let titleRef = useRef()
    let descriptRef = useRef()
    let posterRef = useRef()

    const change = (e) => {
        setAddedMovie([...addedMovie,{
            "title": titleRef.current.value,
            "description": descriptRef.current.value,
            "posterUrl": posterRef.current.value,
            "rate": rating,
            "key": uuidv4()
        }])
        e.preventDefault()
        titleRef.current.value = ""
        descriptRef.current.value = ""
        posterRef.current.value = ""
        setRating(0)
    }

    const isFirstMount = useRef(true);

    useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false; //Pr pas que useEffect sur le render de la page
        } else { console.log('nice movie')}
}, [change]) //Pk est-ce que clic sur étoile initie effect et pas que sur submit button ???

    return (
        <div className="Adder">
            <div className="AddedMovies">
            {addedMovie.map((el,i)=>{if(el.title.toLowerCase().includes(props.search.toLowerCase()) && el.rate >= props.rate ){return <MovieCard title={addedMovie[i].title} description={addedMovie[i].description} posterUrl={addedMovie[i].posterUrl} rate={addedMovie[i].rate} key={addedMovie[i].key}/>}} )}
            </div>
            <div className="Adder__form">
                <h2>Add a movie</h2>
                <form>
                    <input ref={titleRef} placeholder="Title"></input>
                    <input ref={descriptRef} placeholder="Description"></input>
                    <input ref={posterRef} placeholder="Poster URL"></input>
                    {[...Array(5)].map((el,i)=>{
                        const ratingValue = i + 1
                        return <label key={Math.random()*1000}>
                                <input className="starRadio" type="radio" key={Math.random()*1000} value={i+1} onClick={()=> setRating(i+1)}/>
                                <FaStar className="star" color={i+1 <= (hover || rating) ? "yellow" : "grey"}  onMouseEnter={()=>setHover(i+1)} onMouseLeave={()=>setHover(0)}/>
                                </label>
                    } )}
                    <button onClick={change}>Submit</button>                             
                </form>
            </div>
        </div>
    )
}

export default Adder
