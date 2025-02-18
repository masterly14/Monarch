import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { getAuthUserDetails } from "@/lib/queries";
import React from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList, CommandItem } from "@/components/ui/command";
import { SubAccount } from "@prisma/client";

import Link from "next/link";
import Image from "next/image";
import { AlertDescription } from "@/components/ui/alert";
import DeleteButton from "./_components/delete-button";
import CreateSubaccount from "./_components/create-subaccount";


type Props = {
    params: { agencyId: string }
}

const AllSubaccountsPage = async ({ params }: Props) => {
    const user = await getAuthUserDetails()
    if (!user) return
    return <AlertDialog>
        <div className="flex flex-col">
            <CreateSubaccount 
            user={user}
            id={params.agencyId}
            className="w-[200px] self-end m-6"/>
            <Command className="rounded-lg bg-transparent">
                <CommandInput placeholder="Buscar Cuenta.." />
                <CommandList>
                    <CommandEmpty>Sin resultados</CommandEmpty>

                    <CommandGroup heading="Sub Cuentas">
                        {!!user.Agency?.SubAccount.length ? user.Agency.SubAccount.map((subaccount: SubAccount) => (
                            <CommandItem key={subaccount.id}
                                className="h-32 !bg-background my-2 text-primary border-[1px] border-border p-4 rounded-lg hover:!bg-background cursor-pointer transition-all">
                                <Link href={`/subaccount/${subaccount.id}`} className="flex gap-4 w-full h-full">

                                    <div className="relative w-32">
                                        <Image src={subaccount.subAccountLogo} alt="logosubaccount"
                                            fill
                                            className="rounded-md object-contain bg-muted/50 p-4"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="flex flex-col">
                                            {subaccount.name}
                                            <span className="text-muted-foreground text-xs">
                                                {subaccount.address}
                                            </span>
                                        </div>
                                    </div>

                                </Link>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        size={'sm'}
                                        variant={'destructive'}
                                        className="text-red-600 w-20 hover:bg-red-600 hover:text-white">
                                        Eliminar
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="text-left">
                                            ¿Esta absolutamente seguro?
                                        </AlertDialogTitle>

                                        <AlertDialogDescription className="text-left">
                                            Esta acción no se podra revertir y perdera toda la información vinculada a esta Subcuenta.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter className="flex items-center">
                                        <AlertDialogCancel className="mb-2">
                                            Cancelar
                                        </AlertDialogCancel>
                                        <AlertDialogAction className="bg-destructive hover:bg-destructive">
                                            <DeleteButton subaccountId={subaccount.id}/>
                                        </AlertDialogAction>
                                    </AlertDialogFooter>

                                </AlertDialogContent>
                            </CommandItem>
                        )) : <div className="text-muted-foreground text-center p-4">No tienes Subcuentas</div>}

                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    </AlertDialog>

}

export default AllSubaccountsPage