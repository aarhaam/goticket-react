import Buttons from "@/components/Buttons/Index";

const Navbar = () => {
    return (
        <div className="px-10 md:px-20 py-3 flex flex-wrap justify-between bg-transparent backdrop-blur-lg sticky top-0">
           <div className="font-cursive text-4xl font-normal">GOTicket</div> 
           <div className="gap-8 hidden md:flex">
                <p className="font-roboto my-auto hover:cursor-pointer">Jadi partner goticket.com's</p>
                <p className="font-roboto my-auto hover:cursor-pointer">GOTiket Hadiah</p>
                <p className="font-roboto my-auto hover:cursor-pointer">Cek tiketmu</p>
                <div className="flex gap-2">
                    <Buttons title="Masuk" type="button" variant="contained" color="secondary" size="large" onClick={''} />
                    <Buttons title="Daftar" type="button" variant="contained" color="primary" size="large" onClick={''}/>
                </div>
           </div>
        </div>
    )
}

export default Navbar;