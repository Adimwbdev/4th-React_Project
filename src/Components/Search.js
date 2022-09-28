import React,{ useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term,setTerm] = useState('programming');
  const [results,setResults] = useState([]);


  useEffect(()=> {
    // we create a seperate search function because we cannot use async directly to the arrow function inside
    //useEffect for example useEffect(async()=>{.....})
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
        params: {
          action:'query',
          list: 'search',
          origin:'*',
          format:'json',
          srsearch: term
        },
      });


      setResults(data.query.search);
    };

    //this is if is for the first time it gets rendered
    if (term && !results.length) {
      search();
    } else {
       //Set the timeout to begin the search
    const timeoutId = setTimeout(() => {
      if(term) {
      search();
      }
    },500);

    //function called after render to cancel the timer if we continue to write letters
    return () => {
      clearTimeout(timeoutId);
    };

    }

   
  }, [term]);

const renderedResults = results.map((results) => {
  return (
  <div key={results.pageid} className="item">
    <div className="right floated content">
      <a 
      className="ui button"
      href={`https:en.wikipedia.org?curid=${results.pageid}`}
      >
        Go
        </a>
    </div>
    <div className="content">
      <div className="header">
        {results.title}
      </div>
      <span dangerouslySetInnerHTML={{ __html: results.snippet}}></span>
      
    </div>
  </div>
  );
});

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
          value={term}
          onChange={e => setTerm(e.currentTarget.value)}
          className="input">
             
          </input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

