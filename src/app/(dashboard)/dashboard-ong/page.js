"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ViewDonationONG from "./components/viewDonationONG";
import UpdateDonation from "./components/updateDonation";

const Doar = () => {
  const [isViewDonationONG, setIsViewDonationONG] = useState(false);
  const [isUpdateDonation, setUpdateDonation] = useState(false);

  return (
    <div className="h-screen w-screen overflow-y-auto flex flex-col justify-between relative">
      <nav className="absolute top-0 left-0 w-full z-20 py-4 bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/user">
              <Image
                src="/assets/images/avatar.svg"
                width={30}
                height={30}
                alt="Usuário"
              />
            </Link>
          </div>
          <Link href="/">
            <Image
              src="/assets/images/fome-zero-logo.png"
              width={53}
              height={58}
              alt="Fome Zero"
            />
          </Link>
          <div>
            <Link href="/doar">
              <Image
                src="/assets/images/logout.svg"
                width={36}
                height={36}
                alt="Sair"
              />
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        <div className="pt-14 flex flex-col items-center bg-white w-full h-full">
          <h1 className="text-black text-4xl font-bold">ONG EXEMPLO</h1>
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
