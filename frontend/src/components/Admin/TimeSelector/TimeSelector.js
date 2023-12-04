// // This Stack Overflow snippet demo uses UMD modules directly
// import { useMemo, useState } from "react";

// function TimeSelector() {
//   const [rawTime, setRawTime] = useState('00:00');


//   return (
//     <div>
//       <input
//         className="time-input"
//         type="time"
//         onChange={(ev) => setRawTime(ev.target.value)}
//         value={rawTime}
//       />
//     </div>
//   );
// }


// export default TimeSelector;

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function TimeSelector() {

  const currentDate = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >

        <DemoItem >
          <DateTimePicker defaultValue={dayjs(currentDate)} />
        </DemoItem>

      </DemoContainer>
    </LocalizationProvider>
  )
}


export default TimeSelector;