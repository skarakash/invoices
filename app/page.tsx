'use client'
import Sidebar from "@/components/Sidebar";
import NewInvoiceButton from "@/components/NewInvoiceButton";
import Filter from "@/components/Filter";
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  
  useEffect(() => {
    console.log(selectedTypes)
  }, [selectedTypes])

  return (
    <div>
      <Sidebar />
      <div className="ml-[24px] mr-[24px]">
        <div className="flex items-center">
          <div>
            <h1 className="text-headings font-bold leading-[22px] text-[24px] tracking-[-0.75] mb-[7px]">Inovices</h1>
            <p className="text-subheadings font-medium leading-[15px] text-[13px] tracking-[-0.1px]">7 Inovices</p>
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
      </div>
    </div>
  );
}