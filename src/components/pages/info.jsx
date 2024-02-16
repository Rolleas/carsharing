import {Button, Card, CardBody, CardFooter, Tab, Tabs, Image} from "@nextui-org/react";
import {InsuranceIcon} from "../../icons/insurance.icon";
import {DiscountIcon} from "../../icons/discount.icon";
import {SupportIcon} from "../../icons/support.icon";
import carImg from "../../img/car.png";
import {useState} from "react";
import {cars} from "../../utils/cars";

export const InfoPage = () => {

    const [type, setType] = useState(1);

    return (
        <>
            <div className="w-full relative">
                <div className="bg-img">

                </div>
                <div className="absolute left-[50px] top-[40%]">
                    <h1 className="font-bold text-white text-[34px]">Для тех кто ценит время!
                        <br/>
                        <p className="text-3xl text-[48px] mt-2">АРЕНДА АВТО В МИНСКЕ</p>
                    </h1>
                    <Button size="lg" className="mt-7 font-bold" color="primary">Подобрать авто</Button>
                </div>
                <div className="w-full bg-primary flex flex-wrap items-center justify-around p-5">
                    <h2 className="text-[22px]"><span className="font-bold">ООО «авто солюшнс»</span> представляет в
                        Беларуси интересы</h2>
                    <div className="flex gap-5">
                        <img src="https://inspirerent.by/wp-content/uploads/2023/07/logo-europcar.png"/>
                        <p className="max-w-[300px]">на основании Международного договора франшизы
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="max-w-[1420px] w-full ">
                    <div className="w-full flex flex-wrap gap-5 justify-between items-center p-5">
                        <Card className="max-w-[400px]">
                            <CardBody>
                                <div className="flex gap-5">
                                    <InsuranceIcon/>
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold">Страховка на случай ДТП</p>
                                        <span>Все автомобили застрахованы по видам ответственности</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="max-w-[400px]">
                            <CardBody>
                                <div className="flex gap-5">
                                    <DiscountIcon/>
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold">Скидки постоянным клиентам</p>
                                        <span>Действует программа лояльности для постоянных клиентов</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="max-w-[400px]">
                            <CardBody>
                                <div className="flex gap-5">
                                    <SupportIcon/>
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold">24-часа поддержка</p>
                                        <span>В случае трудностей незамедлительно свяжитесь с нашей поддержкой</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-5 p-5 mt-10">
                <img className="hidden lg:block" src={carImg}/>
                <div className="flex flex-col w-full gap-5">
                    <Card className="bg-card-1">
                        <CardBody className="py-[40px] px-[40px]">
                            <p className="font-bold text-[36px]">Как заказать автомобиль?</p>
                            <Button size="lg" variant="solid" className="max-w-[150px] mt-5"
                                    color="primary">Подробнее</Button>
                        </CardBody>
                    </Card>
                    <Card className="bg-card-2">
                        <CardBody className="py-[40px] px-[40px]">
                            <p className="font-bold text-[36px]">Долгосрочная аренда</p>
                            <Button size="lg" variant="solid" className="max-w-[150px] mt-5"
                                    color="primary">Подробнее</Button>
                        </CardBody>
                    </Card>
                    <Card className="bg-card-3">
                        <CardBody className="py-[40px] px-[40px]">
                            <p className="font-bold text-[36px]">Трансфер</p>
                            <Button size="lg" variant="solid" className="max-w-[150px] mt-5"
                                    color="primary">Подробнее</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="w-full bg-[#1A1B21] pt-10 px-5 py-5">
                <div className="flex gap-5 w-full items-center justify-around">
                    <div className="max-w-[1000px]">
                        <h1 className="font-bold pb-5 text-xl lg:text-[54px]">Предоставим авто на прокат</h1>
                        <p className="font-bold text-lg lg:text-[28px]">для деловых поездок и семейных путешествий</p>
                        <p className="pt-5 text-gray-500">Аренда автомобилей в Минске и по всей территории Республики Беларусь. В вашем распоряжении
                            автомобили от эконом-класса до премиума с различными типами кузова и объемами двигателя.
                            Доступна бронь транспортных средств без водителя на сутки и более длительный срок, которые
                            соответствуют потребностям клиентов и позволят сделать передвижение комфортным и безопасным.
                            <div className="h-2"/>
                            Парк постоянно обновляется, машины проходят техническое обслуживание и чистку перед тем, как
                            отправиться к вам. Мы предлагаем различные варианты проката и гибкие условия оплаты для
                            физических и юридических лиц. Корпоративные клиенты Inspire пользуются эксклюзивными
                            преимуществами, включая скидки на аренду и приоритетное обслуживание.
                        </p>
                    </div>
                    <Card className=" hidden lg:block max-h-[200px] max-w-[400px]">
                        <CardBody className="bg-primary min-w-[400px]">
                            <div className="flex items-center gap-5 mb-5">
                                <svg width="54" height="54" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.74982 18.6508C2.33982 18.6508 1.99982 18.3108 1.99982 17.9008V12.2008C1.94982 9.49078 2.95982 6.93078 4.83982 5.01078C6.71982 3.10078 9.23982 2.05078 11.9498 2.05078C17.4898 2.05078 21.9998 6.56078 21.9998 12.1008V17.8008C21.9998 18.2108 21.6598 18.5508 21.2498 18.5508C20.8398 18.5508 20.4998 18.2108 20.4998 17.8008V12.1008C20.4998 7.39078 16.6698 3.55078 11.9498 3.55078C9.63982 3.55078 7.49982 4.44078 5.90982 6.06078C4.30982 7.69078 3.45982 9.86078 3.49982 12.1808V17.8908C3.49982 18.3108 3.16982 18.6508 2.74982 18.6508Z"
                                        fill="white"/>
                                    <path
                                        d="M5.94 12.4492H5.81C3.71 12.4492 2 14.1592 2 16.2592V18.1392C2 20.2392 3.71 21.9492 5.81 21.9492H5.94C8.04 21.9492 9.75 20.2392 9.75 18.1392V16.2592C9.75 14.1592 8.04 12.4492 5.94 12.4492Z"
                                        fill="white"/>
                                    <path
                                        d="M18.19 12.4492H18.06C15.96 12.4492 14.25 14.1592 14.25 16.2592V18.1392C14.25 20.2392 15.96 21.9492 18.06 21.9492H18.19C20.29 21.9492 22 20.2392 22 18.1392V16.2592C22 14.1592 20.29 12.4492 18.19 12.4492Z"
                                        fill="white"/>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-xl"> Ваш оператор</p>
                                    <p>Подберем автомобиль, который лучше всего подходит для вашей поездки.</p>
                                    <p className="font-bold">+375 (29) 133-65-53</p>
                                    <p className="font-bold">ACME@ACME.by</p>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="w-full p-10 ">
                <h1 className="font-bold text-[54px]">Наш автопарк</h1>
                <p className="font-bold text-[28px]">востребованных автомобилей</p>
                <div className="flex flex-wrap gap-4 mt-5">
                    <Tabs className="max-w-[500px] lg:max-w-full" onSelectionChange={setType} color="primary" radius="sm" size="lg" aria-label="Tabs radius">
                        <Tab key="1" title="ЭКОНОМ КЛАСС"/>
                        <Tab key="2" title="СРЕДНИЙ КЛАСС"/>
                        <Tab key="3" title="БИЗНЕС КЛАСС"/>
                        <Tab key="4" title="ПРЕМИУМ КЛАСС"/>
                        <Tab key="5" title="ВНЕДОРОЖНИКИ"/>
                        <Tab key="6" title="МИКРОАВТОБУСЫ"/>
                    </Tabs>
                </div>
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-10">
                    {cars.filter(x => x.id == type).map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[240px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}