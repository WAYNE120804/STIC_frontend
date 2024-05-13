import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import { CForm, CCol, CFormInput, CButton } from '@coreui/react'

const farmEditForm = () => {
  const { farmId } = useParams()
  const [farmData, setFarmData] = useState({
    farmName: '',
    villageId: '',
  })
  const navigate = useNavigate()
  useEffect(() => {
    const getFarm = async () => {
      const response = await Axios({ url: `http://localhost:1337/api/updatefarm/${farmId}` })
      const farm = response.data.data
      setFarmData(farm)
    }
    getFarm()
  })
  function handleChange(event) {
    const { name, value } = event.target
    setFarmData({
      ...farmData,
      [name]: value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await Axios.put(`http://localhost:1337/api/updatefarm/${farmId}`, farmData)
      navigate('/farms/farm')
    } catch (e) {
      console.log(e)
    }
  }
  function handleReturnPP(event) {
    navigate('/farms/farm')
  }

  return (
    <CForm className="row g-3" onSubmit={handleSubmit}>
      <CCol md={12}>
        <CFormInput
          type="text"
          id="farmName"
          name="farmName"
          label="Name"
          value={farmData.farmName}
          onChange={handleChange}
        />
      </CCol>
      <CCol>
        <CFormInput
          type="text"
          id="villageId"
          name="villagueId"
          label="villageId"
          value={farmData.villageId}
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
export default farmEditForm
