import color_logo_no_background from '../../assets/LogoInfo/Logo Files/For Web/png/color_logo_no_background.png';

const Footer = () => {
    return (
        <footer className="bg-white light:bg-gray-900 border-t border-gray-200 light:border-gray-600">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src={color_logo_no_background} className="h-8 me-3"
                                 alt="SkillSphere logo"/>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Информации</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/aboutus" className="hover:underline">За нас</a>
                                </li>
                                <li>
                                    <a href="/contactus" className="hover:underline">Контакт</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Следете нѐ</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/Team-27-CoursesApp"
                                       className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Помош при купување</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Политика на приватност</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
                      href="/" className="hover:underline">SkillSphere™</a>. Сите права се задржани.
                  </span>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
