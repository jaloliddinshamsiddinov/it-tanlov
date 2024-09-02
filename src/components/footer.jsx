import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import { PiLineVertical } from 'react-icons/pi'
import { SiVexxhost } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-[#0F1724] h-[600px] pt-[350px]'>
            <div className='container mx-auto'>
                <Link data-aos="fade-down" to={'/'}>
                    <h1 className='font-medium text-[20px] whitespace-nowrap text-white'>IT-Tanlov.uz</h1>
                </Link>
                <p className='text-gray-500 my-5'>Yoshlar o‘rtasida IT ta’limni keng targ‘ib qilishda faol kontent mualliflar <br /> o‘rtasida "Videoroliklar" tanlovini e’lon qilamiz!</p>
                <div className='flex gap-5 mt-5 text-white'>
                    <Link target='_blank' to={'https://www.facebook.com/uzdigitaledu'}>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-500/15'><FaFacebook /></div>
                    </Link>
                    <Link target='_blank' to={'https://x.com/edudigital_uz'}>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-500/15'><SiVexxhost /></div>
                    </Link>
                    <Link target='_blank' to={'https://www.instagram.com/digital.eduuz/'}>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-500/15'><FaInstagramSquare /></div>
                    </Link>
                    <Link target='_blank' to={'https://www.youtube.com/@edu.digitaluz'}>
                        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-500/15'><FaYoutube /></div>
                    </Link>
                </div>

                <div className='flex justify-between flex-col-reverse items-center md:flex-row mt-5'>
                    <p className='text-gray-500'>"First MA" 2024.</p>
                    <div className='flex items-center text-white'>
                        <p>Privacy Policy</p>
                        <PiLineVertical />
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
