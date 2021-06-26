import React from 'react'

export default function GroupModal({ item, student, teachers }) {
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
                        <td className="is-size-5"> {item.department.name}</td>
                        <td className="is-size-5"> {student.response.map((item) => (
                            <div key={item.id}>
                                <p className="is-flex is-flex-wrap-wrap "> {item.name}
                                </p>
                                <hr />
                            </div>

                        ))}
                        </td>
                        <td className="is-size-5"> {teachers.response.map((item) => (
                            <div key={item.id}>
                                <p className="is-flex is-flex-wrap-wrap "> {item.name}
                                </p>
                                <hr />
                            </div>

                        ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
