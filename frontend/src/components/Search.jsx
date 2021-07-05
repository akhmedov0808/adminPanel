import React from "react";

export default function Search({setSearch}) {
    return (
        <div>
            <div className='mt-3 control has-icons-right'>
                <input
                    className='input'
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search . . .'/>
                <span className='icon is-right'>
                    <ion-icon name="search"></ion-icon>
                </span>
            </div>
        </div>
    )
}
