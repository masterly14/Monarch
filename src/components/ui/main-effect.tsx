import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import EffectLogo from './effect-logo'

const MainEffect = () => {
  return (
    <div className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
            <div id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
                <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-6xl font-black md:text-8xl'>Welcome</h1>
                        <h2 className='text-md md:text-6xl text-4xl'>To Monarrc</h2>
                    </div>
                    <p className='max-w-md text-sm md:text-base text-zinc-500'>Lets start by creating your Virtual Agency. This is the starting point to be able to create many more things, go ahead!
                    </p>
                    <div className='w-full flex items-center justify-center md:justify-start gap-4'>

                        <Button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>
                            <Link href="#">More Info</Link>
                        </Button>
                    </div>
                </div>

                <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative'>
                    <EffectLogo />
                </div>
            </div>
            </div>
  )
}

export default MainEffect