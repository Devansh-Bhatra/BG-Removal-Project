import React from 'react'
import Header from '../Components/Header'
import Steps from '../Components/steps'
import Bgslider from '../Components/Bgslider'
import Testimonials from '../Components/Testimonials'
import Upload from '../Components/Upload'


const Home = () => {
  return (
    <div>
      <Header></Header>
      <br />
      <Steps></Steps>
     <Bgslider></Bgslider>
     <Testimonials></Testimonials>
     <br />
     <Upload></Upload>
    </div>
  )
}

export default Home
