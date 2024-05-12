import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { CForm, CCol, CFormInput, CButton } from '@coreui/react'

const BatchForm = () => {
  const [batchData, setBatchData] = useState({
    batchId: '',
    batchName: '',
    batchSize: '',
    batchTrees: '',
  })
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target
    setBatchData({
      ...batchData,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await Axios.post('http://localhost:1337/api/createbatch', batchData)
      console.log(response.data)
      navigate('/batches/batch')
    } catch (e) {
      console.log(e)
    }
  }
  function handleReturnPP(event) {
    navigate('/batchs/batch')
  }

  return (
    <CForm className="row g-3" onSubmit={handleSubmit}>
      <CCol md={12}>
        <CFormInput
          type="text"
          id="batchId"
          name="batchId"
          label="ID"
          value={batchData.batchId}
          onChange={handleChange}
        />
      </CCol>
      <CCol>
        <CFormInput
          type="text"
          id="batchName"
          name="batchName"
          label="Name"
          value={batchData.batchName}
          onChange={handleChange}
        />
      </CCol>
      <CCol>
        <CFormInput
          type="number"
          id="batchSize"
          name="batchSize"
          label="Size"
          value={batchData.batchSize}
          onChange={handleChange}
        />
      </CCol>
      <CCol>
        <CFormInput
          type="number"
          ide="batchTrees"
          name="batchTrees"
          label="Trees"
          value={batchData.batchTrees}
          onChange={handleChange}
        />
      </CCol>
      <CCol xs={6} className="text-left">
        <CButton onClick={handleSubmit} color="primary" type="submit">
          Save
        </CButton>
      </CCol>
      <CCol xs={6} className="text-right">
        <CButton onClick={handleReturnPP} color="secondary">
          Cancel
        </CButton>
      </CCol>
    </CForm>
  )
}

export default BatchForm
