import React from 'react'
import FeatBar from './FeatBar'
import DataTable from './DataTable'
import '../styles/Mail.css'
import InputForm from './InputForm'
import Editor from './Editor'

const Mail = () => {
  return (
    <div className='mail'>
        <FeatBar />
        <InputForm />
        <Editor />
        <DataTable />
    </div>
  )
}


export default Mail