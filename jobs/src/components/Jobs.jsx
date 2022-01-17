import { useEffect, useState } from "react"
import { Div, Div2 } from "../styles/design"

export const Jobs=()=>{
    const [job,setJob] = useState([])
    var arr = [
        {
            title:'frontened-dev',
            salary:'50,000',
            location:'VNS',
            company:'TCS'
        },
        {
            title:'backend-dev',
            salary:'90,000',
            location:'noida',
            company:'accenture'
        },
        {
            title:'frontened-dev',
            salary:'30,000',
            location:'Gurugram',
            company:'HCL'
        },
        {
            title:'data science',
            salary:'50,000',
            location:'delhi',
            company:'samsung'
        },
    ]
    useEffect(()=>{
        setJob(arr)
    },[])

    return(
        job.map((e,i)=>{
            return <Div2 key={i}>
                {e.title}
                <br/>
                Company:-{e.company}
                <br/>
                Salary:-{e.salary}
                <br/>
                Location:-{e.location}
                <br/>

            </Div2>
        })
    )
}
