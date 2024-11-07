import Image from "next/image";

export function TableRow({
  status,
  companyName,
  companyCnpj,
  type,
  data,
  setIsViewDonationModal,
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
          <b>{companyName}</b>
          <p>{companyCnpj}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
          <b>{type}</b>
          <p>{data}</p>
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
    </>
  );
}
