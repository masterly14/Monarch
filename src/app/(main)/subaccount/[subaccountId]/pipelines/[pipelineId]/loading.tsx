import LoadingPage from '@/components/global/loading-page'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='-mt-8 h-screen'>
        <LoadingPage/>
    </div>
  )
}

export default loading