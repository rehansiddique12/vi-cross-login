import { BiLoader } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Laravel = () => {
  return (
    <div className="w-full h-screen flex">
        <div className="w-[70%] h-full p-10 ">
            <p className="text-xl text-White font-smbold font-myFont">WORKBOARD</p>
            <nav className="bg-[#504c79] w-full py-2 mt-3 px-7 justify-between items-center flex text-gray-300">
                <div className="flex">
                <p className="text-gray-300 text-lg mt-1">SEARCH:</p>
                <input type="search" 
                placeholder="TX / Ticket Number"
                className="border border-gray-300  ml-2 rounded-md text-gray-300 text-lg px-4 py-1"/>
                </div>
                <button className="p-2 bg-[#7367f0] rounded-md text-White">CLOSE ALL</button>
            </nav>
            <div className="grid grid-cols-2 gap-4 mt-4 text-White">
                <div className="bg-[#504c79]   p-3">
                    <div className="flex justify-between">
                    <div className="flex gap-8">
                        <p className="text-green-400 font-semibold">DEPOSIT</p>
                        <p className="text-green-400 font-semibold">2,000.00 TK</p>
                        <p className="text-White">BK33</p>
                    </div>
                    <div className="text-White flex gap-4">
                        <BiLoader className="size-7"/>
                        <RxCross2 className="size-7"/>
                    </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                        <p>Order Number: ABCD1234</p>
                        <p className="text-amber-300 font-semibold ">STATUS: <span>PANDING</span></p>
                    </div>
                    <div className="flex gap-10">
                        <p className="mt-2">Account Name: NAGAD</p>
                        <p className="mt-2">01810665588</p>
                    </div>
                    <div >
                        <p className="mt-2">Location: Office 1</p>
                        <p className="mt-2">Created At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Updated At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Input Transaction Number: CB34653AS1</p>
                        <p className="mt-2">Verified Transaction Number:</p>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <p>Callback Status: Null</p>
                        <button className="bg-blue-400 px-4 ml-10 rounded-md">Resend</button>
                        <button className="bg-blue-500 px-4 rounded-md">Activity</button>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <button className="bg-green-600 px-4 rounded-md">Edit</button>
                        <button className="bg-red-600 px-4 rounded-md">Manual Process</button>
                        <button className="bg-purple-600 px-4 rounded-md">Adjustment</button>
                    </div>
                </div>
                <div className="bg-[#504c79]   p-3">
                    <div className="flex justify-between">
                    <div className="flex gap-8">
                        <p className="text-green-400 font-semibold">WITHDRAWAL</p>
                        <p className="text-green-400 font-semibold">2,000.00 TK</p>
                        <p className="text-White">KU91</p>
                    </div>
                    <div className="text-White flex gap-4">
                        <BiLoader className="size-7"/>
                        <RxCross2 className="size-7"/>
                    </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                        <p>Order Number: ABCD1234</p>
                        <p className="text-amber-300 font-semibold ">STATUS: <span>PANDING</span></p>
                    </div>
                    <div className="flex gap-10">
                        <p className="mt-2">Account Name: NAGAD</p>
                        <p className="mt-2">01810665588</p>
                    </div>
                    <div >
                        <p className="mt-2">Location: Office 1</p>
                        <p className="mt-2">Created At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Updated At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Transaction Number: CB34653AS1</p>
                        <p className="mt-2">Remarks:</p>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <p>Callback Status: Null</p>
                        <button className="bg-blue-400 px-4 ml-10 rounded-md">Resend</button>
                        <button className="bg-blue-500 px-4 rounded-md">Activity</button>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <button className="bg-green-600 px-4 rounded-md">Manual</button>
                        <button className="bg-red-600 px-4 rounded-md">Manual Complete</button>
                        <button className="bg-orange-500 px-4 rounded-md">Retry</button>
                        <button className="bg-red-600 px-4 rounded-md">Reject</button>
                    </div>
                </div>
                <div className="bg-[#504c79]   p-3">
                    <div className="flex justify-between">
                    <div className="flex gap-8">
                        <p className="text-green-400 font-semibold">WITHDRAWAL</p>
                        <p className="text-green-400 font-semibold">2,000.00 TK</p>
                        <p className="text-White">WICKET</p>
                        
                    </div>
                    <div className="text-White flex gap-4">
                        <BiLoader className="size-7"/>
                        <RxCross2 className="size-7"/>
                    </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                        <p>Order Number: ABCD1234</p>
                        <p className="text-red-600 font-bold ">STATUS: <span>REJECT</span></p>
                    </div>
                    <div className="flex gap-10">
                        <p className="mt-2">Account Name: NAGAD</p>
                        <p className="mt-2">01810665588</p>
                    </div>
                    <div >
                        <p className="mt-2">Location: Office 1</p>
                        <p className="mt-2">Created At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Updated At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Transaction Number: CB34653AS1</p>
                        <p className="mt-2">Remarks:</p>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <p>Callback Status: Null</p>
                        <button className="bg-blue-400 px-4 ml-10 rounded-md">Resend</button>
                        <button className="bg-blue-500 px-4 rounded-md">Activity</button>
                    </div>
                   
                </div>
                <div className="bg-[#504c79]   p-3">
                    <div className="flex justify-between">
                    <div className="flex gap-8">
                        <p className="text-green-400 font-semibold">WITHDRAWAL</p>
                        <p className="text-green-400 font-semibold">2,000.00 TK</p>
                        <p className="text-White">PKLUCK</p>
                    </div>
                    <div className="text-White flex gap-4">
                        <BiLoader className="size-7"/>
                        <RxCross2 className="size-7"/>
                    </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                        <p>Order Number: ABCD1234</p>
                        <p className="text-green-600 font-bold ">STATUS: <span>COMPLETE</span></p>
                    </div>
                    <div className="flex gap-10">
                        <p className="mt-2">Account Name: NAGAD</p>
                        <p className="mt-2">01810665588</p>
                    </div>
                    <div >
                        <p className="mt-2">Location: Office 1</p>
                        <p className="mt-2">Created At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Updated At : 14/03/2025 13:48:56</p>
                        <p className="mt-2">Input Transaction Number: CB34653AS1</p>
                        <p className="mt-2">Verified Transaction Number:</p>
                    </div>
                    <div className="flex gap-4 mt-3">
                        <p>Callback Status: Success</p>
                        <button className="bg-blue-400 px-4 ml-10 rounded-md">Resend</button>
                        <button className="bg-blue-500 px-4 rounded-md">Activity</button>
                    </div>
                </div>
            </div>
                <div className="bg-red-400 mt-4 ">
                    <p className="text-White font-semibold text-lg">GATEWAY PERFORMACE MONITORING</p>
                    <div className="bg-[#333055] h-full w-full">
                        <p className="text-White text-lg ml-4 p-2">81% ~ 100%</p>
                        <div className=" bg-[#b6b2dd]">
                            <div className="flex gap-7 px-4 pt-2">
                            <p className="text-White font-semibold text-md">MERCHANT</p>
                            <p className="text-White font-semibold text-md">SUCCESS RATE</p>
                            <p className="text-White font-semibold text-md">TOTAL RECEIVED</p>
                            <p className="text-White font-semibold text-md">TOTAL PROCESSED</p>
                            <p className="text-White font-semibold text-md">AUTO PROCESS</p>
                            <p className="text-White font-semibold text-md">MANUAL PROCESS</p>
                            </div>
                            <fieldset className="w-full border-t border-2 mt-3 border-white"></fieldset>
                            <div className="h-16">
                                <div className="flex gap-17 px-4">
                                    <p className="text-White ">MERCHANT A</p>
                                    <p className="text-White">82%</p>
                                    <p className="text-White ml-4">5,834</p>
                                    <p className="text-White ml-14">5,245</p>
                                    <p className="text-White ml-14">5,200</p>
                                    <p className="text-White ml-14">45</p>
                                </div>
                                <div className="flex gap-17 px-4 mt-2 ">
                                    <p className="text-White ">MERCHANT B</p>
                                    <p className="text-White">87%</p>
                                    <p className="text-White ml-4">6,482</p>
                                    <p className="text-White ml-14">6,158</p>
                                    <p className="text-White ml-14">6,000</p>
                                    <p className="text-White ml-14">158</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className=" w-[30%] h-full p-10 ">
            <div className="bg-[#504c79] w-full py-2 mt-10 px-7 justify-between items-center text-White">
                <div className="flex justify-between mb-3">
                <button className="bg-pink-400 p-1 px-2">BKASH (5)</button>
                <button  className="bg-yellow-400 p-1 px-2">NAGAD (4)</button>
                <button className="bg-purple-600 p-1 px-2">ROCKET (2)</button>
                </div>
                <div>
                <p>bKash: 0128885568  Current Balance = 5,000TK</p>
                <p>bKash: 0128885568  Current Balance = 5,000TK</p>
                <p>bKash: 0128885568  Current Balance = 5,000TK</p>
                <p>bKash: 0128885568  Current Balance = 5,000TK</p>
                <p>bKash: 0128885568  Current Balance = 5,000TK </p>
                </div>
            </div>
            <p className="pt-4">NOTIFICATION CENTER</p>
            <div className="bg-[#504c79] w-full py-2  px-7 items-center text-White flex justify-between">
                <p>Warning!! bKash 0128885568 balance is low.</p>
                <div>
                    <p>close</p>
                    <p>1 mint ago</p>
                </div>
            </div>
            <p className="pt-4">WITHDRAWAL PENDING LIST (5 MINUTES)</p>
            <div className="bg-[#504c79] w-full py-2  px-7  items-center text-White flex justify-between">
                <div>
                <p>BK33 [Order Number] : 1,000TK</p>
                <p>Account: Nagad 01238857776</p>
                <p>Checking by: [Admin Name]</p>
                </div>
                <div>
                    <button className="bg-green-700 ml-10 px-2">check</button>
                    <p>1 mint ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Laravel