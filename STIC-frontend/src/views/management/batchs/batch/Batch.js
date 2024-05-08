import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios  from 'axios';
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Button } from '@coreui/coreui'
import { func } from 'prop-types'

const Batch=()=>{
    const[batchData, setBatchData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const getBatchs=async()=>{
            const response=await Axios({
                url:''
            });
            const listBatchs=Object.keys(response.data).map(i=>response.data[i]);
            setBatchData(listBatchs.flat());
        }
        getBatchs();
    },[]);
    function handleCreateBatch(event){
        navigate('/batchs/batchform');
    }
    const handleDisableBatch= async(batchId)=>{
        try{
            var url=""+batchId;
            const response= await Axios.put(url);
            window.location.reload();
        }
        catch(e){
            console.log(e);
        }
    }
    function handleEdit(batchId){

    }
    const columns=[
        {
            title:'ID',
            dataIndex:'batchId'
        },
        {
            title:'Name',
            dataIndex:'batchName'
        },
        {
            title:'Size',
            dataIndex:'batchSize'
        },
        {
            title:'Trees',
            dataIndex:'batchTrees'
        },
        {
            title: 'Options',
            dataIndex: 'Options'
        }
    ]
    return(
        <div>
            <CButton onClick={handleCreateBatch}>New Batch</CButton>
            <CTable>
                <CTableHead>
                    <CTableRow>
                        {columns.map((column, index)=>(
                            <CTableHeaderCell key={index}>{column.title}</CTableHeaderCell>
                        ))}
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {batchData.map((batch, index)=>(
                    <CTableRow key={index}>
                        {columns.map((column, columnIndex)=>(
                        <CTableDataCell key={columnIndex}>
                            {column.dataIndex==='Options'?(
                                <>
                                    <CButton onClick={handleEdit}color="primary">Edit</CButton>
                                    <CButton onClick={handleDisable} color="danger" style={{ color: 'white' }}>Delete</CButton>
                                </>
                            ):(
                                 batch[column.dataIndex]
                            )}
                            </CTableDataCell>
                            ))}
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </div>
    )
}

export default Batch;