'use client'
import CustomModal from '@/components/global/custom-modal'
import FileUpload from '@/components/global/file-upload'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/model-provider'
import React from 'react'

type Props = {}
const handleFileChange = () => {
    console.log('handle file change')
}

const ImportContactButton = (props: Props) => {
    const {setOpen} = useModal()
   
    const handleImportContact = async () => {
        setOpen(
            <CustomModal
            title='Import your contacts'
            subheading='You can import you contacts from Google Sheets or Excel'>
                <input type="file"  accept='.csv'
                />
            </CustomModal>
        )
    }
  return <Button onClick={handleImportContact}>Import Contacts</Button>
  
}

export default ImportContactButton