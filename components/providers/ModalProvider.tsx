/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */

"use client"

// import dynamic from "next/dynamic"
import React, { createContext, useContext, useState } from "react"

export const MODAL_TYPES = {
  Create_Product_MODAL: "CreateProductModal",
  Edit_Prodduct_MODAL: "EditProductModal",
  Create_Tags_Modal: "CreateTagsModal",
  Create_Category_MODAL: "CreateCategoryModal",
  Create_Brand_Modal: "CreateBrandModal",
  Create_Case_Study_Modal: "CreateCaseStudyModal",
  Show_Order_Details_Modal: "ShowOrderDetailsModal",
  Order_Status_Update_Modal: "OrderStatusUpdateModal",
  Delete_Modal: "DeleteModal",
  Delete_Brand_Modal: "DeleteBrandModal",
  Delete_Category_MODAL: "DeleteCategoryModal",
}
// const CreateCaseStudyModal = dynamic(() => import("./CreateCaseStudyModal"), {
//   ssr: false,
// })

const MODAL_COMPONENTS: any = {
  // [MODAL_TYPES.Create_Product_MODAL]: CreateProductModal,
  
}
type ContextType = {
  showModal: (modalType: any, modalProps?: any) => void
  hideModal: () => void
  store: any
}

const initalState: ContextType = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
}
const GlobalModalContext = createContext(initalState)
export const useGlobalModalContext = () => useContext(GlobalModalContext)
const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, setStore] = useState({ modalType: null, modalProps: {} })
  const showModal = React.useCallback(
    (modalType: any, modalProps: any) => {
      setStore({
        ...store,
        modalType, // Replace 'modalType' with 'MODAL_TYPES.AUTH_LOGIN_MODAL'
        modalProps, // Add an initializer for modalProps
      })
    },
    [setStore, store],
  )

  const hideModal = React.useCallback(() => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    })
  }, [setStore, store])

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[store.modalType || ""]
    // console.log(ModalComponent, 'ModalComponent');
    if (!store.modalType || !ModalComponent) {
      return null
    }
    return <ModalComponent id="global-modal" {...store.modalProps} />
  }

  const contextValue = React.useMemo(
    () => ({ store, showModal, hideModal }),
    [store, showModal, hideModal],
  )

  return (
    <GlobalModalContext.Provider value={contextValue}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  )
}

export default ModalProvider
