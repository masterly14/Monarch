import BlurPage from "@/components/global/blur-page";
import { getFunnel } from "@/lib/queries";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { funnelId: string; subaccountId: string };
};

const FunnelPage = async ({ params }: Props) => {
  const funnelPages = await getFunnel(params.funnelId);
  if (!funnelPages)
    return redirect(`/subaccount/${params.subaccountId}/funnels`);
  return (
    <BlurPage>
      <Link
        href={`/subaccount/${params.subaccountId}/funnels`}
        className="flex justify-between gap-4 mb-4 text-muted-foreground"
      >
        Back
      </Link>
      <h1 className="text-3xl mb-8">{funnelPages.name}</h1>
    </BlurPage>
  );
};

export default FunnelPage;
