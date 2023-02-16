import React from 'react'
import FeatBar from './FeatBar'
import DataTable from './DataTable'
import '../styles/Mail.css'
import InputForm from './InputForm'

const Mail = () => {
  return (
    <div className='mail'>
        <FeatBar />
        <InputForm />
        <DataTable />
    </div>
  )
}


export default Mail