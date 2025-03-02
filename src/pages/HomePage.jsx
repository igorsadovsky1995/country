import axios from 'axios'
import { useState, useEffect } from 'react'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { ALL_COUNTRIES } from '../config'
import {useNavigate} from 'react-router-dom'
import { Natification } from '../components/Natification'

export const HomePage = ({countries, setCountries}) => {
    const [filtredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const hendlerCountries = (search, region) => {
        let data = [...countries];
        
        if(region){
            console.log(data)
            data = data.filter((c=>c.region.includes(region)))
        }

        if(search){
            data = data.filter(c=>c.name.common.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    }

    const navigate = useNavigate();
       
    useEffect(() => {
        if (!countries.length) {
            setLoading(true);

            axios.get(ALL_COUNTRIES)
                .then(({ data }) => {
                    setCountries(data);
                    setFilteredCountries(data); 
                })
                .catch((error)=>{
                    setError(`Error : ${error}`)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setFilteredCountries(countries);
        }
    }, [countries, setCountries]);

    return (
        <>
            <Controls onSearch={hendlerCountries}/>
            <List>
            {
                error ? (<Natification>{error}</Natification>):('')
            }
            {   
                loading ? (<Natification>Loading...</Natification>):
                (filtredCountries.map((el)=>{
                    const countryInfo = {
                        img: el.flags.png, 
                        name: el.name.common, 
                        info: [{
                            title: 'Population',
                            discription: el.population.toLocaleString()
                            },{
                            title: 'Region',
                            discription: el.region
                            },{
                            title: 'Capital',
                            discription: el.capital
                        }]
                }
                
                return (
                    <Card key={el.name.common} {...countryInfo} onClick={()=>{navigate(`/country/${el.name.common}`)}}/>
                )
                }))
            }
            </List>
        </>
    )
}