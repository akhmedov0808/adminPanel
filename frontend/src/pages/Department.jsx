import React from 'react'
import Table from '../components/common/Table'
import DepartmentItem from '../components/DepartmentItem'
import { DEPARTMENT_LIST, FACULTY_LIST } from '../urls'
import Layout from '../components/common/Layout'
import { useModal } from '../hooks/modal'
import DepartmentCreate from '../components/DepartmentCreate'
import Button from '../components/common/Button'
import { useLoad } from '../hooks/request'


export default function Department() {
    const departmentList = useLoad({ url: DEPARTMENT_LIST })
    const facultyList = useLoad({ url: FACULTY_LIST })

    const [showUpdateModal, hideUpdateModal] = useModal(
        <DepartmentCreate
            onCancel={() => hideUpdateModal()}
            faculty={facultyList.response || []}
            reload={departmentList} />,
    )

    return (
        <Layout>
            <div className="is-flex margin">
                <div><h1 className="is-size-4">Select Department to change</h1></div>
                <div>
                    <Button
                        onClick={showUpdateModal}
                        className="button is-info"
                        text="Add"
                        icon="add-outline" />
                </div>
            </div>
            <hr />
            <div>
                {departmentList.response ? (
                    <b className="is-size-5 ml-4">
                        Departments :  {departmentList.response.length}
                    </b>
                ) : null}
            </div>

            <Table
                loading={departmentList.loading}
                items={departmentList.response ? departmentList.response : []}
                columns={{ name: '', actions: '' }}
                renderItem={(item) => (<DepartmentItem key={item.id} item={item} reload={departmentList} />)} />

        </Layout>
    )
}
