import { Icon } from "../components/Icon";


export const IconText = ({ classname = '', text, icon = null }) => {
    return (
        <div className={`flex-1 flex items-center gap-2 ${classname}`}>
            <Icon icon={icon}></Icon>
            <span className="select-none group-hover:ml-2 transition-all duration-1000">{text}</span>
        </div>
    );
};
