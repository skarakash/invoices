'use client'
import Sidebar from "@/components/Sidebar";
import NewInvoiceButton from "@/components/NewInvoiceButton";
import Filter from "@/components/Filter";
import Image from "next/image";
import empty from '@/public/empty.svg'
import { useEffect, useState } from 'react';

interface Invoice {
  id: string
  status: string
  paymentDue: string
  clientName: string
  total: number
}
export default function Home() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [invoices, setInvoices] = useState<Invoice[]>([])


  useEffect(() => {
    console.log(selectedTypes)
  }, [selectedTypes])

  return (
    <div className="h-screen flex flex-col">
      <Sidebar />
      <div className="ml-[24px] mr-[24px] grow flex flex-col">
        <div className="flex items-center">
          <div>
            <h1 className="text-headings font-bold leading-[22px] text-[24px] tracking-[-0.75] mb-[7px]">Inovices</h1>
            {invoices.length == 0 && <p className="text-subheadings font-medium leading-[15px] text-[13px] tracking-[-0.1px]">No invoices</p>}
          </div>
          <div className="ml-auto">
            <Filter
              setSelectedTypes={setSelectedTypes}
              selectedTypes={selectedTypes}
            />
          </div>
          <div className="ml-[18px]">
            <NewInvoiceButton />
          </div>
        </div>
        {invoices.length === 0 && <div className="grow flex flex-col justify-center mt-[0] m-auto text-center">
          <Image
            src={empty}
            width={193}
            height={160}
            alt="no items image"
            className="mb-[42px] md:w-[240px] md:h-[200px]"
          />
          <h2 className="font-bold leading-[22px] text-[24px] tracking-[-0.75px] mb-[23px]">There is nothing here</h2>
          <p className="text-subheadings leading-[15px] text-[13px] tracking-[-0.1px]">Create an invoice by clicking the</p>
          <p className="text-subheadings leading-[15px] text-[13px] tracking-[-0.1px]"><span className="font-bold">New&nbsp;</span>button and get started</p>
        </div>
        }
      </div>
    </div>
  );
}

