"use client";

import { useState } from "react";
import NewDonationModal from "./components/newDonationModal";
import ONGListModal from "./components/ONGListModal";
import ViewDonationModal from "./components/viewDonationModal";
import { TableRow } from "@/components/TableRow";

const Doar = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isONGListModalOpen, setIsONGListModalOpen] = useState(false);
  const [isViewDonationModal, setIsViewDonationModal] = useState(false);

  const toggleList = () => {
    setIsDonationModalOpen(false);
    setIsONGListModalOpen(true);
  };

  const toggleDonation = () => {
    setIsDonationModalOpen(true);
    setIsONGListModalOpen(false);
  };

  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col justify-between relative">
      <main className="flex-1 pt-20">
        <div className="pt-14 flex flex-col items-center bg-white w-full h-full">
          <h1 className="text-black text-4xl font-bold">Sopão do Curry</h1>
          <p className="text-black text-xl pb-12 pt-4">Lista de Doações</p>

          <table className="w-4/5">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  STATUS
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  INFORMAÇÕES DA ONG
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  SOBRE A DOAÇÃO
                </th>
                <th className="py-3 border-b-2 border-gray-300 text-right text-sm font-semibold">
                  <button
                    onClick={() => setIsDonationModalOpen(true)}
                    className="bg-orange-500 text-white text-base font-semibold py-2 px-6 rounded hover:bg-orange-600"
                  >
                    Nova Doação
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow 
                status="em-aberto"
                companyName="Amigos do Schappo"
                companyCnpj="11.903.554/0001-15"
                type="Perecíveis"
                data="15/10/2024"
                setIsViewDonationModal={setIsViewDonationModal}
              />
            </tbody>
          </table>
        </div>
        <NewDonationModal
          isOpen={isDonationModalOpen}
          onClose={() => setIsDonationModalOpen(false)}
          toggleList={toggleList}
        />
        <ONGListModal
          isOpen={isONGListModalOpen}
          onClose={() => setIsONGListModalOpen(false)}
          toggleDonation={toggleDonation}
        />
        <ViewDonationModal
          isOpen={isViewDonationModal}
          onClose={() => setIsViewDonationModal(false)}
        />
      </main>
    </div>
  );
};

export default Doar;
