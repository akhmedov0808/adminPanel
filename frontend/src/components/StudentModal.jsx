import React from 'react'

export default function StundentModal({ item }) {
    return (
        <div>
            <b className="is-size-5 has-text-info">Student:</b>
            <span className="is-size-5"> {item.name}</span>
            <br />
            <b className="is-size-5 has-text-info">Group:</b>
            <span className="is-size-5"> {item.group.name}</span>
        </div>
    )
}
