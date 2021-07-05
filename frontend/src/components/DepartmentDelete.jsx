import React from 'react'

export default function DepartmentDelete({onCancel, remove, reload, id, studentList}) {

    const studentShowDelete = studentList.filter(i => id.includes(i.group.department.id))

    async function onDelete() {
        const {success} = await remove.request({data: {id}})
        reload.request()
        if (success) {
            onCancel()
        }
    }

    return (
        <div className='p-4'>
            <b className="is-size-4 has-text-info">Are you sure?</b>
            <br/><br/>
            <div className="is-size- ml-5 is-size-5 ">
                <span>
                    📍 Are you sure you want to delete the selected Department?
                    All of the following objects and their related items will be deleted:
                </span>
            </div>
            <br/>
            <hr/>
            <b className="is-size-4 has-text-info">Summary:</b>
            <br/>
            <span className='is-size-5'>
                <br/>
                <span className="ml-5">📍 Departments: {studentShowDelete.length}</span>
                <br/>
                <span className='ml-5'>📍 Groups: {studentShowDelete.length}</span>
                <br/>
                <span className='ml-5'>📍 Students: {studentShowDelete.length}</span>
            </span>
            <br/><br/>
            <hr/>
            <b className="is-size-4 has-text-info">Objects:</b>
            <br/><br/>
            {studentShowDelete.map((item) => (
                <div key={item.id}>
                    <div className='is-flex'>
                        <span
                            className='is-size-5 is-flex'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📍 Department:
                        </span>
                        <span className='ml-3 is-size-5 has-text-info'>{item.group.department.name}</span>
                    </div>

                    <div className='is-flex'>
                        <span
                            className='is-size-5 is-flex'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📍 Group:
                        </span>
                        <span className='ml-3 is-size-5 has-text-danger'>{item.group.name}</span>
                    </div>

                    <div className='is-flex'>
                        <span
                            className='is-size-5 is-flex'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📍 Student:
                        </span>
                        <span className='ml-3 is-size-5 has-text-info'>{item.name}</span>
                    </div>
                    <hr/>
                </div>
            ))}

            <div>
                <button onClick={onDelete} className="button is-danger mr-2"> 👎 Yes, I'm sure</button>
                <button onClick={onCancel} className='button is-info'> 👍 No, take me back</button>
            </div>
        </div>
    )
}
