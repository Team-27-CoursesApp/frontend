import React from 'react';
import LoginForm from '../../Components/Login/LoginForm';
import background from "../../assets/background.png";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

const LoginPage = () => {
    return (
        <>
            <Header/>
            <div className="flex flex-col md:flex-row h-screen dark:bg-gray-900">
                <div className="w-full h-full md:w-1/2 flex flex-col items-center justify-center ">
                    <div className="w-full max-w-md pt-5 pb-5 md:pt-0 md:pb-0">
                        <h1 className="mb-10 text-blue-500 font-bold text-3xl">
                            <span className="block">Сo SkillSphere до ново и</span>
                            <span className="block">поголемо знаење!</span>
                        </h1>
                        <p className='mb-5 dark:text-white'>Добредојде назад! Логирај се повторно на твојот профил.</p>
                        <LoginForm/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center pt-5 pb-5 md:pt-0 md:pb-0">
                    <img src={background} alt="background-image" className="max-h-full max-w-full"/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default LoginPage;
