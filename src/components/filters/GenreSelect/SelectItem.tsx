import React, {FC} from "react";

interface SelectItemProps{
    value: string;
}

const SelectItem: FC<SelectItemProps> = ({value}) => {
    return(
        <option value={value}>{value}</option>
        )
}
export default SelectItem