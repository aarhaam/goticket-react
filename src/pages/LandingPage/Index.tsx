import Buttons from "@/components/Buttons/Index"
import BeachPhoto from "@/assets/beach.jpg"


const LandingPage = () => {
    return (
        <div>

            {/* header section */}
            <div className="px-10 md:px-20 min-h-[70vh] flex flex-col-reverse md:grid md:grid-cols-2 gap-5 md:gap-10 content-center">
                <div className="flex flex-col content-center justify-center my-auto gap-5">
                    <h4 className="font-cursive text-3xl mx-auto">Beli Tiket di GOTicket, bisa langsung pergi kemana aja tanpa ribet ngurus ini itu</h4>
                    <div className="flex gap-4">
                        <Buttons title="Cek tiket event" color="primary" variant="contained" size="large" onClick={''} type="button"/>
                    </div>
                </div>
                <div>
                    <div className="pr-1 pb-1 pl-[-10px] border rounded-lg border-primary">
                        <img src={BeachPhoto} alt="vacation" className="rounded-lg" />
                    </div>
                </div>
            </div>
            {/* header section */}

            {/* ticket pesawat */}
            <div className="px-10 md:px-20 mt-20">
                <p className="font-roboto font-semibold text-xl">Beberapa Ticket Event Hot!</p>
                <p className="font-roboto text-gray-500">Serbu tiketnya biar bisa liburan bareng teman/keluarga kamu</p>
            </div>

        </div>
    )
}

export default LandingPage