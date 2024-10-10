import Image from 'next/image';


export default function loginOng () {

    return (
        <div class="grid grid-cols-2 items-stretch">
            <div class="">                
                <Image 
                    src="/assets/images/login-ong.png"
                    alt="imagem da tela de login da ONG"
                    width={500}
                    height={500}              
                />
                {/* 
                    layout="fill"
                    objectFit="cover" 
                */}
                
            </div>

            <div class="flex items-center justify-center text-black">

                <div class="bg-white rounded-lg w-[488px] flex flex-col p-[36px]">
                    <h2 class="text-[40px] leading-[120%] mb-8">Área da ONG</h2>
                    <form action="" class="w-full flex flex-col">
                        <label htmlFor="email" class="mb-4">E-mail</label>
                        <input type="text" class="border border-solid rounded-sm p-[16px] mb-[24px]" placeholder="Insira seu email" id="email"/>

                        <label htmlFor="password" class="mb-4">Senha</label>
                        <input type="password" class="border border-solid rounded-sm p-[16px] mb-[24px]" placeholder="Insira sua senha" id="password"/>

                        <a href="" class="flex justify-end">
                            <Image 
                                src="/assets/icons/cadeado.svg"
                                alt="icone de cadeado"
                                width={20}
                                height={20}
                            />
                            <p class="ml-4 font-bold">Esqueci minha senha</p>
                        </a>

                        {/* 
                            Button
                            componente a ser criado? 
                        */}
                        <button class="bg-[#FF9800] hover:bg-[#C26100] px-[21px] py-[14px] my-4 rounded-sm text-white">Entrar</button>

                        <div class="self-center text-[18px]">
                            <p class="font-light">Não tem uma conta? <a href="" class="font-bold">Crie uma conta de graça</a></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )

}