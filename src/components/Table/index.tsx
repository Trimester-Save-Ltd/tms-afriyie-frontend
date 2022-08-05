export const TableHeader = ({ headers }: any) => (
    <tr className="text-grey_text border-b border-[#C3C9DA] bg-[#F9F9FB]">
      {headers.map((data: any, idx: number) => (
        <th key={idx} className={`px-4  text-left text-grey_text py-4 `}>
          {data}
        </th>
      ))}
    </tr>
  );
  

export const TableColumn = ({td}:any) => (
    <td className="px-4 text-left" >
        {td}
    </td>
)