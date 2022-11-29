// import React, {FC, useState} from "react";
// // import './YearSelect.scss'
// import Slider from '@material-ui/core/Slider';
// import './YearSelect.scss'
//
//
// const SortSelect = () => {
//
//     const [year, setYear] = useState<number[]>([2000,2022]);
//
//
//
//     const handleChange = (event: Event, newValue: number | number[]) => {
//         setYear(newValue as number[]);
//         // console.log(newValue)
//     };
//
//     const marks = [
//         {
//             value: 2000,
//             label: '2000',
//         },
//         {
//             value: 2007,
//             label: '2007',
//         },
//         {
//             value: 2016,
//             label: '2010',
//         },
//         {
//             value: 2022,
//             label: '2022',
//         },
//     ];
//
//     return(
//         <div className="price-range-slider" >
//             <Slider
//                 getAriaLabel={() => 'Temperature range'}
//                 value={year}
//                 min={2000}
//                 max={2022}
//                 color='secondary'
//                 marks={marks}
//                 onChange={handleChange}
//                 valueLabelDisplay="on"
//             />
//
//         </div>
//     )
// }
// export default SortSelect