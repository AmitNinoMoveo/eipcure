import React from 'react'

type Props = {
    placeholderTxt: string,
    valueState: string,
    onChangeFunc: ()=>void
};

const Search = (props: Props) => {

    const { onChangeFunc, placeholderTxt, valueState } = props;

    return (
        <div className="search-container">
            <span>{ placeholderTxt }</span>
            <input onChange={()=>onChangeFunc()} value={valueState} type="text" />
        </div>
    );
};

export default Search;
