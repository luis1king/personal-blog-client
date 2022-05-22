import { Modal } from 'antd'
import React from 'react'

export const Modals = (props) => {

  const {children, isVisibleModal, setIsVisibleModal, modalTitle , width} = props
  
  return (
    <Modal 
    title={modalTitle} 
    visible={isVisibleModal} 
    onCancel={()=>setIsVisibleModal(false)}
    width = {width}>
    {children}
  </Modal>
  )
}
