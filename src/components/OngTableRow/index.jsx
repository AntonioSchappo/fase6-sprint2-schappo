import Image from "next/image";
import { useDonate } from "@/hooks/useDonate";

export function OngTableRow({
  status,
  ongName,
  ongEmail,
  type,
  data,
  time,
  setIsViewDonationModal,
  setIsViewDonationId,
  donationID,
  setIsUpdateDonationModal,
  setIsUpdateDonationId
}) {
  let statusColor = "";
  if (status === "em-aberto") statusColor = "bg-yellow-500";
  if (status === "processando") statusColor = "bg-blue-500";
  if (status === "concluido") statusColor = "bg-green-500";
  if (status === "cancelado") statusColor = "bg-red-500";

  let formatedStatus = "";
  if (status === "em-aberto") formatedStatus = "Em aberto";
  if (status === "processando") formatedStatus = "Processando";
  if (status === "concluido") formatedStatus = "Concluído";
  if (status === "cancelado") formatedStatus = "Cancelado";

  let formatedType = "";
  if (type === "perecivel") formatedType = "Perecíveis";
  if (type === "nao-perecivel") formatedType = "Não perecíveis";
  if (type === "ambos") formatedType = "Perecíveis e Não perecíveis";

  const { GetDonation } = useDonate();
  const donation = GetDonation(donationID);

  const calculateTotalByUnit = (items) => {
    return items.reduce((acc, item) => {
      if (item.unidade && item.quantidade) {
        if (!acc[item.unidade]) {
          acc[item.unidade] = 0;
        }
        acc[item.unidade] += parseFloat(item.quantidade);
      }
      return acc;
    }, {});
  };

  function handleTotal(total) {
    return Object.entries(total).map(([unit, quantity]) => `${quantity} ${unit}`).join(", ");
  }

  const handleOpenViewModal = () => {
    setIsViewDonationModal(true);
    setIsViewDonationId(donationID);
  };

  const handleOpenUpdateModal = () => {
    setIsUpdateDonationModal(true);
    setIsUpdateDonationId(donationID);
  };

  return (
    <>
      <tr className="bg-gray-100">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center">
          <span
            className={`${statusColor} h-3 w-3 rounded-full inline-block mr-2`}
          ></span>
          {formatedStatus}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
          <b>{ongName}</b>
          <p>{ongEmail}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
            <b>{formatedType}</b>
            <p>{handleTotal(calculateTotalByUnit(donation.items))}</p>
            <p>
                {new Date(data).toLocaleDateString('pt-BR')} - {time}
            </p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
        <div>
          <button className="px-4 text-orange-500 hover:text-orange-600">
            <Image
              onClick={handleOpenViewModal}
              src="/assets/images/eye.svg"
              height={25}
              width={25}
              alt="vizualizar"
            />
          </button>                    
          <button className="text-orange-500 hover:text-orange-600">
            <Image
               onClick={() => handleOpenUpdateModal()}
                src="/assets/images/package.svg"
                height={25}
                width={25}                        
                alt="vizualizar"
            />
        </button>
          
         </div> 
        </td>
      </tr>
    </>
  );
}
