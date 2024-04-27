import RegisterForm from '../../Components/Register/RegisterForm';
import background from "../../assets/background.png";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

const RegisterPage = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:pb-0 pb-8">
                    <div className="w-full max-w-md">
                        <h1 className="mb-3 text-blue-500 font-bold text-3xl">
                            <span className="block">Сo SkillSphere до ново и</span>
                            <span className="block">поголемо знаење!</span>
                        </h1>
                        <RegisterForm/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img src={background} alt="background-image" className="max-h-full max-w-full"/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RegisterPage;
