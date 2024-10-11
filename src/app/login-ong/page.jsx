import Image from 'next/image';


export default function loginOng () {

    return (
        <div className="grid grid-cols-2 items-stretch overflow-hidden">
                           
                <img 
                    src="/assets/images/login-ong.png"
                    alt="imagem da tela de login da ONG"
                    className="object-cover w-full h-screen"
                />
                {/* 
                    layout="fill"
                    objectFit="cover" 
                */}
                
            

            <div className="flex items-center justify-center text-black">

                <div className="bg-white rounded-lg w-[488px] flex flex-col p-[36px]">
                    <h2 className="text-[40px] leading-[120%] mb-8 font-geistsans">Área da ONG</h2>
                    <form action="" className="w-full flex flex-col">
                        <label htmlFor="email" className="mb-4">E-mail</label>
                        <input type="text" className="border border-solid rounded-sm p-[16px] mb-[24px]" placeholder="Insira seu email" id="email"/>

                        <label htmlFor="password" className="mb-4">Senha</label>
                        <input type="password" className="border border-solid rounded-sm p-[16px] mb-[24px]" placeholder="Insira sua senha" id="password"/>

                        <a href="" className="flex justify-end">
                            <Image 
                                src="/assets/icons/cadeado.svg"
                                alt="icone de cadeado"
                                width={20}
                                height={20}
                            />
                            <p className="ml-4 font-bold">Esqueci minha senha</p>
                        </a>

                        {/* 
                            Button
                            componente a ser criado? 
                        */}
                        <button className="bg-[#FF9800] hover:bg-[#C26100] px-[21px] py-[14px] my-4 rounded-sm text-white">Entrar</button>

                        <div className="self-center text-[18px]">
                            <p className="font-light">Não tem uma conta? <a href="" className="font-bold">Crie uma conta de graça</a></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )

}