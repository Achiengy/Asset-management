import React from 'react'
import RequestsTable from './RequestsTable'
import SideBar from './SideBar'

const ManagerDashboard = () => {
    return (
		<div className="min-h-screen">
			<nav className="relative flex flex-wrap shadow-md">
				<div className="container mx-auto flex flex-wrap ">
					<div className="w-full relative flex lg:w-auto lg:static flex ">
						<p className= "py-2 flex text-2xl uppercase font-bold leading-snug text-dark " >E-nventory</p>
					</div>
				</div>
			</nav>
			<div className='grid grid-cols-12'> 
				<SideBar/>
				<div className='col-span-9  min-h-screen pl-2 md:col-span-10'>
					<div className="relative flex flex-wrap items-center justify-between px-5">
						<p className="text-2xl">Pending Requests</p>
					</div>
					<hr/>
					<RequestsTable />
				</div>
			</div>
		</div>
	);
}

export default ManagerDashboard