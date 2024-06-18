import Hero from '@/components/Hero'
import Hero1 from '@/components/Hero1'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3'
import Hero4 from '@/components/Hero4'
import Hero5 from '@/components/Hero5'
import Hero6 from '@/components/Hero6'
import Hero7 from '@/components/Hero7'
import Headtop from '@/components/Layout/Headtop'
import MainHeader from '@/components/Layout/MainHeader'
import SearchForm from '@/components/SearchForm'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function index() {
  return (
    <div>
      <Headtop />
      <MainHeader/>
      <Hero/>
      <SearchForm/>
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Hero5/>
      <Hero6/>
      <Hero7/>
      <Testimonials/>
    </div>
  )
}

export default index
