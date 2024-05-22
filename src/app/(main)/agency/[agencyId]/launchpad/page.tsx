import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { db } from '@/lib/db'
import { CheckCircleIcon, Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {
    params: {
        agencyId: string
    }

    searchParams: { code: string }
}

const LaunchPadPage = async ({ params, searchParams }: Props) => {

    const agencyDetails = await db.agency.findUnique({
        where: { id: params.agencyId }
    })

    if (!agencyDetails) return

    const allDetails =
        agencyDetails.address &&
        agencyDetails.address &&
        agencyDetails.agencyLogo &&
        agencyDetails.city &&
        agencyDetails.companyEmail &&
        agencyDetails.companyEmail &&
        agencyDetails.country &&
        agencyDetails.name &&
        agencyDetails.state &&
        agencyDetails.state &&
        agencyDetails.zipCode

    return (
        <div className='flex flex-coljustiy-center items-center '>
            <div className='w-full h-full'>
                <Card className='border-none'>
                    <CardHeader>
                        <CardTitle>Empecemos</CardTitle>
                        <CardDescription>Siga los pasos a continuacion para configurar su Agencia</CardDescription>

                    </CardHeader>
                    <CardContent className='flex flex-col gap-4'>
                        <div className='flex justify-between items-center w-full border p-4 rounded-lg gap-2'>
                            <div className='flex md:items-center gap-4 flex-col md:!flex-row'>
                                <Image src="/stripelogo.png" alt='app logo object-contain'
                                    height={80} width={80} className='rounded-md' />
                            </div>
                            <p>Connecta tu cuenta de Stripe para aceptar pagos y hacer seguimiento en el Dashboard</p>
                            <Button>Empezar</Button>

                        </div>
                        <div className='flex justify-between items-center w-full border p-4 rounded-lg gap-2'>
                            <div className='flex md:items-center gap-4 flex-col md:!flex-row'>
                                <Image src={agencyDetails.agencyLogo} alt='app logo object-contain'
                                    height={80} width={80} className='rounded-md' />
                            </div>
                            <p>Completa los detalles de tu Agencia</p>
                            {allDetails ? (
                                <CheckCircleIcon size={50} className='text-primary p-2 flex-shrink-0' />
                            ) : (
                                <Link className="bg-primary py-2 px-4 rounded-md text-white" href={`/agency/${params.agencyId}/settings`}>Comenzar</Link>
                            )}

                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default LaunchPadPage