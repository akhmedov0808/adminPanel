import React from 'react'

export default function StudentModal({item}) {
    return (
        <div className="has-text-centered">
            <b className="is-size-4 has-text-info">Student:</b>
            <br/><hr/>
            <span className="is-size-5">
                <span className='has-text-info is-size-5'>First name : </span>
                {item.name}
            </span>
            <br/>
            <span className="is-size-5">
                <span className='has-text-info is-size-5'>Last name : </span>
                {item.lastName}
            </span>
            <br/>
            <span className="is-size-5">
                <span className='has-text-info is-size-5'>Patronymic : </span>
                {item.patronymic}
            </span>
            <br/>
            <span className="is-size-5">
                <span className='has-text-info is-size-5'>Age : </span>
                {item.age}
            </span>
            <br/><hr/>
            <b className="is-size-4 has-text-info">Group:</b>
            <span className="is-size-4"> {item.group.name}</span>
        </div>
    )
}
