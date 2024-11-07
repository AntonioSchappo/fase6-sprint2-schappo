"use client";

export default function ViewDonationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg w-full max-w-lg p-8 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-orange-500 mb-4 text-center">
          Visualizar doação
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-black mb-1">
            Tipo de alimento
          </label>
          <input
            type="text"
            value="Perecível"
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-black mb-1">
            Peso total
          </label>
          <input
            type="text"
            value="4kg"
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
          />
        </div>

        <div className="mb-4 flex items-center space-x-2">
          <label className="block text-sm font-semibold text-black mb-1 flex-grow">
            Lista de alimentos
          </label>
          <input
            type="text"
            value="alimentos-doacao.xls"
            readOnly
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md text-gray-700"
          />
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
            Baixar
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-black mb-1">
            Horário da doação*
          </label>
          <div className="flex space-x-2">
            <input
              type="date"
              value="2024-10-15"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-gray-700"
              readOnly
            />
            <input
              type="time"
              value="15:30"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-gray-700"
              readOnly
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          <button className="text-red-600 hover:text-red-700" onClick={onClose}>
            Cancelar doação
          </button>
        </div>
      </div>
    </div>
  );
}
