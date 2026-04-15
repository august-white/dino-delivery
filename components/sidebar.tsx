
import { Briefcase, ChartSpline, CircleCheckBig, HomeIcon, Inbox, Layers, Plus, SearchIcon, SquarePen, UserRoundPlus } from "lucide-react"
import { Button } from "./ui/button"
import SidebarItem from "./sidebar_item"
import Link from "next/link"

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='w-64 text-md h-screen bg-[#191919] border-r border-[#262626]'>
        <div className='py-3 flex items-center justify-around'>
            <Button className='bg-[#191919] text-[#606060] border border-[#2b2b2b] w-[200px] justify-start h-8'>
                <SquarePen />
                New Issue
            </Button>
            <div className='border border-[#2b2b2b] rounded-md h-8 flex items-center p-1'>
                <SearchIcon className='text-[#737373]' />
            </div>
        </div>

        <ul className="text-[#9f9f9f] px-y px-4 space-y-2">
            <li className='hover:bg-[#202020] p-1 items-center rounded-sm flex space-x-4'>
                <HomeIcon className='h-4 w-4' />
                <p>Home</p>
            </li>
            <li className='hover:bg-[#202020] p-1 items-center rounded-sm flex space-x-4'>
                <UserRoundPlus className='h-4 w-4' />
                <Link href='/yourwork'>Your Work</Link>
            </li>
            <li className='hover:bg-[#202020] p-1 items-center rounded-sm flex space-x-4'>
                <Inbox className='h-4 w-4' />
                <p>Inbox</p>
            </li>
        </ul>

        <SidebarItem name='Workspace' />

        <ul className="text-[#9f9f9f] px-4 space-y-2">
            <li className='hover:bg-[#202020] p-1 items-center rounded-sm flex space-x-4'>
                <Briefcase className='h-4 w-4' />
                <p>Projects</p>
            </li>
            <li className='hover:bg-[#202020] p-1 items-center rounded-sm flex space-x-4'>
                <Layers className='h-4 w-4' />
                <p>Views</p>
            </li>
            <li className='hover:bg-[#202020] p-1 rounded-sm flex justify-between items-center'>
                <div className='space-x-4 items-center flex justify-around'>
                    <CircleCheckBig className='h-4 w-4' />
                    <p>
                        Cycles
                    </p>
                </div>
                <p className="bg-[#212c47] text-[#396ae6] rounded-full px-2 py-0.5">
                    Pro
                </p>
            </li>
            <li className='hover:bg-[#202020] p-1 rounded-sm flex space-x-4'>
                <ChartSpline className='h-4 w-4' />
                <p>Analytics</p>
            </li>
        </ul>
        <SidebarItem name='Your Favorites' />
    </div>
  )
}

export default Sidebar