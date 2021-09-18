import {useState,useRef} from 'react';
import { TextField} from '@material-ui/core';

export default function CustomDatePicker() {
  const [date , setDate] = useState("2021-09-09");
  const dateInput =useRef();  
  const changeDate = (e) => {
      setDate();
  };
  return (
    <form >
      <TextField
        ref={dateInput}
        id="date"
        label="날짜"
        type="date"
        defaultValue={date}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={changeDate}
      />
    </form>
  );
}