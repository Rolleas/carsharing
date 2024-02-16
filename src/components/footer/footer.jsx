import paymentIMG from "../../img/payment.png";
import {AcmeLogo} from "../../icons/acme.logo";
import React from "react";
import {Link} from "@nextui-org/react";
export const Footer = () => {
    return (
        <div className="w-full p-10 bg-[#202229]">
            <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <AcmeLogo />
                        <p className="font-bold text-inherit">ACME</p>
                    </div>
                    <p className="font-bold text-[22px]">+375 (29) 133-65-53</p>
                    <p className="text-[16px]">ACME@ACME.by</p>
                    <p className="text-gray-500">
                        Общество с ограниченной ответственностью «Грин авто солюшнс» (ООО «Грин авто солюшнс»)
                        <br/>
                        Директор Шимукович Вера Александровна
                        220014, Беларусь, г. Минск, ул. Попова, 24а, кабинет № 207/1
                        <br/>
                        УНП 193598466. Свидетельство о государственной регистрации № 193598466 от 02.11.2021 выдано Минским горисполкомом
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="">
                        <img src={paymentIMG}/>
                    </div>
                    <div className="flex justify-around mt-5">
                        <div className="flex flex-col gap-2">
                            <Link color="foreground" href="/about">О компании</Link>
                            <Link color="foreground" href="/about">Автомобили</Link>
                            <Link color="foreground" href="/about">Условия аренды</Link>
                            <Link color="foreground" href="/about">Долгосрочная аренда</Link>
                            <Link color="foreground" href="/about">Тансфер</Link>
                            <Link color="foreground" href="/about">One Way</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link color="foreground" href="/about">Аренда автомобилей в Минске</Link>
                            <Link color="foreground" href="/about">Аренда автомобилей в Бресте</Link>
                            <Link color="foreground" href="/about">Аренда автомобилей в Витебске</Link>
                            <Link color="foreground" href="/about">Аренда автомобилей в Гомеле</Link>
                            <Link color="foreground" href="/about">Аренда автомобилей в Гродно</Link>
                            <Link color="foreground" href="/about">Аренда автомобилей в Могилеве</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link color="foreground" href="/about">Главная</Link>
                            <Link color="foreground" href="/about">Статьи</Link>
                            <Link color="foreground" href="/about">Контакты</Link>
                            <Link color="foreground" href="/about">Политика конфиденциальности</Link>
                            <Link color="foreground" href="/about">Карта сайта</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}