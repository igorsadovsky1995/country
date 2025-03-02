import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button"; 
import { Info } from "../components/Info";
import { Natification } from "../components/Natification";

export const Detales = () => {
    const {name} = useParams();
    const navigate = useNavigate();

    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/${searchByCountry(name)}`)
        .then(({data}) => setCountry(data[0]))
        .catch((error) => {
            setError(`Error : ${error}`)
        })
        .finally(() => {
            setLoading(false)
        })
    },[name])

    return (
        <div>
            <Button onClick={()=>navigate(-1)}>
                <IoArrowBack/> Back
            </Button>
            {
                error ? <Natification>{error}</Natification> : ''
            }
            {
                loading ? <Natification>Loading...</Natification> : <Info navigate={navigate} {...country}/>
            }
        </div>
    )
}