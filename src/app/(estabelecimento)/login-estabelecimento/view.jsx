import React from "react";
import Image from "next/image";
import photo from "@/public/assets/images/login-helper.jpg";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function LoginEstabelecimentoView ({
    handleLogin,
    setEmail,
    setPassword
}) {
  return (
    <div className="grid grid-cols-2 bg-[#191919] font-nunito-sans">
      <Image
        src={photo}
        alt="Login Helper Image"
        className="h-screen w-full object-cover"
        priority
      />
      <div id="login-card" className="flex items-center justify-center">
        <div className="bg-white rounded-lg w-[488px] flex flex-col p-[36px] text-black">
          <h1 className="text-4xl mb-6 font-bold">
            Área do <br />
            estabelecimento
          </h1>
          <form className="flex flex-col" onSubmit={handleLogin}>
            <Input
                required
                label="E-mail"
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-solid rounded-sm p-[16px] mb-[24px]"
                placeholder="Insira seu e-mail"
            />
            <Input
                required
                label="Senha"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border border-solid rounded-sm p-[16px] mb-[24px]"
                placeholder="Insira sua senha"
            />
            <div className="flex flex-row justify-end items-center my-4">
              <svg
                svg="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 8.75C9.47469 8.75018 8.96698 8.93939 8.56967 9.28305C8.17237 9.62671 7.912 10.1019 7.83616 10.6217C7.76031 11.1415 7.87406 11.6712 8.15661 12.1141C8.43916 12.5569 8.87164 12.8833 9.375 13.0336V14.375C9.375 14.5408 9.44085 14.6997 9.55806 14.8169C9.67527 14.9342 9.83424 15 10 15C10.1658 15 10.3247 14.9342 10.4419 14.8169C10.5592 14.6997 10.625 14.5408 10.625 14.375V13.0336C11.1284 12.8833 11.5608 12.5569 11.8434 12.1141C12.1259 11.6712 12.2397 11.1415 12.1638 10.6217C12.088 10.1019 11.8276 9.62671 11.4303 9.28305C11.033 8.93939 10.5253 8.75018 10 8.75ZM10 11.875C9.81458 11.875 9.63332 11.82 9.47915 11.717C9.32498 11.614 9.20482 11.4676 9.13386 11.2963C9.06291 11.125 9.04434 10.9365 9.08051 10.7546C9.11669 10.5727 9.20598 10.4057 9.33709 10.2746C9.4682 10.1435 9.63525 10.0542 9.8171 10.018C9.99896 9.98184 10.1875 10.0004 10.3588 10.0714C10.5301 10.1423 10.6765 10.2625 10.7795 10.4167C10.8825 10.5708 10.9375 10.7521 10.9375 10.9375C10.9375 11.1861 10.8387 11.4246 10.6629 11.6004C10.4871 11.7762 10.2486 11.875 10 11.875ZM16.25 6.25H13.75V4.375C13.75 3.38044 13.3549 2.42661 12.6517 1.72335C11.9484 1.02009 10.9946 0.625 10 0.625C9.00544 0.625 8.05161 1.02009 7.34835 1.72335C6.64509 2.42661 6.25 3.38044 6.25 4.375V6.25H3.75C3.41848 6.25 3.10054 6.3817 2.86612 6.61612C2.6317 6.85054 2.5 7.16848 2.5 7.5V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V7.5C17.5 7.16848 17.3683 6.85054 17.1339 6.61612C16.8995 6.3817 16.5815 6.25 16.25 6.25ZM7.5 4.375C7.5 3.71196 7.76339 3.07607 8.23223 2.60723C8.70107 2.13839 9.33696 1.875 10 1.875C10.663 1.875 11.2989 2.13839 11.7678 2.60723C12.2366 3.07607 12.5 3.71196 12.5 4.375V6.25H7.5V4.375ZM16.25 16.25H3.75V7.5H16.25V16.25Z"
                  fill="#3F4069"
                />
              </svg>
              <a href="#" className="text-right ml-1">
                Esqueci minha senha
              </a>
            </div>
            <Button
                type="submit"
                text="Entrar"
                variant="primary"
                className="w-full"
             />
            
            <div className="self-center mt-4">
              <Link href="/cadastrar-estabelecimento">
                <p className="font-light">
                  Não possui conta?{" "}
                  <span className="font-bold underline">Crie uma de graça</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
