"use client";

export default function ViewDonationONG({ isOpen, onClose }) {
  if (!isOpen) return null;

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
        <h2 className="text-[32px] font-semibold text-[#FF9800] mb-4 text-center">
          Visualizar doação
        </h2>
        <form className="my-8">
          <div className="flex gap-x-4 mb-4">
            <div className="mb-4 w-[128px]">
              <label className="mb-4 text-sm font-semibold text-black">
                Tipo de alimento*
              </label>
              <select className="w-[115px] h-[52px] border-gray-300 border-2 text-black placeholder:text-black rounded-md shadow-sm px-2 py-3 focus:border-orange-500 focus:ring-orange-500">
                <option value="" disabled selected hidden className="pl-[30px]">Perecível</option>
                <option>Somente Alimentos Perecíveis</option>
                <option>Somente Alimentos Não Perecíveis</option>
                <option>Alimentos Perecíveis e Não Perecíveis</option>
              </select>
            </div>
            <div className="mb-4 w-[128px]">
              <label className="mb-4 text-sm font-semibold text-black">
                Peso total
              </label>
              <input
                type="text"
                placeholder="4kg"
                className="w-[67px] h-[52px] text-center p-2 border-gray-300 border-2 text-black placeholder:text-black rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-[1fr_58px_94px] grid-rows-[32px_52px_52px_52px] gap-4">
            <label className="text-black col-start-1 col-end-4">Lista de alimentos</label>
            {/* Primeira linha */}
            <input
              type="text"
              placeholder="Macarrão"
              className="pl-6 border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
            />
            <input
              type="text"
              placeholder="3"
              className="font-bold text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
            />
            <select className="text-center border-gray-300 border-2 text-black placeholder:text-black rounded-md shadow-sm">
              <option value="" disabled selected hidden className="pl-[30px]">Un.</option>
              <option>Kg.</option>
              <option>Lt.</option>
              <option>Km.</option>
            </select>

            {/* Segunda linha */}
            <input
              type="text"
              placeholder="Arroz"
              className="pl-6 border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
            />
            <input
              type="text"
              placeholder="2"
              className="font-bold text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
            />
            <select className="text-center border-gray-300 border-2 text-black placeholder:text-black rounded-md shadow-sm">
              <option value="" disabled selected hidden className="pl-[30px]">Kg.</option>
              <option>Un.</option>
              <option>Lt.</option>
              <option>Km.</option>
            </select>

            {/* Terceira linha */}
            <input
              type="text"
              placeholder="Leite"
              className="pl-6 border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
            />
            <input
              type="text"
              placeholder="20"
              className="font-bold text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
            />
            <select className="text-center border-gray-300 border-2 text-black placeholder:text-black rounded-md shadow-sm">
              <option value="" disabled selected hidden className="pl-[30px]">Lt.</option>
              <option>Un.</option>
              <option>Kg.</option>
              <option>Km.</option>
            </select>
          </div>

          <div className="my-8 flex gap-4">
            <div className="w-auto">
              <label className="block text-sm font-semibold text-black mb-1">
                Horário da doação
              </label>
              <input
                type="date"
                className="border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div className="w-auto self-end">
              <input
                type="time"
                className="border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
