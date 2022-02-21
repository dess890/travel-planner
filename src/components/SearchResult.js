import React from 'react'

function SearchResult(props) {
    const result = props.result
    return (
        <div>
            {result.name}
            {result.vicinity}
        </div>
    )
}

export default SearchResult