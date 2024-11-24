import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = () => {
  return (
    <section className='bg-blu-50 px-4 py-6'>
        <JobListings isHome = {false} />
    </section>
  )
}

export default JobsPage
