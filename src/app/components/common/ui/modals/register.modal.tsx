import CustomModal from "@/app/components/common/modal";
import RegisterForm from "@/app/components/forms/register.form";
interface IProps {
    isOpen: boolean;
    onClose: () => void;
}
const RegisterModal = ({isOpen, onClose}: IProps ) => {
    return(<CustomModal isOpen={isOpen} onClose={onClose} title="Авторизация">
        <RegisterForm onClose={onClose}/>
    </CustomModal>
        )
}

export default RegisterModal