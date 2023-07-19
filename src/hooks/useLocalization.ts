import localization from '../../localization.json';
interface JSON {
    [key: string] : string;
}
const useLocalization = () => {
    const t = (key: string) => {
        const value: JSON = localization;
        return value[key];
    }

    return {t};
}

export default useLocalization;