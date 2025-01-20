import Sidebaritem from './Sidebaritem'
import Home from '../icon/Home'
import People from '../icon/People'
import Payments from '../icon/Payments'
import User from '../icon/User'
import Reacoding from '../icon/Reacoding'

function 
Sidebar() {
  return (
    <div className='bg-white h-screen w-78 '>
        <div className='flex justify-between p-6'>

        <button className='bg-blue-900 px-4 py-2 rounded-lg' >webinar.gg</button>
        <div className='py-4 px-6 hover:bg-[#e5e9ee] rounded-md'>H</div>
        </div>
        <div className='mt-2 ml-4'>
            <Sidebaritem  title='Home' icon={<Home/>}/>
        </div>
        <div className='mt-2 ml-4'>
            <Sidebaritem  title='Webinars' icon={<People/>}/>
        </div>
        <div className='mt-2 ml-4'>
            <Sidebaritem  title='Payments & Billing' icon={<Payments/>}/>
        </div>
        <div className='mt-2 ml-4'>
            <Sidebaritem  title='User Management' icon={<User/>}/>
        </div>
        <div className='mt-2 ml-4'>
            <Sidebaritem  title='Recordings' icon={<Reacoding/>}/>
        </div>
    </div>
  )
}

export default Sidebar