import React from "react";
import { Link } from 'react-router-dom'
import { Divider } from "antd";

export default function Home() {

    return (
        <div className="page-container">
            <div className="full-width-control">
                <h1>Announcement</h1>
                <button>New Announcement</button>
            </div>
            <Divider />
            <div className="full-width-control">
                <h1>Recruit</h1>
                <Link to={'/new-recruitment'}>
                    <button>New Recruitment</button>
                </Link>
            </div>
            <Divider />
        </div>
    )
}