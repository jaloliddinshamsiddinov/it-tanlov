import { Button } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import SwiperComponent from "./swiper";

export default function Information() {
    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center px-[15px] md:px-0">
                <div className="pt-[60px] w-full md:w-[480px] lg:w-[560px]" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="font-bold text-blue-900 text-2xl sm:text-4xl mb-4" >Tanlov kimlar uchun?</h1>
                    <p className="text-gray-600 mb-3"> Maktab oʻquvchilari (12-17 yosh): “IT insonlar hayotini yengillashtiradi”</p>
                    <p className="text-gray-600 mb-3">Oʻquvchilar mazkur yoʻnalishda texnologiya real muammolarni hal qilish yoki kundalik hayotni qanday oʻzgartirishini koʻrsatib berishlari talab etiladi.</p>
                    <p className="text-gray-600 mb-3">IT universitet talabalari (17-25 yosh): “Rivojlanayotgan texnologiyalar”</p>
                    <p className="text-gray-600 mb-3">IT bozorida eng talabgir boʻlgan yoʻnalish hamda rivojlanayotgan texnologiyalar mazmun-mohiyatini ochib beruvchi tahliliy, taʼlimiy yoʻnalishdagi videoroliklar bo‘lib ular IT kelajagi va uning jamiyatga taʼsiri haqidagi qarashlarini taʼkidlaydi.</p>
                    <p className="text-gray-600 mb-3">OAV xodimlari: “Jamiyat va texnologiya”</p>
                    <p className="text-gray-600 mb-3">Aholi oʻrtasida raqamli savodxonlikni oshiruvchi hamda jamiyat muammolarini hal qilish, foydalanish imkoniyatini yaxshilash yoki ekologik barqarorlikni targʻib qilish uchun texnologiyadan foydalanadigan loyihalar yoki gʻoyalarni oʻz ichiga olgan ITdan ijtimoiy manfaatlar uchun qanday foydalanish mumkinligini koʻrsatadigan videolar.</p>
                    <p className="text-gray-600 mb-3">Blogerlar oʻrtasida: “Raqamli kreativ ijodkorlar”</p>
                    <p className="text-gray-600 mb-3">IT sohasiga tegishli tushunchalar, sohadagi soʻnggi tendensiya va raqamlashtirish borasida aholiga yaratilayotgan imkoniyatlarni sodda, qiziqarli shu bilan birga kreativ uslubda taqdim etuvchi videolar.</p>
                    <div className="flex gap-3">
                        <Link to={'/ishtirok-etish'}>
                            <Button variant="contained">Ishtirok etish</Button>
                        </Link>
                        <Link target="_blank" to={'https://t.me/digitaledu_uz/509'}>
                            <Button variant="outlined">Batafsil</Button>
                        </Link>
                    </div>
                    <div className="mt-10">
                        <p className="flex items-center font-bold text-gray-600 gap-2"><FaCheck color="blue" /> Ishtirok etish uchun ro‘yxatdan o‘ting</p>
                        <p className="flex items-center font-bold text-gray-600 gap-2"><FaCheck color="blue" /> Ochiq baholashda ovoz to‘plang</p>
                    </div>
                </div>
                <div >
                    <img className="w-full md:w-[480px] lg:w-[620px]" src="https://framerusercontent.com/images/yTWwCDoiS8kYz8bBoNwTg2diR4.png" alt="" />
                </div>



            </div>
            <div className="container mx-auto mt-[60px] text-center">
                <h1 className="font-bold text-blue-900 text-2xl sm:text-4xl mb-4" >Qanday baholanadi?</h1>
                <p className="text-gray-600 mb-3">Tanlov 2 bosqichda baholanadi.</p>
                <p className="text-gray-600 mb-3">1- bosqichda ishtirokchilar tomonidan joylangan media materiallar ochiq ovozga qo’yiladi. </p>
                <p className="text-gray-600 mb-3">2-bosqichda eng ko‘p ovoz to‘plangan ishlar hay’at a’zolari tomonidan quyidagi mezonlar asosida baholandi:</p>
                <p className="text-gray-600 mb-3">• Video kontent belgilangan mavzuga mos kelishi</p>
                <p className="text-gray-600 mb-3">• Ijodkorlik va kreativlik</p>
                <p className="text-gray-600 mb-3">• Video kontent orqali mavzuni aniq va tushunarli yoritib berilganligi</p>
                <p className="text-gray-600 mb-3">• Texnik talablarga mosligi</p>
            </div>
            <div className="container mx-auto mt-[60px] text-center">
                <h1 className="font-bold text-blue-900 text-2xl sm:text-4xl mb-4" >Kimlar baholaydi?</h1>
                <p className="text-gray-600 mb-3">Ovoz berish jarayonlaridan so‘ng, mediamahsulotlarni quyidagi professional hakamlar jamoasi baholashadi.</p>
            </div>
            <SwiperComponent/>
        </>
    )
}
