import bg from "assets/images/Motherhood.png"
import Button from "components/Button"
import SmallCard from "components/SmallCard"

import GD from 'assets/images/gd.svg'
import GL from 'assets/images/gl.svg'
import WT from 'assets/images/wt.svg'
import CAL from 'assets/images/cal.svg'
import BP from 'assets/images/bp.svg'
import Charts from "components/chart"
import Event from "components/Event"
import SVGs from "helpers/SVGs"
import { useEffect, useState } from "react"
import Modal from "components/Modal"
import { dispatchStore } from "pages/Auth/Register"
import AddVital from "components/AddVital"
import { getVitals,getVital } from "services/patient/vitals"
import { getUser } from "helpers/utilities"

const Metrics = () => {

    const [ showCalendar, toggleCalendar ] = useState(true)
    const [ showVitalModal, toggleModal ] = useState(false)

    const [BPvitals, setBPVitals] = useState({
        name: 'Blood Pressure',
        value: '',
        unit: '',
        icon: BP
    })
    const [GLvitals, setGLVitals] = useState({
        name: 'Glucose level',
        value: '' ,
        unit: 'm/dl',
        icon: GL
    })
    const [WEvitals, setWEVitals] = useState({
        name: 'Weigth',
        value: '',
        unit: 'kg',
        icon: WT
    })

    const [GAvitals, setGAVitals] = useState(
        {
            name: 'Gestational Age',
            value: '',
            unit: '',
            icon: GD
        })
    
    const [CDvitals, setCDVitals] = useState(
        {
            name: 'Cycle Date',
            value: '',
            unit: '',
            icon: CAL
        })

    const [EDDvitals, setEDDVitals] = useState(
        {
            name: 'Est. Due Date',
            value: '',
            unit: '',
            icon: CAL
        })

    const infomationArray = [
        "Having a good night sleep improves your health and that of the baby , talk to your healthcare provider if you are sleeping too short or not deep enough",
        "Your finances can affect your health outcomes please budget and plan ahead",
        "If you feel overwhelming sadness or suddenly feel you are finding difficulties coping talk to your doctor or midwife"
    ]

    const [ active, setActive ] = useState(infomationArray[0])

    useEffect(()=> {
        getVital().then(res => {
              for (const item of res.data.result) {
                const vital_type = item.vital_type
                switch(vital_type) {
                    case "BP":
                        let bpChange= {
                            name: 'Blood Pressure',
                            value: item.value,
                            unit: '',
                            icon: BP
                        }
                        setBPVitals(bpChange);
                    break;
                    case "GL":
                        let glChange= {
                            name: 'Glucose level',
                            value: item.value,
                            unit: 'm/dl',
                            icon: GL
                        }
                        setGLVitals(glChange);
                    break;
                    case "WE":
                         let weChange={
                             name: 'Weight',
                            value: item.value,
                            unit: 'kg',
                            icon: WT
                        }
                        setWEVitals(weChange);
                    break;
                    case "GE":
                        let cdChange={
                            name: 'Cycle Date',
                            value: new Date(item.first_day_of_last_circle).toLocaleDateString(),
                            unit: '',
                            icon: CAL
                        }
                        let gaChange={
                            name: 'Gestational Age',
                            value: item.due_in_days,
                            unit: 'days',
                            icon: GD
                        }
                        let dueDateChange={
                            name: 'Est. Due Date',
                            value: new Date(item.full_term_date).toLocaleDateString(),
                            unit: '',
                            icon: CAL
                        }
                        setCDVitals(cdChange);
                        setGAVitals(gaChange);
                        setEDDVitals(dueDateChange);
                    break;
                } 
          }
    } 
    )},[])

    return(
        <div className="w-full flex relative" >
                <AddVital show={showVitalModal} toggleClose={()=>toggleModal(!showVitalModal)} />
         
            <div  className={`w-full lg:w-2/3 p-10 ${showCalendar ? '' : 'lg:screen' }`}>
                <div className="flex justify-between" >
                    <div>
                        <h5>Hello</h5>
                        <p className="text-light_grey_text" >Today is {new Date().toDateString()} </p>
                    </div>
                    <div className="flex flex-col justify-center" >
                        <p className=" text-secondary text-sm cursor-pointer mb-2" onClick={()=>toggleModal(!showVitalModal)} >
                            + Add Vitals
                        </p>
                        <p className=" text-tertiary text-sm cursor-pointer" onClick={()=>toggleCalendar(!showCalendar)} >
                            {showCalendar? "hide calendar": "show Calendar"}
                        </p>

                    </div>
                </div>

                <div className="my-6" >
                    <div className="w-full h-fit lg:h-[220px] bg-primary rounded-xl p-4 flex overflow-hidden" >
                        <div  className=" p-6 py-2 w-fit min-w-21" >
                            <p className="text-xs text-[#80ABCD]" >
                                Reminder
                            </p>
                            <h3 className="text-[#ffffff] text-3xl" >
                            Have you gone for check-up recently?
                            </h3>
                            <p className=" pt-4 text-tertiary" >{active}</p>
                            {/* <div className="w-44 -mt-2" >
                                <Button secondary title="Check Activity" />

                            </div> */}
                        </div>
                        <div className=" relative flex gap-10 lg:h-[280px] overflow-hidden" >
                            <img src={bg} className=' -left-10 -top-12 h-56 md:h-72 lg:h-[400px] object-cover object-top'  alt=".." />
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full" >
                    <SmallCard name={BPvitals.name} value={BPvitals.value} unit={BPvitals.unit} icon={BPvitals.icon} /> 
                    <SmallCard name={GLvitals.name} value={GLvitals.value} unit={GLvitals.unit} icon={GLvitals.icon} /> 
                    <SmallCard name={WEvitals.name} value={WEvitals.value} unit={WEvitals.unit} icon={WEvitals.icon} /> 
                    <SmallCard name={CDvitals.name} value={CDvitals.value} unit={CDvitals.unit} icon={CDvitals.icon} />
                    <SmallCard name={GAvitals.name} value={GAvitals.value} unit={GAvitals.unit} icon={GAvitals.icon} />
                    <SmallCard name={EDDvitals.name} value={EDDvitals.value} unit={EDDvitals.unit} icon={EDDvitals.icon} />
                </div>

                <div className="w-full bg-[#fff] h-80 rounded-xl mt-6 py-4" >
                    <Charts />
                </div>

            </div>

            <div className={`lg:block lg:w-1/3 border-l bg-[#fff] py-6 px-10 ${showCalendar ? 'block absolute z-10 right-0 w-80 h-full lg:relative' : 'invisible' }`} >

                <div className="flex justify-between items-center" >
                    <h5 className="mt-4" >Calendar</h5>
                    <p className="lg:hidden cursor-pointer text-secondary" onClick={()=>toggleCalendar(!showCalendar)} >{SVGs.close}</p>
                </div>

                <p className="text-sm text-light_grey_text mt-12 mb-3" >July</p>
                <Event type="important" time="" agenda="" />
              

                <p className="text-sm text-light_grey_text mt-12 mb-3" >August</p>
                <Event type="normal" time="" agenda="" />
               
                
                <p className="text-sm text-light_grey_text mt-12 mb-3" >September</p>
                <Event type="normal" time="" agenda="" />
              
                
                <p className="text-sm text-light_grey_text mt-12 mb-3" >October</p>
            
                <Event type="very important" time="" agenda="" />
                
                <p className="text-sm text-light_grey_text mt-12 mb-3" >November</p>
            
                <Event type="very important" time="" agenda="" />
                
                <p className="text-sm text-light_grey_text mt-12 mb-3" >December</p>
            
                <Event type="very important" time="" agenda="" />


            </div>

        </div>
    )
}

export default Metrics
