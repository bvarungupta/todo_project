import { LuDot } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DialogClose } from "@/components/ui/dialog";
import { useContext, useState } from "react";
import store, { ProjectType, TodoType } from "@/context/store";
import Todo from "./Todo";


type BatchProps = {
    status :string, 
}

function Batch({status} : BatchProps ) {
  
   const {projects, SetTodoToCurrentProject , getTodosForCurrentProject ,currentProjectId} = useContext(store);
    
    const[todo , setTodo] = useState<Omit<TodoType,"todoId">>({
      title : "",
      status: "TODO",
      startDate : "",
      DeadLine : ""
    } as Omit<TodoType,"todoId">);

  const statusState = ["Todo" , "InProgress" , "InReview" , "Completed"];

  return (
    <div className="flex flex-col gap-[20px] px-2">
          {/* status Batch */}
          <div className={`text-sm w-fit flex items-center px-[12px] py-[4px] rounded-md 
          ${
            status==="Todo" ? "bg-[#EBEEFC] text-[#3659E2]" 
            : status==="InProgress" ? "bg-[#FDF2FA] text-[#EE46BC]"
            : status ==="InReview" ? "bg-[#ECF6F6] text-[#3FA1E3]"
            : "bg-[#E7F8E9] text-[#12BB23]"
          }
       `}>
            <LuDot />
            {status}
          </div>

          {
            getTodosForCurrentProject(currentProjectId).map((todo)=>{
               return <Todo {...todo}/>
            })
          }
                
        
          
      <Dialog>
      <DialogTrigger asChild>
        <button className={`text-sm  flex justify-center items-center gap-5  px-[8px] py-[10px] rounded-md ${
             status==="Todo" ? "bg-[#EBEEFC] text-[#3659E2]" 
             : status==="InProgress" ? "bg-[#FDF2FA] text-[#EE46BC]"
             : status ==="InReview" ? "bg-[#ECF6F6] text-[#3FA1E3]"
             : "bg-[#E7F8E9] text-[#12BB23]"
          }`}> <FaPlus size="10px"/>
             Add new</button>
      </DialogTrigger>
      
      <DialogContent className="w-[670px] ">
        <DialogHeader>
          <DialogTitle className="text-[#263FA0]">Add Task</DialogTitle>
        </DialogHeader>

          {/* DialogBody */}
          <div className="w-100 flex flex-col">
           
             {/* Task Inp Section */}
             <div className="flex flex-col gap-4">
                 <Label>Title</Label>
                 <Input type="text" value={todo.title} onChange={(e) => 
                 setTodo((curr)=>{
                  return {...curr,title:e.target.value}
                 })}/>
             </div>
              
              <div className="grid grid-cols-2 gap-5 mt-[24px]">
                  <div className="flex flex-col gap-4">
                    <Label>Start Date</Label>
                    <Input type="date" 
                     
                    value={todo.startDate}
                    onChange={(e)=>{
                       setTodo((curr)=>{    
                          return {...curr , startDate:e.target.value}
                       })
                    }} />
                  </div>     
                  <div className="flex flex-col gap-4">
                    <Label>End Date</Label>
                    <Input type="date" 
                     value={todo.DeadLine}
                     onChange={(e)=>{
                        setTodo((curr)=>{    
                           return {...curr , DeadLine :e.target.value}
                        })
                     }} 
                    />
                  </div>        
              </div>
             
             <div className="flex flex-col gap-4 mt-[24px]">
        <Label>Status</Label>
      <Select onValueChange={(e)=>{
        setTodo((curr)=>{
           return{...curr , status : e}
        })
      }
      }
        >
           <SelectTrigger className="w-full">
                   <SelectValue placeholder="TODO" />
            </SelectTrigger>
      <SelectContent>
          <SelectGroup>
             {
              statusState.map((ele)=>{
                   return <SelectItem 
                   value={ele}
                   key={ele}
                   >
                    {ele}
                  </SelectItem>
              })
             }
        </SelectGroup>
      </SelectContent>
    </Select>
             </div>
               
          </div>

        <DialogFooter>
          <DialogClose asChild>
          <Button className="bg-whitek border border-black text-blue-600" >Cancel</Button>
          </DialogClose>
          
          <DialogClose asChild>
          <Button className="bg-blue-600" onClick={()=>{
            
            SetTodoToCurrentProject({...todo , todoId:crypto.randomUUID()})
            console.log(projects)
          }}>Add</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    </div>
  )
}

export default Batch