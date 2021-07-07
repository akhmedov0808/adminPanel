import React from 'react'

export default function GroupModal({item, student, teachers}) {
    return (
        <div>
            <h1 className="title has-text-centered"> {item.name}</h1>
            <table className="table is-narrow is-fullwidth">
                <tbody>
                <tr>
                    <th className="is-size-4 has-text-info ">Department:</th>
                    <th className="is-size-4 has-text-info">Students:</th>
                    <th className="is-size-4 has-text-info">Teachers:</th>
                </tr>
                <tr>
                    <td className="is-size-6"> {item.department.name}</td>
                    <td className="is-size-5"> {student.response.map((item) => (
                        <div key={item.id}>
                            <div className='is-flex is-size-6 is-flex-wrap-wrap'>

                                <p className='is-flex'>
                                    <span className='has-text-info'>First name : </span>
                                    {item.name}
                                </p>

                                <p className='is-flex'>
                                    <span className='has-text-info'>Last name :</span>
                                    {item.lastName}
                                </p>

                                <p className='is-flex'>
                                    <span className='has-text-info'>Patronymic :</span>
                                    {item.patronymic}
                                </p>

                                <p className='is-flex'>
                                    <span className='has-text-info'>Age :</span>
                                    {item.age}
                                </p>
                            </div>
                            <hr/>
                        </div>
                    ))}
                    </td>
                    <td className="is-size-6"> {teachers.map((item) => (
                        <div key={item.id}>
                            <div className='is-flex is-flex-wrap-wrap'>
                                <p className='is-flex'>
                                    <span className='has-text-info'>First name : </span>
                                    {item.name}
                                </p>

                                <p className='is-flex'>
                                    <span className='has-text-info'>Last name : </span>
                                    {item.lastName}
                                </p>

                                <p className='is-flex'>
                                    <span className='has-text-info'>Patronymic : </span>
                                    {item.patronymic}
                                </p>

                                <p className='is-flex'>
                                    <span className='has-text-info'>Science : </span>
                                    {item.science}
                                </p>

                                <p className='is-flex'>
                                    <span className='has-text-info'>Age : </span>
                                    {item.age}
                                </p>
                            </div>
                            <hr/>
                        </div>

                    ))}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
