import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AllBeersPage() {

    const API_URL = "https://ih-beers-api2.herokuapp.com"

    const [beers, setBeers] = useState(null)

    useEffect(() => {
        axios.get(API_URL + "/beers")
            .then((response) => {
                setBeers(response.data)
            })
            .catch((e) => {
                console.log("An error occurred:")
                console.log(e)
            })
    }, [])

    return (
        <>
            <div className="beers-page-div">
                {beers === null
                    ? <p>Loading list of beers...</p>
                    : (beers.map((beer) => {
                        return (
                            <Link to={`/beers/${beer._id}`}className="beer" >
                                <div className="beer-image-div" key={beer._id}>
                                    <img src={beer.image_url} className="beer-image" />
                                </div>
                                <div className="beer-details">
                                    <h1>{beer.name}</h1>
                                    <h2>{beer.tagline}</h2>
                                    <h3>Created by: {beer.name}</h3>
                                </div>
                            </Link>
                        )
                    }))}
            </div>
        </>
    )
}

export default AllBeersPage;
