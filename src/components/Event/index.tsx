type EventType = {
    type: 'important' | 'normal' | 'very important',
    agenda:string,
    time: string
}

const Event = ({type, agenda, time}:EventType) => (
    <div className="flex gap-4 my-10"  >

        <p className="font-bold pt-1 text-lg" >{time} </p>

        <div className={` border-l-4 pt-1 pl-4 h-12 ${ type === 'normal' && 'border-tertiary' } ${ type === 'very important' && 'border-secondary' } ${ type === 'important' && 'border-primary' }`} >
            <p className="text-sm line-clamp-2 " >{agenda}</p>
        </div>
    </div>
)


export default Event