import Image from "next/image";
import photo from "../../../public/assets/images/login-helper.jpg";
import Link from "next/link";
import React from "react";

export default function CadastrarEstabelecimento() {
  return (
    <div className="h-screen w-screen overflow-y-auto grid grid-cols-2 justify-between bg-[#191919]">
      <div className="text-[#0D0E30] flex justify-center items-center">
        <div className="w-[488px] h-fit bg-white rounded-md p-9">
          <h1 className="text-[40px] font-bold leading-none">
            Cadastrar
            <br />
            estabelecimento
          </h1>
          <form className="flex flex-col">
            <label htmlFor="nome-fantasia" className="text-base mt-6 mb-2">
              Nome fantasia
            </label>
            <input
              type="text"
              name="nome-fantasia"
              id="nome-fantasia"
              placeholder="Insira o nome fantasia"
              className="h-14 w-auto p-4 border border-solid rounded-md"
            />

            <label htmlFor="cnpj" className="text-base mt-4 mb-2">
              CNPJ
            </label>
            <input
              type="text"
              name="cnpj"
              id="cnpj"
              placeholder="Insira o CPNJ"
              className="h-14 w-auto p-4 border border-solid rounded-md"
            />

            <label
              htmlFor="tipo-estabelecimento"
              className="text-base mt-4 mb-2"
            >
              Tipo de estabelecimento
            </label>
            <input
              type="text"
              name="tipo-estabelecimento"
              id="tipo-estabelecimento"
              placeholder="Insira o tipo de estabelecimento"
              className="h-14 w-auto p-4 border border-solid rounded-md"
            />

            <label htmlFor="email" className="text-base mt-4 mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu e-mail"
              className="h-14 w-auto p-4 border border-solid rounded-md"
            />

            <label htmlFor="senha" className="text-base mt-4 mb-2">
              Senha
            </label>
            <input
              type="text"
              name="senha"
              id="senha"
              placeholder="Insira sua senha"
              className="h-14 w-auto p-4 border border-solid rounded-md"
            />

            <button
              type="submit"
              className="w-[416px] h-[52px] bg-[#FF9800] text-white font-bold rounded-md mt-4 mb-4"
            >
              Entrar
            </button>
          </form>
          <p className="text-center text-[18px]">
            Já possui uma conta?{" "}
            <Link href="/login-helper">
              <span className="font-bold underline">Faça login</span>
            </Link>
          </p>
        </div>
      </div>
      <Image
        src={photo}
        alt="Login Helper Image"
        className="h-screen w-full object-cover"
        priority
      />
    </div>
  );
}
