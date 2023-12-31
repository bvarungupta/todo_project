import { useContext } from "react"
import Batch from "./Batch"
import store from "@/context/store"

type BatchProps = {
    status :string,  
    id : number
}

function BatchContainer() {

 const arr : BatchProps[]  = [{
   status:"Todo",
   id : 1
 },{
    status:"InProgress",
    id : 2
  },
  {
    status:"InReview",
    id : 3
    
  },
  {
    status:"Completed",
    id : 4
  }] 

  const { projects , currentProjectId } =useContext(store);

  function getProjectById() : string{
        let name :string = "";
        projects.forEach((ele)=>{
            ele.projectId === currentProjectId ? name = ele.title : name =name
        })
        return name;
  }

  

  return ( 
    <div className="w-full ">
          {/* Project Title Section */}
          <div className="w-full px-[24px] py-[16px] border-b border-gray-300">
              { getProjectById()}
          </div>
         {/*Batch Grid*/}
        <div className="w-full grid grid-cols-4 gap-4 pt-[24px] pl-[10px]">
            {
                arr.map((ele)=>(
                    <Batch status={ele.status} key={ele.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default BatchContainer