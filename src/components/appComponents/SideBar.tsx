import Logo from "@/assets/Logo"
import { FaPlus } from "react-icons/fa6"

import { useContext, useState } from "react"
import store from "../../context/store"
import { ProjectType , TodoType} from "../../context/store" 
import { Dialog, DialogContent, DialogTrigger,DialogTitle , DialogHeader ,DialogFooter , DialogClose  } from "../ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

function SideBar() {

    //bg-[#EBEEFC]
   
    const {projects , addProject ,setCurrentProject ,currentProjectId} = useContext(store);
    
   const [projectName , setProjectName]= useState<string>("");

    function HandleAddProject(title : string){

           let newProject : ProjectType = {
             title : title,
             projectId : crypto.randomUUID(),
             todos : [] as TodoType[]
           }

           addProject(newProject);
    } 
  return (
    <div className="w-[240px] lg:flex flex-col gap-[24px]  border-r border-gray-300  hidden">
        {/*Logo and BrandName*/}
        <div className="w-full flex items-center gap-3  px-[24px] py-[16px] border-b border-gray-300 ">
            <div>
                <Logo/>
            </div>
            <div>
                <p className="font-bold">Task Boards</p>
            </div>
        </div>

      {/*Project Navigation*/}
       <div className="flex flex-col gap-[10px] px-[10px] ">
           {
            projects.map((ele)=>
              
                (ele.projectId === currentProjectId) ?
             <button className="py-[10px] px-[24px] rounded-md bg-[#EBEEFC] font-[400] text-sm text-[#232323] leading-[24px] " key={ele.projectId} 
                onClick={()=>setCurrentProject(ele.projectId)}>
                    {ele.title}
                </button> : <button className="py-[10px] px-[24px] rounded-md  font-[400] text-sm text-[#232323] leading-[24px] " key={ele.projectId} 
                onClick={()=>setCurrentProject(ele.projectId)}>
                    {ele.title}
                </button>
               
            )
           }
       </div>
      {/*Add New Button*/}
       <Dialog>
        <DialogTrigger asChild>
        <button className="py-[10px] px-[24px] rounded-md font-[400] text-sm text-[#3659E2] leading-[24px] flex gap-2 items-center">
                    <FaPlus/>
                    Add new Project
        </button>
        </DialogTrigger>

     <DialogContent>
         <DialogHeader>
          <DialogTitle className="text-[#263FA0]">Add Task</DialogTitle>
        </DialogHeader>
          
        <Input type="text" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
       
        <DialogFooter>
          <DialogClose asChild>
          <Button className="bg-white border border-black text-blue-600" >Cancel</Button>
          </DialogClose>
          
          <DialogClose asChild>
          <Button className="bg-blue-600" 
           onClick={()=>HandleAddProject(projectName)}
          >Add</Button>
          </DialogClose>

        </DialogFooter>

     </DialogContent>

       </Dialog>


    </div>
  )
}

export default SideBar