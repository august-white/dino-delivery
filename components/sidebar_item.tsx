import React from 'react'

type Props = {
    name: string;
}

const SidebarItem = ({name}: Props) => {
  return (
    <p className='text-[#3a3a3a] font-bold hover:bg-[#202020] p-1 rounded-sm mt-3 mx-5 uppercase'>
    {name}
</p>
  )
}

export default SidebarItem