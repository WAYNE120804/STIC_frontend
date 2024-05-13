import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { CForm, CCol, CFormInput, CFormSelect, CButton } from '@coreui/react'

const FarmForm = () => {
  const [farmData, setFarmData] = useState({
    farmName: '',
    villageId: '',
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
      const response = await Axios.post('http://localhost:1337/api/createfarm' + farmData)
      console.log(response.data)
      Navigate('/farms/farm')
    } catch (e) {
      console.log(e)
    }
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
      <CCol md={12}>
        <CFormInput
          type="text"
          id="villageId"
          name="villagueId"
          label="villageId"
          value={farmData.villageId}
          onChange={handleChange}
        />
      </CCol>
      <CCol xs={6}>
        <CButton color="primary" type="submit">
          Save
        </CButton>
      </CCol>
      <CCol xs={6}>
        <CButton color="secondary" onClick={handleReturn}>
          Cancel
        </CButton>
      </CCol>
    </CForm>
  )
}

export default FarmForm
