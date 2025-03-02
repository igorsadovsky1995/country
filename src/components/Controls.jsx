import { useState, useEffect } from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";

const options = [
    {
        value: 'Africa',
        label: 'Africa'
    },
    {
        value: 'America',
        label: 'America'
    },{
        value: 'Oceania',
        label: 'Oceania'
    },{
        value: 'Europe',
        label: 'Europe'
    },{
        value: 'Asia',
        label: 'Asia'
    }
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-item:flex-start;

    @media(min-width:767px){
        flex-direction: row;
        justify-content: space-between;
        alingh-items: center;
    }
`

export const Controls = ({onSearch}) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regonSearch = region?.value || '';
        onSearch(search, regonSearch);
    },[search, region]);

    return(
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect 
                options={options} 
                placeholder="Filter by Region" 
                isClearable 
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    );
}