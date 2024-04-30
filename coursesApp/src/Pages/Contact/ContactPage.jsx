import React from "react";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

const ContactPage = () => {

    return (
        <>
            <Header/>
            <div
                className={"min-w-screen min-h-screen bg-gray-200 flex justify-center px-5 pb-16 pt-16 dark:bg-gray-500"}>
                <section className="bg-white dark:bg-gray-900 rounded-lg">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
                            Контактирај нѐ
                        </h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                            Имате дополнителни прашања? Пополнете ја следната форма и испратете порака до нашиот тим!
                        </p>
                        <form action="post" className="space-y-8 rounded">
                            <div>
                                <label htmlFor="email"
                                       className="block w-full mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Вашиот меил
                                </label>
                                <input type="email" id="email"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="Вашиот меил (задолжително)" required>
                                </input>
                            </div>
                            <div>
                                <label htmlFor="subject"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Предмет</label>
                                <input type="text" id="subject"
                                       className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="Предмет ">
                                </input>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Вашата порака
                                </label>
                                <textarea id="message" rows="6"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Вашата порака" required>
                                </textarea>
                            </div>
                            <div className={"flex justify-center"}>
                                <button type="submit"
                                        className="py-3 px-5 text-sm font-bold text-sm border bg-gray-300 hover:bg-gray-400 text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900">
                                    Испрати
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default ContactPage;