"use client";

import React, { useState } from "react";

function FoodList() {
  const [itens, setItens] = useState([
    { nome: "", quantidade: "", unidade: "" },
  ]);

  const handleChange = (index, campo, valor) => {
    const novosItens = [...itens];
    novosItens[index][campo] = valor;
    setItens(novosItens);

    if (index === itens.length - 1 && campo === "nome" && valor.trim() !== "") {
      setItens([...itens, { nome: "", quantidade: "", unidade: "" }]);
    }
  };

  return (
    <div className="grid grid-cols-[1fr_58px_94px] gap-4">
      <label className="text-black col-start-1 col-end-4">
        Lista de alimentos
      </label>
      {itens.map((item, index) => (
        <React.Fragment key={index}>
          <input
            type="text"
            placeholder="Nome do alimento"
            value={item.nome}
            onChange={(e) => handleChange(index, "nome", e.target.value)}
            className="pl-6 border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-gray-400"
          />
          <input
            type="number"
            value={item.quantidade}
            onChange={(e) => handleChange(index, "quantidade", e.target.value)}
            className="font-bold text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
          />
          <select
            value={item.unidade}
            onChange={(e) => handleChange(index, "unidade", e.target.value)}
            className="text-center border-gray-300 border-2 text-black placeholder:text-black rounded-md shadow-sm"
          >
            <option value="" disabled hidden>
              Unidade
            </option>
            <option>Un.</option>
            <option>Kg.</option>
            <option>Lt.</option>
          </select>
        </React.Fragment>
      ))}
    </div>
  );
}

export default FoodList;
