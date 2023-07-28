import Image from 'next/image'
import Logo from '@/assets/logo.svg';
import LoginComponent from "@/components/auth/login/LoginComponent";

export default async function Login(){

    return(
        <main className={'h-full flex flex-col items-center justify-center gap-y-14 px-6'}>
            <Image src={Logo} alt={'logo'} height={33} width={27} />
            <LoginComponent />
        </main>
    )
}