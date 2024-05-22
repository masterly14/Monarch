import React, { Children } from 'react'
import BlurPage from '@/components/global/blur-page'


const PipeLinesLayout = ({children}: {children:React.ReactNode}) => {

  return <BlurPage>{children}</BlurPage>
}

export default PipeLinesLayout