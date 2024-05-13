import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import { CForm, CCol, CFormInput, CButton } from '@coreui/react'

const BatchEditForm = () => {
  const { batchId } = useParams()
  const [batchData, setBatchData] = useState({
    batchId: '',
    batchName: '',
    batchSize: '',
    batchTrees: '',
  })
  const navigate = useNavigate()
  useEffect(() => {
    const getBatch = async () => {
      const response = await Axios({ url: `http://localhost:1337/api/getbatch/${batchId}` })
      const batch = response.data.data
      setBatchData(batch)
    }
    getBatch()
  })
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
      const response = await Axios.put(
        `http://localhost:1337/api/updatebatch/${batchId}`,
        batchData,
      )
      navigate('/batches/batch')
    } catch (e) {
      console.log(e)
    }
  }
  function handleReturnPP(event) {
    navigate('/batches/batch')
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
export default BatchEditForm
