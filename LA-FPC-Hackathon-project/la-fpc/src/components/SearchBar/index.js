import React from "react"
import { useState } from "react"
import { TextField } from "@material-ui/core"
function SearchBar(props) {
  const [data, setData] = useState({})
  const [filtered, setFiltered] = useState([])
  const handleChange = e => {
    getData(e.target.value)
  }
  const getData = async data => {
    console.log(data, props.sustainableData, props.searching.sustainableData)
    if (props.searching.sustainableData) {
      const filly = props.searching.sustainableData.filter((elem, i) => {
        return elem.indicator.toLowerCase().includes(data)
      })
      console.log(filly, "fill data")
      props.set(filly)
    }
  }
  return (
    <div>
      {/* <TextField
        id="full-width-text-field"
        label="Search Data"
        width={1000}
        onChange={handleChange}
        name="data"
      /> */}
      <input
        label="Search Data"
        onChange={handleChange}
        name="data"
        style={{
          width: "40vw",
          borderRadius: "10px",
          height: "2rem",
          fontSize: "24px",
          marginBottom: "2rem"
        }}
        placeholder="search by indicator"
      />
    </div>
  )
}

export default SearchBar
