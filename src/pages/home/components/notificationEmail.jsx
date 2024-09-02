
export default function NotificationEmail() {
    return (
        <div className="container mx-auto translate-y-[25%] lg:translate-y-[50%] -mt-[200px]">
            <div className="w-full h-auto flex flex-col lg:flex-row md:justify-between md:items-center gap-5 bg-blue-600 rounded-xl p-[55px]">
                <div className="img">
                    <img className="lg:w-[500px]" src="https://framerusercontent.com/images/X195nCN40zqJSrrZtTKmnw9ew.png" alt="member" />
                </div>
                <div className="flex lg:block flex-col items-center text-center lg:text-start">
                    <h1 className="text-[38px] font-bold text-white mb-5">Tanlov yangiliklaridan xabardor bo&quot;ling</h1>
                    <p className="text-[18px] font-bold text-white mb-5">Elektron pochta manzilingizni kiriting va yangiliklarga obuna bo&quot;ling.</p>
                    <div className="flex rounded-xl bg-white w-max overflow-hidden items-center h-[50px]">
                        <input type="email" className=" p-4 outline-none" placeholder="example@gmail.com"/>
                        <div className=" lg:w-[200px] h-[80%] bg-blue-600 rounded-lg mr-2 overflow-hidden">
                            <button className="bg-blue-600 lg:w-full h-full active:bg-blue-500 text-white font-medium text-[12px] lg:text-[16px] whitespace-nowrap px-2">Obuna bo&apos;lish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
