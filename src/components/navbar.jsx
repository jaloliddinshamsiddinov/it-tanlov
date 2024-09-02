import { Button } from '@mui/material'
import { useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div data-aos="fade-down" className='fixed left-0 top-0 right-0 z-50 bg-white '>
                <div className={`container px-[15px] flex flex-col justify-center lg:px-0 pt-1 mx-auto w-full transition-all ${isOpen ? 'h-auto' : 'h-[75px] overflow-y-hidden'}`}>
                    <div className='w-full h-[75px] flex justify-between items-center'>
                        <Link to={'/'}>
                            <h1 className='font-bold text-[24px] whitespace-nowrap'>IT-Tanlov.uz</h1>
                        </Link>

                        <div className='hidden sm:block'>
                            <Link to={'ishtirok-etish'}>
                                <Button variant="contained">Ishtirok etish</Button>
                            </Link>
                        </div>


                        <div onClick={() => setIsOpen(prev => !prev)} className=' w-full flex sm:hidden justify-end'>
                            {isOpen ? <MdClose size={32} /> : <IoIosMenu size={32} />}
                        </div>
                    </div>

                    {isOpen && <div className='flex sm:hidden justify-center transition-all mb-6'>
                        <Link to={'ishtirok-etish'}>
                            <Button variant="contained">Ishtirok etish</Button>
                        </Link>
                    </div>}
                </div>
            </div>
        </>
    )
}
