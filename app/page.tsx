import Card from "@/components/card";
import Quote from "@/components/quote";

import Image from "next/image";

export default function Home() {
    const text = [
        "Overpopulation is a real issue worldwide, causing many deaths around the world due to famine, disease, and lack of available shelter. Dino Delivery is a clean solution to this problem. With each delivery, we make a positive impact on the wider world.",
        "Here at Dino Delivery, we know reliability is important. That's why we're proud to say that 100% of our deliveries have ended in a successful population decrease!",
        "But don't take it from us, ask a professtional! Top experts from many fields have glowing reveiws of our product:"
    ]

    const quotes = [
        ['Officer Rick Donnelly', 'Former Mall Security Supervisor', 'Crime rates drop to nearly zero when everyone is running for their lives. Truly innovative public safety strategy.'],
        ['Dr. Steven Barnes', 'Behavioral Psychologist', 'Nothing motivates community cooperation quite like a six-foot predator in the cul-de-sac.'],
        ['Dr. Harold Finch', 'Wildlife Management Specialist', "Historically, ecosystems thrive when there's a healthy fear of being hunted at all times."]
    ]
    return (
        <div className='min-h-screen bg-[#191919] text-white'>
            {/* <Sidebar /> */}
            {/* <Combobox /> */}
            <div className='h-screen w-full relative'>
                <h1 className='absolute top-16 left-6 text-6xl font-extrabold text-red-600 -rotate-6'>OVERPOPULATION IS A REAL ISSUE</h1>
                <h2 className='absolute top-40 left-6 text-4xl font-bold text-white -rotate-6'>AND WE'RE HERE TO FIX IT</h2>
                <div className='absolute top-72 right-20 bg-red-800 rounded-full h-52 w-52 p-2 flex items-center'>
                    <h3 className='text-2xl font-bold text-white rotate-6 w-48 text-center justify-center'>Order a velociraptor today. Or, fuck it, get two!</h3>
                </div>
                
                <Image src='/velociraptor.png' alt='really big velociraptor' fill/>
            </div>            
            <div className='h-screen w-full relative grid grid-cols-3 p-32 gap-28'>
                <Card src="nothing" text={text[0]} />
                <Card src='nothing' text={text[1]} />
                <div className='border-2 border-red-500 rounded-md p-6 bg-[#333333]'>
                    <h2>
                        {text[2]}
                    </h2>
                    <Quote person={quotes[0][0]} title={quotes[0][1]} quote={quotes[0][2]} />
                    <Quote person={quotes[1][0]} title={quotes[1][1]} quote={quotes[1][2]} />
                    <Quote person={quotes[2][0]} title={quotes[2][1]} quote={quotes[2][2]} />


                </div>
            </div>
            
        </div>
    );
}
