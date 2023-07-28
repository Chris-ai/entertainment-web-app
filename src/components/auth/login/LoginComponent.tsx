'use client'
import useLocalization from "@/hooks/useLocalization";
import Button from "@/components/common/Button";

interface IProps {

}
export default function LoginComponent({}: IProps) {
    const {t} = useLocalization();

    const login = () => {
        console.log('login');
    }
    return (
        <div className={'h-[327px] w-full max-w-[400px] bg-semi-dark-blue px-6 pt-6 pb-8 rounded-base'}>
            <h1 className={'heading-l'}>{t('login')}</h1>
                <form action="" className={'flex flex-col gap-y-6'}>
                    <input type="text"/>
                    <input type="text"/>
                    <Button onClick={login} className={'mt-4'}>
                        {t('loginToYourAccount')}
                    </Button>
                </form>

            <div className={'flex justify-center items-center gap-x-2 pt-6'}>
                <p className={'body-m'}>{t('dontHaveAnAccount')} <a className={'text-primary-red'}>{t('signUp')}</a></p>
            </div>

        </div>
    )
}