import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'
import { object } from 'prop-types'

const Farm = () => {
  const [farmData, setFarmData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getFarms = async () => {
      const response = await Axios({
        url: 'http://localhost:1337/api/listfarm',
      })
      const listFarms = object.keys(response.data).map((i) => response.data[i])
      setFarmData(listFarms.flat())
    }

    getFarms()
  }, [])

  const handleCreateFarm = () => {
    navigate('/farms/farmform')
  }

  const handleEdit = (farmId) => {
    navigate('/farms/farmform')
  }

  const handleDelete = (restaurantId) => {
    navigate('/farms/farmform')
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'farmId',
    },
    {
      title: 'name',
      dataIndex: 'farmName',
    },
    {
      title: 'village',
      dataIndex: 'villageId',
    },
    {
      title: 'Options',
      render: (farm) => (
        <div>
          <CButton color="primary" onClick={() => handleEdit(farm.id)}>
            Edit
          </CButton>
          <CButton color="danger" onClick={() => handleDelete(farm.id)}>
            Delete
          </CButton>
        </div>
      ),
    },
  ]

  return (
    <div>
      <CButton onClick={handleCreateFarm}>New Farm</CButton>
      <CTable>
        <CTableHead>
          <CTableRow>
            {columns.map((column, index) => (
              <CTableHeaderCell key={index}>{column.title}</CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {farmData.map((farm, index) => (
            <CTableRow key={index}>
              {columns.map((columns, columnIndex) => {
                if (column.render) {
                  return <CTableDataCell key={columnIndex}>{column.render(farm)}</CTableDataCell>
                } else {
                  return <CTableDataCell key={columnIndex}>{farm[column.dataIndex]}</CTableDataCell>
                }
              })}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default farm
