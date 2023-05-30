import { IconType } from "react-icons";

interface AuthSocialButtonProps {
        icon: IconType
        label:string
        onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
        icon: Icon,
        label,
        onClick,
}) => {
        return (
                <button
                        type="button"
                        onClick={onClick}
                        className="
                                flex
                                flex-row
                                items-center
                                gap-5
                                w-full 
                                justify-center 
                                rounded-md 
                                px-4 
                                py-2 
                                shadow-sm 
                                border-[2px]
                                border-[#AD00FF]
                        "
                >
                        <Icon />
                        <p>{label}</p>
                </button>
        );
}

export default AuthSocialButton;
