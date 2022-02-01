import { Icon } from "@mdi/react";
import { useTranslation } from "react-i18next";

export function Quality({ item }: any) {
    const { img, title, description } = item;
    const { t } = useTranslation('global');
    return (
        <div className="flex flex-col mx-2 items-center">
            <div className="flex items-center justify-center md:w-32 md:h-32 w-28 h-28 bg-teal-400 rounded-full">
                <Icon path={img} color="white" size={3}></Icon>
            </div>
            <strong className="block md:text-3xl text-2xl mt-4">{ t(title) }</strong>
            <div className="md:text-lg text-sm text-center">
                { t(description) }
            </div>
        </div>
    );
  }
  