import React, {useState} from "react";

export default function Search({facultyList}) {
    const [search, setSearch] = useState("")
    let hello = []

    facultyList.map((item)=> {
        hello.push(item.name)
    })

    const filterProducts = hello.filter((item) => {
        return item.toLocaleLowerCase().includes(search)
    })

    return (
        <div>
            <div className='mt-3'>
                <input
                    className='input'
                    type='search'
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search . . .'/>
            </div>
            <ul className="mt-3 mx-3">
                {filterProducts.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}
