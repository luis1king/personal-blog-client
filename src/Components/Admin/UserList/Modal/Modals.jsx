import { Modal } from 'antd'
import React from 'react'

export const Modals = (props) => {

  const {children, isVisibleModal, setIsVisibleModal, modalTitle} = props
  
  return (
    <Modal 
    title={modalTitle} 
    visible={isVisibleModal} 
    onCancel={()=>setIsVisibleModal(false)}>
    {children}
  </Modal>
  )
}
