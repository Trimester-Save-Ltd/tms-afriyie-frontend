const SmallCard = ({name, unit, icon, value}:any) => (
    <div className="bg-[#fff] p-3 md:p-6 py-4 flex items-center rounded-xl md:h-32 h-fit justify-between  min-w-32 " >
        <div>
            <p className="text-xs text-light_grey_text mb-2" >{name} </p>
            <h3 className="text-lg lg:text-xl lg:text-4xl" >{value} <span className="text-lg" >{unit || ''}</span> </h3>
        </div>
        <div>
            { !!icon && 
            <img className="md:h-14 md:w-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 w-10 h-10"  src={icon} alt={name} /> }
        </div>
    </div>
)

export default SmallCard