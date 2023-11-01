
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './CustomerRouters'


const Routers = () => {
  return (
   <Routes>
    <Route path='/*' element={<CustomerRouters />}/>
    
   </Routes>
  )
}

export default Routers