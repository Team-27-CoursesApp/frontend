import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import courseImage from "../../assets/course.png";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Course = () => {
    const files = ['CelestialSymphony.pdf', 'SereneShadows.pdf', 'EnigmaEncounter.pdf', 'RadiantReflections.pdf', 'WhisperingWonders.pdf'];

    return (
        <>
            <div className="course-container w-full">
                <div className="course-header bg-gray-300 p-5 max-h-full flex flex-col">
                    <div className='md:flex flex-column md:flex-row mt-4 flex-grow'>
                        <div className='md:w-8/12 sm:w-full'>
                            <h2 className='text-2xl font-bold mb-3'>Вовед во Сајбер Безбедност</h2>
                            <p>Онлајн курсот за сајбeр безбедност е детален вовед во основните принципи, техници и
                                најдобри практики за заштита на дигиталните системи и податоците. Студентите ќе ги
                                истражат различните аспекти на сајбер безбедноста, вклучувајќи ги шифрирањето, мрежната
                                безбедност, анализата на злонамерни програми, оценката на ризици и реакцијата на
                                инциденти. Курсот нуди практични вежби, студии на случаи и реални примери за да се
                                обезбеди добро разбирање и примена на концептите во пракса. Независно дали сте почетник
                                или искусен професионалец, курсот е дизајниран да ги подобри вашите вештини и да ве
                                осврне на најновите предизвици и технологии во сајбер безбедноста.</p>
                        </div>
                        <div
                            className='course-short-container md:w-1/5 p-3 text-center shadow-2xl bg-white md:ml-20 sm:w-full mt-5 md:mt-0 inline-block max-w-xs'>
                            <div className="video-part">
                                <img src={courseImage} alt="course-image"/>
                            </div>
                            <div className="buy-part mb-5">
                                <p className='text-lg font-bold mb-3'>1200 ден.</p>
                                <div className='flex flex-col'>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3">
                                        Додај во кошничка
                                    </button>
                                    <button
                                        className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded-full">
                                        Купи
                                    </button>
                                </div>
                            </div>
                            <div className="details-part text-left">
                                <h3 className='text-xl font-bold pb-2'>Овој курс содржи: </h3>
                                <div>
                                    <p><SmartDisplayIcon/> 12 часови видеа</p>
                                    <p><InsertDriveFileIcon/> 30 pdf лекции</p>
                                    <p><EmojiEventsIcon/> Сертификат за завршен курс</p>
                                    <p><FileDownloadIcon/> 1 фајл за симнување</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course content section */}
                <div className="course-content p-5 sm:order-1">
                    <h2 className='text-2xl font-bold mb-3'>Содржина на курсот: <LockOutlinedIcon/></h2>
                    <div className='course-files flex flex-col justify-center blur-xs'>
                        {files.map((file, index) => (
                            <p key={index}><InsertDriveFileIcon/> {index + 1}. {file.toString()}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
