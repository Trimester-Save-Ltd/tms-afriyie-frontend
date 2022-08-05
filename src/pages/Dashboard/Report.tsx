import { Stats } from "fs";
import { useState,useEffect } from "react";
import { getVitals } from "services/patient/vitals"

const Report = () => {

    const [vitals, setVitals] = useState<any[]>([])
    const vitals_arr = [
        {id:"BP",value:'Blood Pressure History'}, 
        {id:"GL",value:'Glucose Level History'}, 
        {id:"WE",value:'Weight History'}
    ]

    useEffect(()=> {
        getVitals().then(
            res => setVitals(res.data.result)
        )
    },[])
    
    return(
        <div className="p-10" >
            <h4>Report</h4>
            
            <div className="my-8" >

                {
                    vitals_arr.map((el,index:number)=> (
                        <div className="mb-10">
                            <div className="flex justify-between">
                                <p>{el.value}</p>
                                <p className="cursor-pointer text-light_grey_text" >Download</p>
                            </div>
                            <div className="bg-[#fff] p-4 w-full overflow-hidden my-4 rounded-lg" >
                                <table className="w-full " >
                                    <thead>
                                        <td>Date</td>
                                        <td className="text-center" >Value</td>
                                        <td>Description</td>
                                    </thead>
                                    <tbody>
                                        {
                                            vitals.map((stat, index:number) => (
                                                el.id===stat.vital_type? <tr  >
                                                    <td className="text-light_grey_text  pr-2 py-4" >{stat.first_day_of_last_circle}</td>
                                                    <td className="text-center px-2" >{stat.value}</td>
                                                    <td className="line-clamp-1 px-2 text-light_grey_text py-4" >{stat.description} </td>
                                                    <td></td>
                                                </tr>
                                                :null
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                                <a href="#" className="underline text-secondary" >See More</a>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Report
