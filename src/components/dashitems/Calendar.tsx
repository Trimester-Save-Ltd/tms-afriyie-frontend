import React from 'react'

import Image01 from "../../assets/images/user1.svg"

const Calendar = () => {



    const customers = [
        {
          id: '0',
          image: Image01,
          name: 'Dr jolex Stone',
          date: 'May 6 2022',
          message: 'I have to visit the doctor',
          time: '11:00 AM',
        },
        {
            id: '1',
            image: Image01,
            name: 'Dr Alex Stone',
            date: 'May 6 2022',
            message: 'I have to visit the doctor',
            time: '11:00 AM',
          },
        {
          id: '2',
          image: Image01,
          name: 'Dr Alex Stone',
          date: 'May 6 2022',
          message: 'I have to visit the doctor',
          time: '11:00 AM',
        },
        {
          id: '3',
          image: Image01,
          name: 'Dr Alex Stone',
          date: 'May 6 2022',
          message: 'I have to visit the doctor',
          time: '11:00 AM',
        },
        {
          id: '4',
          image: Image01,
          name: 'Dr Alex Stone',
          date: 'May 6 2022',
          message: 'I have to visit the doctor',
          time: '11:00 AM',
        },
      ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Calendar</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Time</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Agenda</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer  => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.date}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.time}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.message}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  )
}

export default Calendar