import LoadingSquares from "@/components/common/LoadingSquares";

export const loading = () => {
    return (
        <div className={'h-screen w-full grid place-items-center'}>
            <LoadingSquares />
        </div>
    );
};

export default loading;