"use client";

export default function ONGListModal({ isOpen, onClose, toggleDonation }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex w-full justify-center items-center">
          <h2 className="text-xl font-bold text-orange-600">Lista de ONGs</h2>
        </div>
        <p className="text-sm flex justify-center text-orange-600">
          Exibindo as ONGs mais próximas da sua localidade
        </p>

        <div className="mt-8 space-y-4">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400"
              name="ong"
              value="Amigos de Benevides"
            />
            <div>
              <p className="text-gray-800 font-semibold">Amigos de Benevides</p>
              <p className="text-sm text-gray-500">
                Rua Carioca, 271 - São Paulo/SP (2km)
              </p>
            </div>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400"
              name="ong"
              value="Mãos que Alimentam"
            />
            <div>
              <p className="text-gray-800 font-semibold">Mãos que Alimentam</p>
              <p className="text-sm text-gray-500">
                Rua das Acácias, 102 - São Paulo/SP (2.2km)
              </p>
            </div>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400"
              name="ong"
              value="Pão e Esperança"
            />
            <div>
              <p className="text-gray-800 font-semibold">Pão e Esperança</p>
              <p className="text-sm text-gray-500">
                Avenida Esperança, 745 - São Paulo/SP (3km)
              </p>
            </div>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400"
              name="ong"
              value="Corações Solidários"
            />
            <div>
              <p className="text-gray-800 font-semibold">Corações Solidários</p>
              <p className="text-sm text-gray-500">
                Rua do Abrigo, 56 - São Paulo/SP (4.5km)
              </p>
            </div>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400"
              name="ong"
              value="Mesa para Todos"
            />
            <div>
              <p className="text-gray-800 font-semibold">Mesa para Todos</p>
              <p className="text-sm text-gray-500">
                Praça da Solidariedade, 32 - São Paulo/SP (4.7km)
              </p>
            </div>
          </label>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            className="text-orange-600 font-semibold px-8 border-orange-600 border-2 py-2 rounded hover:bg-gray-200"
            onClick={toggleDonation}
          >
            Voltar
          </button>
          <button
            onClick={onClose}
            className="bg-orange-500 text-white py-2 font-bold px-8 rounded hover:bg-orange-600"
          >
            Solicitar Doação
          </button>
        </div>
      </div>
    </div>
  );
}
