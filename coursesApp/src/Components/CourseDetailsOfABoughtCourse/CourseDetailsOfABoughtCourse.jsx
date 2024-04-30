import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';

import courseImage from "../../assets/course.png";

const CourseDetailsOfABoughtCourse = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => setIsOpen(!isOpen);

    const modules = [
        {
            name: 'Модул 1: Вовед во Сајбер Безбедност',
            lectures: [
                'Разбирање на Сајбер Претпоставките',
                'Преглед на мерките за Сајбер Безбедност',
                'Историја и Еволуција на Сајбер Безбедността',
            ],
            assignments: [
                'Задача 1: Анализа на Сајбер Претпоставките',
                'Задача 2: Проценка на Сигурносните Услови',
            ]
        },
        {
            name: 'Модул 2: Мрежна Безбедност',
            lectures: [
                'Вовед во Мрежната Безбедност',
                'Заштитни Огради и Системи за Откривање на Навлези',
                'Безбедни Мрежни Протоколи',
            ],
            assignments: [
                'Задача 3: Имплементација на Мрежна Безбедност',
                'Задача 4: Анализа на Мрежниот Сообраќај',
            ]
        },
    ];

    return (
        <div className="course-container w-full">
            <div className="course-header bg-gray-300 p-5 max-h-full flex flex-col">
                <div className='md:flex flex-column md:flex-row mt-4 flex-grow'>
                    <div className='md:w-8/12 sm:w-full'>
                        <h2 className='text-2xl font-bold mb-3'>Вовед во Сајбер Безбедност</h2>
                        <p>Онлајн курсот за сајбер безбедност е детален вовед во основните принципи, техници и најдобри практики за заштита на дигиталните системи и податоците. Студентите ќе ги истражат различните аспекти на сајбер безбедноста, вклучувајќи ги шифрирањето, мрежната безбедност, анализата на злонамерни програми, оценката на ризици и реакцијата на инциденти. Курсот нуди практични вежби, студии на случаи и реални примери за да се обезбеди добро разбирање и примена на концептите во пракса. Независно дали сте почетник или искусен професионалец, курсот е дизајниран да ги подобри вашите вештини и да ве осврне на најновите предизвици и технологии во сајбер безбедноста.</p>
                    </div>
                    <div className='course-short-container md:w-1/5 p-3 text-center shadow-2xl bg-white md:ml-20 sm:w-full mt-5 md:mt-0 inline-block max-w-xs'>
                        <div className="video-part">
                            <img src={courseImage} alt="course-image" />
                        </div>
                        <div className="details-part text-left">
                            <h3 className='text-xl font-bold pb-2'>Овој курс содржи: </h3>
                            <div>
                                <p><LockOutlinedIcon/> 12 часови видеа</p>
                                <p><InsertDriveFileIcon/> 30 pdf лекции</p>
                                <p><AssignmentIcon/> Сертификат за завршен курс</p>
                                <p><FolderIcon/> 1 фајл за симнување</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="course-content p-5 sm:order-1">
                <h2 className='text-2xl font-bold mb-3'>Содржина на курсот:</h2>
                <div className="accordion">
                    {modules.map((module, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`module-${index}-content`}
                                id={`module-${index}-header`}
                            >
                                <Typography>{module.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <h3>Лекции:</h3>
                                    <ul>
                                        {module.lectures.map((lecture, i) => (
                                            <li key={i}>{lecture}</li>
                                        ))}
                                    </ul>
                                    <h3>Задачи:</h3>
                                    <ul>
                                        {module.assignments.map((assignment, i) => (
                                            <li key={i}>{assignment}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsOfABoughtCourse;
