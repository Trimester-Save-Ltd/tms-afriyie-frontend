
const Wallet = () => {

    const arr = ['Blood Pressure History', 'Glucose Level History', 'Weight History', '', '', '', '', '']


    return(
        <div className="p-10 grid grid-cols-3 gap-10" >
            <div>
                <h4>Wallet</h4>
                <p className="text-xs py-6" >Main Accoun - <span className="text-primary" > Bank Name</span> </p>
                <h2 className="text-primary font-bold" > <span className="text-lg text-primary" >GHC</span> 1,230.00</h2>

                <p className="text-light_grey_text text-xs py-2" >From <span className="text-tertiary" >Jan 20th  </span>to <span className="text-secondary" >  Feb 28th </span> </p>

                <div className="my-10" >

                    <h4>Transactions</h4>
                    <div className="bg-[#fff] p-4 w-full overflow-hidden my-4 rounded-lg" >

                        <table className="w-full" >
                            <thead>
                                <td>Service</td>
                                <td className="text-right">Amount</td>
                            </thead>
                            <tbody>
                                {
                                    arr.map((el:any, index:number) => (
                                        <tr  >
                                             <td className={` px-2 ${index %2 ? 'text-primary' : 'text-secondary'} `} >{index %2 ? 'Bolt (transportation)' : 'Hospital fees'}</td>
                                            <td className="px-2 py-6 text-right" >GHC 200.00</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div className="col-span-2" >
                <h4>Transactions</h4>
                <div className="bg-[#fff] p-4 w-full overflow-hidden my-4 rounded-lg " >

                    <table className="w-full" >
                        <thead>
                            <td>Date</td>
                            <td className="text-center" >Type</td>
                            <td className="text-center">Amount</td>
                            <td >Description</td>
                        </thead>
                        <tbody>
                            {
                                arr.map((el:any, index:number) => (
                                    <tr  >
                                        <td className="text-light_grey_text py-5 whitespace-nowrap" >January 20, 2022</td>
                                        <td className={` text-center px-2 ${index %2 ? 'text-secondary' : 'text-primary'} `} >{index %2 ? 'Deposit' : 'Withdrawal'}</td>
                                        <td className=" px-2 py-4 text-center whitespace-nowrap" >GHC 200.00</td>
                                        <td className=" line-clamp-1 px-2 py-4 w-fit max-w-20 text-light_grey_text" >Reprehenderit qui adipisicing </td>
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

export default Wallet
