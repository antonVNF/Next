import CustomModal from "@/app/components/common/modal";
import LoginForm from "@/app/components/forms/login.form";
interface IProps {
    isOpen: boolean;
    onClose: () => void;
}
const LoginModal = ({isOpen, onClose}: IProps ) => {
    return(<CustomModal isOpen={isOpen} onClose={onClose} title="Авторизация">
        <LoginForm onClose={onClose}/>
    </CustomModal>
        )
}

export default LoginModal