import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { filterByCode } from '../config'

const Wrapper = styled.section`
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media(min-width: 767px){
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media(min-width: 1024px){
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0rem;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media(min-width: 767px){
        flex-direction: row;
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

`;

const Meta = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 767px;){
        flex-direction: row;
        aligh-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    
    line-height: 1.5;
    cursor: pointer;
`;

export const Info = (props) => {
    
    const {
        name,
        flags,
        capital,
        population,
        region,
        subregion,
        tld,
        currencies = [],
        languages = [],
        borders = [],
        navigate
    } = props;

    const [neighbors, setNeighbors] = useState([])

    useEffect(() => {
        if(borders.length){
            axios.get(`https://cors-anywhere.herokuapp.com/${filterByCode(borders)}`)
            .then(({data}) => setNeighbors(data.map(el=>el.name)))
        }
    }, [borders]);

    return(
        <Wrapper>
            <InfoImage src={flags.png} alt={name.common}/>
                <div>
                    <InfoTitle>
                        {name.common}
                    </InfoTitle>
                    <ListGroup>
                        <List>
                            <ListItem>
                                <b>
                                    Native name : 
                                </b>
                                {` ${name.official}`}
                            </ListItem>
                            <ListItem>
                                <b>
                                    Population : 
                                </b>
                                {` ${population}`}
                            </ListItem>
                            <ListItem>
                                <b>
                                    Region : 
                                </b>
                                {` ${region}`}
                            </ListItem>
                            <ListItem>
                                <b>
                                    Sub region :
                                </b>
                                {` ${subregion}`}
                            </ListItem>
                            <ListItem>
                                <b>
                                    Capital : 
                                </b>
                                {` ${capital}`}
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <b>
                                    Top level domain : 
                                </b>
                                {tld.map(d => (<span key={d}> {d}</span>))}
                            </ListItem>
                            <ListItem>
                                <b>
                                    Currency :
                                </b>
                                {Object.entries(currencies).map(([code, currency]) => (
                                    <span key={code}> {currency.name} ({currency.symbol}) </span>
                                ))}
                            </ListItem>
                            <ListItem>
                                <b>
                                    Lenguages : 
                                </b>
                                {Object.values(languages).map((l, i) => (<span key={i}> {l} </span>))}
                            </ListItem>
                        </List>
                    </ListGroup>
                    <Meta>
                        {!borders.length ? (
                            'There is no border'):(
                                <TagGroup>
                                    <b>
                                        Borders : 
                                    </b>
                                    {
                                        neighbors.map(b=><Tag key={b.common} onClick={()=>navigate(`/country/${b.common}`)} >{b.common}</Tag>)
                                    }
                                </TagGroup>
                            )}
                    </Meta>
                </div>
        </Wrapper>
    );
}

