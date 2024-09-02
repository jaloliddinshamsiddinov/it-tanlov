import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <div className="formBg bg-no-repeat">
        <div className="container mx-auto pt-[45px] px-[15px]">
          <div className="bg-gradient-to-b mb-4 from-red-400/90 from-[1%] via-red-400/35 to-red-400/35 via-30% w-full min-h-[500px] mx-auto shadow-2xl p-[50px] rounded-2xl">
            <h1 className="text-2xl mb-5 text-[31px] font-medium">Videoroliklar tanlovida ishtirok eting</h1>
            <p className="mb-[15px] text-[24px] font-[500] text-orange-700">Malumotlaringizni to′ldiring</p>

            <form>
              <p className="mb-1 mt-[35px]">1. Ismingiz <span className="text-red-500">*</span></p>
              <input className="px-4 py-1 border-b-[2px] border-transparent w-full focus:border-orange-500 focus:outline-none hover:border-orange-500" type="text" required placeholder="Javobingizni kiriting" />
              <p className="mb-1 mt-[35px]">2. Telefon raqamingiz <span className="text-red-500">*</span></p>
              <input className="px-4 py-1 border-b-[2px] border-transparent w-full focus:border-orange-500 focus:outline-none hover:border-orange-500" type="text" required placeholder="Javobingizni kiriting" />
              <p className="mb-1 mt-[35px]">3. E-mail <span className="text-red-500">*</span></p>
              <input className="px-4 py-1 border-b-[2px] border-transparent w-full focus:border-orange-500 focus:outline-none hover:border-orange-500" type="email" required placeholder="Javobingizni kiriting" />
              <p className="mb-1 mt-[35px]">4. Videorolikingizni havolasini qoldiring <span className="text-red-500">*</span></p>
              <input className="px-4 py-1 border-b-[2px] border-transparent w-full focus:border-orange-500 focus:outline-none hover:border-orange-500" type="text" required placeholder="Javobingizni kiriting" />
              <Link to={'/'}>
                <button className="px-[15px] py-[10px] bg-gray-500 text-white rounded-md mt-3 mr-3" type="button">Bosh sahifa</button>
              </Link>
              <button className="px-[15px] py-[10px] bg-orange-700 text-white rounded-md mt-3" type="submit">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
