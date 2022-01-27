import { useTranslation } from "react-i18next";

export function Quality({ item }: any) {
    const { img, title, description } = item;
    const { t } = useTranslation('global');
    return (
        <div className="flex flex-col mx-2 items-center">
            <div className="md:w-32 md:h-32 w-28 h-28 bg-teal-400 rounded-full"></div>
            <strong className="block md:text-3xl text-2xl mt-4">{ title }</strong>
            <div className="md:text-lg text-sm text-center">
                { description }
            </div>
        </div>
    );
  }
  