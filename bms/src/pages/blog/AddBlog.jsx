import React from 'react'
import Navbar from '../../components/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/card/form/Form'

const AddBlog = () => {
  return (
    <>
      <Layout>
       <Form type='Create'/>
      </Layout>
    </>
  )
}

export default AddBlog