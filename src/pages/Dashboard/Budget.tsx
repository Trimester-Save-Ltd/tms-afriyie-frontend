import { useEffect, useState } from "react"
import SmallCard from "components/SmallCard"
import { getBudgets, createBudget } from "services/patient/budget"
import AddBudget from "components/AddBudget"
import { stringify } from "querystring"

const Budget = () => {

    const [ showBudgetModal, toggleModal ] = useState(false)
    const [budgets, setBudgets] = useState<any[]>([])
    const [monthlyGoals, setmonthlyGoals] = useState<any[]>([
        {
            name: 'January',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'February',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'March',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'April',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'May',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'June',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'July',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'August',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'September',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'October',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'November',
            value: 0,
            unit: 'GHC',
        },
        {
            name: 'December',
            value: 0,
            unit: 'GHC',
        }
    ])

    const arr = ['Blood Pressure History', 'Glucose Level History', 'Weight History', '', '', '', '', '']

    const stats = [
        {
            id: 1,
            name: 'April',
            value: '',
            unit: 'GHC',
        },
        {
            id: 2,
            name: 'May',
            value: '',
            unit: 'GHC',
        },
        {
            id: 3,
            name: 'June',
            value: '',
            unit: 'GHC',
        },
        {
            id: 4,
            name: 'July',
            value: '',
            unit: 'GHC',
        }
    ]

    useEffect(()=> {
        getBudgets().then(
            res => {
                
               setBudgets(res.data.result)

               const currentYear = new Date().getFullYear()
               for (const item of res.data.result) {
                 
                 if(currentYear <= new Date(item.budget_date).getFullYear() ){
                    const budgetMonth = new Date(item.budget_date).getMonth()
                    let budgetAmount = monthlyGoals[budgetMonth].value
                    let totalAmount=  budgetAmount + item.amount

                    let tempArr = [ ...monthlyGoals ];
                    tempArr[budgetMonth-1] = {...monthlyGoals[budgetMonth-1], value: totalAmount};
                    setmonthlyGoals( tempArr );
                    // switch(budgetMonth) {
                    //     case 7:
                            
                            
                            

                    //         console.log(budgetAmount)

                    //     break;
                    //     case 2:
                    //         // let glChange= {
                    //         //     name: 'Glucose level',
                    //         //     value: item.value,
                    //         //     unit: 'm/dl',
                    //         //     icon: GL
                    //         // }
                    //         // setGLVitals(glChange);
                    //     break;
                    //     case 3:
                    //         //  let weChange={
                    //         //      name: 'Weight',
                    //         //     value: item.value,
                    //         //     unit: 'kg',
                    //         //     icon: WT
                    //         // }
                    //         // setWEVitals(weChange);
                    //     break;
                    //     case 4:
                    //         // let cdChange={
                    //         //     name: 'Cycle Date',
                    //         //     value: new Date(item.first_day_of_last_circle).toLocaleDateString(),
                    //         //     unit: 'months',
                    //         //     icon: WT
                    //         // }
                    //     break;
                    // } 
                 }
               }
            }
        )
    },[])
console.log(monthlyGoals[7])
    return(
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
            <AddBudget show={showBudgetModal} toggleClose={()=>toggleModal(!showBudgetModal)} />
            <div className="w-full" >
                <div className="flex">
                    <h4>Budget</h4>
                    <div className="flex flex-col justify-center mx-auto" >
                        <p className=" text-secondary cursor-pointer" onClick={()=>toggleModal(!showBudgetModal)} >
                            + Add budget
                        </p>
                    </div>
                </div>
                <p className="text-xs text-light_grey_text py-6" >Total Budget</p>
                <h2 className="text-primary font-bold" > <span className="text-lg" >GHC</span> </h2>

                <div className="border rounded-xl p-6 my-14" >
                    <p>Saving Progress</p>
                    <p className="text-light_grey_text py-2" ></p>

                    <div className="bg-white w-full h-4 relative mt-5" >
                        <div className="w-1/2 bg-primary h-full" >
                        </div>
                    </div>
                    <p className="text-sm my-2 " > <span className="text-secondary" >GHC </span>  saved out of <span className="text-primary" >GHC </span> </p>
                </div>

                <div className="border rounded-xl p-6 my-14" >
                    <p>Monthly Progress</p>
                    <p className="text-secondary py-2" ></p>

                    <div className="grid grid-cols-7 gap-2 items-end w-full justify-between">
                        <div className="bg-primary w-8 md:w-3 h-44 relative mt-5" >
                            <div className="h-1/2 bg-white h-full" >
                            </div>
                        </div>
                        <div className="bg-primary w-8 md:w-3 h-16 relative mt-5" >
                            <div className="h-1/2 bg-white h-full" >
                            </div>
                        </div>
                        <div className="bg-primary w-8 md:w-3 h-20 relative mt-5" >
                            <div className="h-1/2 bg-white h-full" >
                            </div>
                        </div>
                        <div className="bg-primary w-8 md:w-3 h-32 relative mt-5" >
                            <div className="h-1/2 bg-white h-full" >
                            </div>
                        </div>
                        <div className="bg-primary w-8 md:w-3 h-40 relative mt-5" >
                            <div className="h-1/2 bg-white h-full" >
                            </div>
                        </div>
                        <div className="bg-primary w-8 md:w-3 h-36 relative mt-5" >
                            <div className="h-1/2 bg-white h-full" >
                            </div>
                        </div>
                        <div className="bg-primary w-8 md:w-3 h-48 relative mt-5" >
                            <div className="h-1/2 bg-white h-full" >
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
            <div className="lg:col-span-2" >
                <h4>Goals</h4>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 w-full" >
                    {
                        stats.map((stat:any)=>(
                            <SmallCard name={stat.name} value={stat.value} unit={stat.unit} icon={stat.icon} /> 
                        ))
                    }
                </div>

                <div className="bg-[#fff] p-4 w-full overflow-hidden my-4 rounded-lg h-fit lg:h-full" >
                    <table className="w-full " >
                        <thead>
                            <td>Date</td>
                            <td className="text-center" >Type</td>
                            <td className="text-center">Amount</td>
                            <td className="" >Description</td>
                        </thead>
                        <tbody>
                            {
                                budgets.map((item:any, index:number) => (
                                    <tr  >
                                        <td className="py-4 whitespace-nowrap" >{ new Date(item.budget_date).toDateString()}</td>
                                        <td className= "py-4 text-center whitespace-nowrap">{item.budget_type}</td>
                                        <td className=" py-4 text-center whitespace-nowrap" >{item.amount}</td>
                                        <td className=" line-clamp-1 px-2 py-4 w-fit max-w-20" >{item.description} </td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
            

        </div>
    )
}

export default Budget
