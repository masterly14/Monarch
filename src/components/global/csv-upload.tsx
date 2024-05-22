import React from 'react'
import { UploadDropzone } from '@/lib/uploadgthing'
import { FileIcon } from 'lucide-react'

type Props = {
    value?: string
    onChange: (file: File | null) => boolean
}

const CSVUplodad = ({value, onChange}:Props) => {
    const type = value?.split('').pop()

    if (value) {
        return (
            <div className='flex flex-col justify-center items-center'>
                <div className='relative flex items-center p-2 mt-2 rounded-md bg-background/10'>
                    <FileIcon>
                        
                    </FileIcon>
                </div>
            </div>

        )
    }
  return (
    <div>CSVUplodad</div>
  )
}

export default CSVUplodad