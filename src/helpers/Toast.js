import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const activateToast = () => {
    const toast = useToast();
    toast.open({
        message: 'Out Of Scope',
        type: 'warning',
        duration: 2000
    });
}

export default activateToast
