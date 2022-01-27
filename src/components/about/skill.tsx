import { useTranslation } from "react-i18next";

export function Skill({ item }: any) {
    const { name, percentage } = item;
    const { t } = useTranslation('global');
    return (
        <div className="flex bg-gray-200 h-10 my-2">
            <div className="bg-teal-600" style={{width: percentage + '%'}}>
                <div className="flex h-10 w-32 bg-teal-400 text-white text-xl items-center justify-center">
                    <strong>{ name }</strong>
                </div>
            </div>
            <div className="flex items-center justify-center ml-auto mr-2" >{percentage}%</div>
        </div>
    );
  }
  