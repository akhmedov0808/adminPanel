import React from 'react'
import Table from '../components/common/Table'
import FacultyItem from '../components/FacultyItem'
import { FACULTY_LIST } from '../urls'
import { useLoad } from '../hooks/request'
import Layout from '../components/common/Layout'
import { useModal } from '../hooks/modal'
import Button from '../components/common/Button'
import FacultyCreate from '../components/FacultyCreate'


export default function Faculty() {
    const facultyList = useLoad({ url: FACULTY_LIST })
    const [showUpdateModal, setShowUpdateModal] = useModal(
        <FacultyCreate
            onCancel={() => setShowUpdateModal()}
            faculty={facultyList.response ? facultyList.response : []}
            reload={facultyList}
        />,
    )

    return (
        <Layout>
            <div className="is-flex margin">

                <div className="is-size-4"><h1 className="is-size-4">Select Faculty to change</h1></div>

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
                {facultyList.response && (facultyList.response.length > 0) ? (
                    <b className="is-size-5 ml-4">
                        Faculties :  {facultyList.response.length}
                    </b>
                ) : null}
            </div>

            <Table
                loading={facultyList.loading}
                items={facultyList.response ? facultyList.response : []}
                columns={
                    { name: '', actions: '' }
                }

                renderItem={(item) => (<FacultyItem key={item.id} item={item} reload={facultyList} />)}
            />
        </Layout>
    )
}
