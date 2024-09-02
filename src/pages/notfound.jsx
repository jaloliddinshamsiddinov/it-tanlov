import Navbar from "../components/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div className='container mx-auto flex justify-center items-center w-full h-full'>
        <div className="px-[35px] flex justify-center items-center py-2 bg-slate-600 rounded-md">
          <h1 className='text-lg font-bold text-white'>Notfound !</h1>
        </div>
      </div>
    </>
  )
}
