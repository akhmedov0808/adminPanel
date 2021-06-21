import React from 'react'
import Table from '../components/common/Table'
import { GROUP_LIST, STUDENT_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import Layout from '../components/common/Layout'
import { useModal } from '../hooks/modal'
import Button from '../components/common/Button'
import StudentCreate from '../components/StudentCreate'
import StudentItem from '../components/StudentItem'


export default function Student() {
    const studentList = useLoad({ url: STUDENT_LIST })
    const groupList = useLoad({ url: GROUP_LIST })


    const [showUpdateModal, setShowUpdateModal] = useModal(
        <StudentCreate
            group={groupList}
            onCancel={() => setShowUpdateModal()}
            faculty={studentList.response || []}
            reload={studentList}
        />,
    )


    return (
        <Layout>
            <div className="is-flex margin">
                <div><h1 className="is-size-4">Select Student to change</h1></div>
                <div>
                    <Button
                        onClick={showUpdateModal}
                        className="button is-info"
                        text="Add"
                        icon="add-outline"
                    />
                </div>
            </div>
            <hr />
            <div>
                {studentList.response ? (
                    <b className="is-size-5 ml-4">
                        Students :  {studentList.response.length}
                    </b>
                ) : null}
            </div>
            <Table
                loading={studentList.loading}
                items={studentList.response || []}
                columns={
                    { name: '', actions: '' }
                }
                renderItem={(item) => (
                    <StudentItem key={item.id}
                        item={item}
                        group={groupList}
                        reload={studentList}
                    />
                )}
            />

        </Layout>
    )
}
