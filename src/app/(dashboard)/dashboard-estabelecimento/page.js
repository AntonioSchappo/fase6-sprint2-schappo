"use client";

import { useState } from "react";
import NewDonationModal from "./components/newDonationModal";
import ONGListModal from "./components/ONGListModal";
import ViewDonationModal from "./components/viewDonationModal";
import { TableRow } from "@/components/TableRow";
import { CreateDonation } from "@/components/Modals/CreateDonation";
import { useDonate } from "@/hooks/useDonate";
import { useLogin } from "@/hooks/useLogin";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Doar = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isONGListModalOpen, setIsONGListModalOpen] = useState(false);
  const [isViewDonationModal, setIsViewDonationModal] = useState(false);
  const [isViewDonationId, setIsViewDonationId] = useState("");

  const { getItem } = useLocalStorage("businessLogged");
  const business = getItem();

  const { GetDonationsByCompany } = useDonate();
  const allDonations = GetDonationsByCompany(business.cnpj);

  const toggleList = () => {
    setIsDonationModalOpen(false);
    setIsONGListModalOpen(true);
  };

  const registerNewDonation = () => {
    setIsDonationModalOpen(true);
    setIsONGListModalOpen(false);
  };

  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col justify-between relative">
      <main className="flex-1 pt-20">
        <div className="pt-14 flex flex-col items-center bg-white w-full h-full">
          <h1 className="text-black text-4xl font-bold">
            {business.fantasyName}
          </h1>
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
              {allDonations.length > 0 ? (
                allDonations.map((donation) => (
                  <TableRow
                    key={donation.donationID}
                    status={donation.status}
                    ongName={donation.ongName}
                    ongEmail={donation.ongEmail}
                    type={donation.type}
                    data={donation.data}
                    time={donation.time}
                    donationID={donation.donationID}
                    setIsViewDonationModal={setIsViewDonationModal}
                    setIsViewDonationId={setIsViewDonationId}
                  />
                ))
              ) : (
                <tr className="text-center text-2xl text-black font-semibold">
                  <td>Nenhuma doação encontrada</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <CreateDonation
          isOpen={isDonationModalOpen}
          onClose={() => setIsDonationModalOpen(false)}
          toggleList={toggleList}
        />
        <ONGListModal
          isOpen={isONGListModalOpen}
          onClose={() => setIsONGListModalOpen(false)}
          toggleDonation={registerNewDonation}
        />
        <ViewDonationModal
          isOpen={isViewDonationModal}
          donationID={isViewDonationId}
          onClose={() => setIsViewDonationModal(false)}
        />
      </main>
    </div>
  );
};

export default Doar;
