import React from "react";
import { FormControl } from 'react-bootstrap';

function Search({searchByCurrencyName}) {
    return <FormControl className="mb-3"
      placeholder="Search currency"
        aria-label="Search currency"
        onKeyUp={e => searchByCurrencyName(e.currentTarget.value.trim().toLowerCase())}
    /> 
};

export default Search;