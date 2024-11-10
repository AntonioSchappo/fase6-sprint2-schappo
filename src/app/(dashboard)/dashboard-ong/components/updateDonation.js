"use client";
import { useDonate } from "@/hooks/useDonate";

import Image from "next/image";

// PARA CANCELAR A DOAÇÃO
export default function UpdateDonation({ isOpen, onClose, donationID }) {
  if (!isOpen) return null;
  const { GetDonation, UpdateDonationStatus } = useDonate();
  const donation = GetDonation(donationID);
  
  const handleConclude = () => {
    UpdateDonationStatus(donationID, "concluido");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-[24px] w-[678px] p-12 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-[#FF9800]"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-[32px] font-bold text-[#FF9800] mb-4 text-center">
          Atualizar doação
        </h2>

        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/update-donation.png"
            height={120}
            width={183}
            alt="doação de comida em desenho"
            className="text-center mb-8"
          />

          <div className="flex items-center gap-3">
            <div className="circulo-status w-[50px] h-[50px] rounded-full border-2 border-[#FF9800] bg-[#FF9800]"></div>

            <div className="circulo-status w-[20px] h-[20px] rounded-full border-2 border-[#FF9800] bg-[#FF9800]"></div>
            <div className="circulo-status w-[20px] h-[20px] rounded-full border-2 border-[#FF9800] bg-[#FF9800]"></div>
            <div className="circulo-status w-[20px] h-[20px] rounded-full border-2 border-[#FF9800] bg-[#FF9800]"></div>

            <div className="circulo-status w-[50px] h-[50px] rounded-full border-2 border-[#FF9800] bg-[#FF9800]"></div>

            <div className="circulo-status w-[20px] h-[20px] rounded-full border-2 border-[#FF9800]"></div>
            <div className="circulo-status w-[20px] h-[20px] rounded-full border-2 border-[#FF9800]"></div>
            <div className="circulo-status w-[20px] h-[20px] rounded-full border-2 border-[#FF9800]"></div>

            <div className="circulo-status w-[50px] h-[50px] rounded-full border-2 border-[#FF9800]"></div>
          </div>
          <div className="w-[384px] flex items-center text-black justify-between mb-8">
            <p className="">Em aberto</p>
            <p className="">Processando</p>
            <p className="">Concluído</p>
          </div>
        </div>

        <div className="text-black pl-[30px] mb-12">
          <p className="font-bold">INFORMAÇÕES DO ESTABELECIMENTO</p>
          <p className="font-semibold">{donation.companyName}</p>
          <p className="">{donation.companyPhone}</p>
          <p className="">{donation.companyAddress}</p>
          <p className="font-semibold"> {new Date(donation.data).toLocaleDateString('pt-BR')} - {donation.time}</p>
        </div>

        <div className="mb-4 flex items-center justify-end gap-4 pr-[10px]">
          <button className="bg-white font-semibold text-[#FF9800] border border-solid border-[#FF9800] py-2 px-6 rounded hover:text-orange-600 hover:border-orange-600">
            IMPRIMIR
          </button>
          {
            donation.status === "em-aberto" && (
              <button
                className="bg-[#FF9800] font-semibold text-white py-2 px-8 rounded hover:bg-orange-600"
                onClick={handleConclude}>
                CONCLUIR DOAÇÃO
              </button>
            )
          }

        </div>
      </div>
    </div>
  );
}
