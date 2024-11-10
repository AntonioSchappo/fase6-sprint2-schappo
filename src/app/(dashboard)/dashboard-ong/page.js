"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ViewDonationONG from "./components/viewDonationONG";
import UpdateDonation from "./components/updateDonation";
import { CreateDonation } from "@/components/Modals/CreateDonation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDonate } from "@/hooks/useDonate";
import { TableRow } from "@/components/TableRow";




const Doar = () => {
  const [isViewDonationONG, setIsViewDonationONG] = useState(false);
  const [isUpdateDonation, setUpdateDonation] = useState(false);
  const [isViewDonationId, setIsViewDonationId] = useState("");


  const { getItem } = useLocalStorage("ongLogged");
  const ong = getItem();

  const { GetDonationsByOng } = useDonate();
  const allDonations = GetDonationsByOng(ong.id);


  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col justify-between relative">

      <main className="flex-1 pt-20">
        <div className="pt-14 flex flex-col items-center bg-white w-full h-full">
          <h1 className="text-black text-4xl font-bold">{ong.name}</h1>
          <p className="text-black text-xl pb-12 pt-4">Lista de Doações</p>

          <table className="w-4/5">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  STATUS
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  ESTABELECIMENTO
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  SOBRE A DOAÇÃO
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allDonations.length > 0 ? (
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
                    setIsViewDonationModal={setIsViewDonationONG}
                    setIsViewDonationId={setIsViewDonationId}
                  />
                  ))
                ) : (
                <tr className="text-center text-2xl text-black font-semibold">
                  <td>Nenhuma doação encontrada</td>
                </tr>)
              }
              <tr className="bg-gray-100 border-t-2 border-gray-300">
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
                  {/* adptação para branch dashboard-ONG para dois icones (pagina original: doar) */}
                  <div>
                    <button className="px-4 text-orange-500 hover:text-orange-600">
                      <Image
                        onClick={() => setIsViewDonationONG(true)}
                        src="/assets/images/eye.svg"
                        height={25}
                        width={25}
                        alt="vizualizar"
                      />
                    </button>
                    <button className="text-orange-500 hover:text-orange-600">
                      <Image
                        onClick={() => setUpdateDonation(true)}
                        src="/assets/images/package.svg"
                        height={25}
                        width={25}
                        alt="vizualizar"
                      />
                    </button>
                  </div>
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
                  <div>
                    <button className="px-4 text-orange-500 hover:text-orange-600">
                      <Image
                        onClick={() => setIsViewDonationONG(true)}
                        src="/assets/images/eye.svg"
                        height={25}
                        width={25}
                        alt="vizualizar"
                      />
                    </button>
                    <button className="text-orange-500 hover:text-orange-600">
                      <Image
                        onClick={() => setUpdateDonation(true)}
                        src="/assets/images/package.svg"
                        height={25}
                        width={25}
                        alt="vizualizar"
                      />
                    </button>
                  </div>
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
                  <div>
                    <button className="px-4 text-orange-500 hover:text-orange-600">
                      <Image
                        onClick={() => setIsViewDonationONG(true)}
                        src="/assets/images/eye.svg"
                        height={25}
                        width={25}
                        alt="vizualizar"
                      />
                    </button>
                    <button className="text-orange-500 hover:text-orange-600">
                      <Image
                        onClick={() => setUpdateDonation(true)}
                        src="/assets/images/package.svg"
                        height={25}
                        width={25}
                        alt="vizualizar"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ViewDonationONG
          isOpen={isViewDonationONG}
          onClose={() => setIsViewDonationONG(false)}
          donationID={isViewDonationId}
        />
        <UpdateDonation
          isOpen={isUpdateDonation}
          onClose={() => setUpdateDonation(false)}
        />
      </main>
    </div>
  );
};

export default Doar;
