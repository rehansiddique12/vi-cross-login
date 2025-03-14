import Sidebar from "../components/sidebar"
import Tablecomp from "../components/table-comp"
import Tradecomp from "../components/trade-comp"




const Trades = () => {
  return (
    <div className="flex">
     <Sidebar/>
    <div className="w-full h-screen flex flex-col justify-between bg-Background px-8">
    <Tradecomp/>
    <Tablecomp/>
    </div>
     
    </div>
  )
}

export default Trades