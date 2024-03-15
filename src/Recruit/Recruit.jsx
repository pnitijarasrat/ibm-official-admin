import React, { useState, useEffect } from "react";
import './Recruit.css'
import Job from "./Job";
import { dataRemap } from "../function/dataRemap";
import { url } from "../const/url";
import MessageAPI from "../Message/Message";

export default function Recruit() {
    const [job, setJob] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const { error, contextHolder } = MessageAPI()

    async function getJob() {
        setIsLoading(true)
        try {

            const res = await fetch(`${url}job.json`)
            const data = await res.json()
            let jobArray = []
            if (data) {
                jobArray = dataRemap(data)
            }
            setJob(jobArray)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            console.log(e)
            error('Load Jobs')
        }
    }

    useEffect(() => {
        getJob()
    }, [])

    return (
        <>
            {contextHolder}
            <div className="page-container" >
                <h1>Currently Recruit</h1>
                {
                    !isLoading ?
                        job.length !== 0 ?
                            (job.map((job) => (
                                <Job
                                    id={job.key}
                                    key={job.key}
                                    name={job.name}
                                    desc={job.desc}
                                    period={job.period}
                                    department={job.department}
                                    get={getJob}
                                    link={job.link}
                                />
                            ))) : <div>No Job Available.</div>
                        :
                        <div>Loading...</div>
                }
            </div>
        </>
    )
}