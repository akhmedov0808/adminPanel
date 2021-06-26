import React from 'react'

export default function TeacherModal({ item }) {
    return (
        <div className='has-text-centered'>
            <b className="is-size-4 has-text-info">Teacher:</b>
            <span className="is-size-4"> {item.name}</span>
            <br />
            <b className="is-size-4 has-text-info">Groups:</b>
            {item ? (item.group.map((group) => (
                <span key={group.id}>
                    <span className="is-size-4"> {group.name},</span>
                </span>
            ))) : null}
        </div>
    )
}
