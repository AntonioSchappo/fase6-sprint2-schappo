"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NewDonationModal from "./components/newDonationModal";
import ONGListModal from "./components/ONGListModal";
import ViewDonationModal from "./components/viewDonationModal";
import { Header } from "@/components/Header";

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
              <tr className="bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center">
                  <span className="bg-blue-500 h-3 w-3 rounded-full inline-block mr-2"></span>
                  Processando
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <b>Amigos do Schappo</b>
                  <p>(11) 99999-9999</p>
                  <p>Rua Libre, 4571</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <b>Perecíveis</b>
                  <p>14kg</p>
                  <p>15/10/2024 - 15h30</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                  <button className="text-orange-500 hover:text-orange-600">
                    <Image
                      onClick={() => setIsViewDonationModal(true)}
                      src="/assets/images/eye.svg"
                      height={25}
                      width={25}
                      alt="vizualizar"
                    />
                  </button>
                </td>
              </tr>

              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center">
                  <span className="bg-green-500 h-3 w-3 rounded-full inline-block mr-2"></span>
                  Concluído
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <b>Amigos do Schappo</b>
                  <p>(11) 99999-9999</p>
                  <p>Rua Libre, 4571</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <b>Perecíveis</b>
                  <p>14kg</p>
                  <p>15/10/2024 - 15h30</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                  <button className="text-orange-500 hover:text-orange-600">
                    <Image
                      onClick={() => setIsViewDonationModal(true)}
                      src="/assets/images/eye.svg"
                      height={25}
                      width={25}
                      alt="vizualizar"
                    />
                  </button>
                </td>
              </tr>

              <tr className="bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center">
                  <span className="bg-red-500 h-3 w-3 rounded-full inline-block mr-2"></span>
                  Recusado
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <b>Amigos do Schappo</b>
                  <p>(11) 99999-9999</p>
                  <p>Rua Libre, 4571</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <b>Perecíveis</b>
                  <p>14kg</p>
                  <p>15/10/2024 - 15h30</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                  <button className="text-orange-500 hover:text-orange-600">
                    <Image
                      onClick={() => setIsViewDonationModal(true)}
                      src="/assets/images/eye.svg"
                      height={25}
                      width={25}
                      alt="vizualizar"
                    />
                  </button>
                </td>
              </tr>
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
