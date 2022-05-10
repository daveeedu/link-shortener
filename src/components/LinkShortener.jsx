import React, { useState } from 'react'
import { Button} from 'react-bootstrap'

const LinkShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue( "" );
  }


  return (
    <div className="inputContainer my-5">
       <input className="mx-4 p-3 mt-5 text-secondary " value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Paste a link to shorten it."/>
       <Button className="bg-white" onClick={handleClick} variant="outline-success">Shorten</Button>
    </div>
  )
}

export default LinkShortener