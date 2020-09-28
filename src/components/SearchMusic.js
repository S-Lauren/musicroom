import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

import _ from "lodash";
import SearchResultTable from './SearchResultTable';


const useStyles = makeStyles({
  root: {
    width: "200px",
    marginLeft: "1rem"
  }
})

const SearchMusic = () => {

const [list, setList] = useState("")
const [result, setResults] = useState([])
const css = useStyles()
const YTB_KEY = process.env.REACT_APP_YTB_API_KEY;
const url ="https://www.googleapis.com/youtube/v3/search?";
const delayQuery = _.debounce((e)=> setList(e), 500)

useEffect(() => {
  fetch(`${url}&part=snippet&q=${list}&key=${YTB_KEY}&maxResults=25`)
  .then(resp => resp.json())
  .then(data => {			
    setResults(data.items)
  })
}, [list])

const handleSearch = e => {
  delayQuery(e.target.value)
}

return (
  <>
    <TextField  onChange={handleSearch}  className={css.root} placeholder="Enter your music"/>
    <SearchResultTable result={result}/>
  </>
  );
};

export default SearchMusic; 