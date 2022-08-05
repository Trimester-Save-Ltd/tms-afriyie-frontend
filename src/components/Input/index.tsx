import SVGs from "helpers/SVGs";
import { useState } from "react"


type InputType ={
    name:String;
    type?:String;
    register:any;
    label:string;
    placeholder?: string;
    svg?:any;
    error:any;
    options: any;
    value?:any
}

type SelectType = {
    name: any;
    list: Array<Object>;
    label: string;
    placeholder?: string;
    options?: any;
    register: any;
    value?: any;
    noborder?: Boolean;
    error?: string;
    onChange?: any;
    defaultValue?: any;
  };


const Input = ({label="", options, register, name, type="text", value='', placeholder, error="", svg=''}:InputType) =>{

    const[visibility, setVisibility] = useState(false)

    return(
        <div className="relative">
            {label.length > 1 && <><label className="mb-4 lg:text-label_text " >{label}</label><br /></>}
            <div className="flex items-center pl-4 mt-2 mb-8 border rounded-2xl" >
                {!!svg && 
              <span className="mr-4  " >{svg}</span> }
              <input className=" w-full py-4 pl-2 outline-none rounded-r-2xl" defaultValue={value || ''} placeholder={placeholder} type={!visibility ? type : 'text'} {...register(name, {...options})} />

            </div>
            {
                type === "password" && <span className="cursor-pointer text-light_grey_text absolute top-12 right-4" onClick={() =>setVisibility(!visibility)} >{visibility ? "Hide" : "Show"}</span>
            }
            
            <p className="text-secondary text-xs -mt-7">{error}</p>
            <br />
        </div>
    )
}


export const Select = (
    {
      onChange,
      register,
      options,
      name,
      label = '',
      placeholder,
      list,
      value = '',
      defaultValue = '',
      noborder,
      error,
    }: SelectType,
    ref: any
  ) => (
    <div className="relative min-w-[120px]">
      {label.length > 1 && (
        <>
          <label className="mb-4 lg:text-label_text">{label}</label>
          <br />
        </>
      )}
      {label.length > 1 ? (
        <span className=" absolute top-12 right-4 ">{SVGs.arrow_down}</span>
      ) : (
        <span className=" absolute top-7 right-4 ">{SVGs.arrow_down}</span>
      )}
  
      <select
        {...register(name, { ...options })}
        className={`bg-[transparent] relative p-4 text-text-icon_background mt-2 rounded-md w-full ${
          noborder ? 'border-none my-0' : 'border'
        } `}
        name={name}
        defaultValue={defaultValue || value || ''}
        onChange={onChange}
      >
        {value === '' && (
          <option className="text-light_grey_text" hidden value="">
            {placeholder}
          </option>
        )}
        {list.map((data: any) => (
          <option key={data.id || data} value={data.id || data}>
            {data.name || data}
          </option>
        ))}
      </select>
      <p className="text-red text-xs mt-1 mb-8">{error}</p>
    </div>
  );
  


export default Input


