import Image from "next/image";
import photo from "@/public/assets/images/login-helper.jpg";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";

export default function CadastrarEstabelecimentoView({
  institution,
  setInstitution,
  handleRegister,
}) {
  return (
    <div className="h-screen w-screen overflow-y-auto grid grid-cols-2 justify-between bg-[#191919] font-nunito-sans">
      <div className="text-[#0D0E30] flex justify-center items-center">
        <div className="w-[488px] h-fit bg-white rounded-md p-9">
          <h1 className="text-[40px] font-bold leading-none ">
            Cadastrar
            <br />
            estabelecimento
          </h1>
          <form className="flex flex-col" onSubmit={handleRegister}>
            <Input
              label="Nome fantasia"
              id="nome-fantasia"
              placeholder="Insira o nome fantasia"
              required
              onChange={(e) =>
                setInstitution({ ...institution, fantasyName: e.target.value })
              }
            />

            <Input
              label="CNPJ"
              id="cnpj"
              placeholder="Insira o CPNJ"
              required
              onChange={(e) =>
                setInstitution({ ...institution, cnpj: e.target.value })
              }
            />

            <Select
              label="Tipo de estabelecimento"
              id="tipo-estabelecimento"
              required
              value={institution.type}
              onChange={(e) =>
                setInstitution({ ...institution, type: e.target.value })
              }
            >
              <option value="" disabled hidden>
                Selecione um tipo de alimento
              </option>
              <option value="mercado">Mercado</option>
              <option value="restaurante">Restaurante</option>
              <option value="outro">Outro</option>
            </Select>

            <Input
              label="E-mail"
              type="email"
              id="email"
              placeholder="Insira seu e-mail"
              required
              onChange={(e) =>
                setInstitution({ ...institution, email: e.target.value })
              }
            />

            <Input
              label="Senha"
              type="password"
              id="senha"
              placeholder="Insira sua senha"
              required
              onChange={(e) =>
                setInstitution({ ...institution, password: e.target.value })
              }
            />

            <Button
              type="submit"
              text="Cadastrar"
              variant="primary"
              className="w-full mt-6"
            />
          </form>
          <p className="text-center mt-4">
            Já possui uma conta?{" "}
            <Link href="/login-estabelecimento">
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
