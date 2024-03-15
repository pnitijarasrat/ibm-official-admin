import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { url } from "../const/url";
import React, { useState } from "react";
import MessageAPI from "../Message/Message";
import {
    LoadingOutlined
} from '@ant-design/icons';

export default function NewRecruitment() {
    const [isAdding, setIsAdding] = useState(false)

    const [recruitmentForm] = Form.useForm()
    const navigate = useNavigate()

    const rule = [{ required: true, message: 'Please Enter this Field' }]
    const { success, error, contextHolder } = MessageAPI()

    // Handle add function
    const addNewRecruitment = async (newRecruitment) => {
        setIsAdding(true)
        try {
            const res = await fetch(`${url}/job.json`, {
                method: 'POST',
                body: JSON.stringify(newRecruitment),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.ok) {
                success('Add')
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            }
        } catch (e) {
            error('Add')
        }
    }

    const handleAddNewRecruitment = () => {
        const payload = recruitmentForm.getFieldsValue()
        addNewRecruitment(payload)
    }

    return (
        <>
            {contextHolder}
            <div className="page-container">
                <h1>New Project</h1>
                <Form
                    form={recruitmentForm}
                    labelCol={{ span: 4 }}
                    onFinish={handleAddNewRecruitment}
                >
                    <Form.Item label="Project Name" name="name" rules={rule}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Department" name="department" rules={rule}>
                        <Input />
                    </Form.Item >
                    <Form.Item label="Period" name="period" rules={rule}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Summary Description" name="desc" rules={rule}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Apply Link" name="link" rules={rule}>
                        <Input />
                    </Form.Item>
                    <div className="footer">
                        <button>Add New Project</button>
                        <button onClick={() => navigate(-1)}>Back</button>
                    </div>
                </Form>
            </div>
        </>
    )
}