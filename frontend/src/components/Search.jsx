import React from "react";

export default function Search({setSearch}) {
    return (
        <div>
            <div className='mt-3'>
                <input
                    className='input'
                    type='search'
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search . . .'/>
            </div>
        </div>
    )
}
