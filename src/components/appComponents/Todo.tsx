

import { TodoType } from "@/context/store"

type TodoPropsType = Omit<TodoType , "todoId">

export default function Todo({title, status , startDate , DeadLine } : TodoPropsType) {
     return   <div className=" w-[250px] rounded-lg bg-white shadow-[0px_0px_8px_rgba(54,_89,_226,_0.16)] overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-[10px]">
     <div className="relative leading-[24px] font-semibold">
       {title}
     </div>
     <div className="flex flex-row items-start justify-start gap-[24px] text-xs text-foundation-text-colors-secondary-text-color">
       <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
         <div className="relative leading-[20px]">Start date</div>
         <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
           <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
             <div className="flex flex-row items-center justify-center gap-[4px]">
               <div className={`relative leading-[20px] p-[0.2rem] rounded-lg ${ status==="Todo" ? "bg-[#EBEEFC] text-[#3659E2]" 
            : status==="InProgress" ? "bg-[#FDF2FA] text-[#EE46BC]"
            : status ==="InReview" ? "bg-[#ECF6F6] text-[#3FA1E3]"
            : "bg-[#E7F8E9] text-[#12BB23]"} `}>
                 {startDate}
               </div>
             </div>
           </div>
           <div className="rounded-lg bg-foundation-brand-brand-50 h-6 hidden flex-row items-center justify-center py-1 px-2 box-border">
             <div className="flex flex-row items-center justify-center gap-[4px]">
               <div className="relative leading-[20px]">Completed</div>
             </div>
           </div>
         </div>
       </div>
       <div className="shrink-0 flex flex-col items-start justify-start gap-[4px]">
         <div className="relative leading-[20px]">Deadline</div>
         <div className="shrink-0 flex flex-row items-start justify-start gap-[4px] text-foundation-brand-brand-500">
           <div className="rounded-lg bg-foundation-brand-brand-50 h-6 flex flex-row items-center justify-center py-1 px-2 box-border">
             <div className="flex flex-row items-center justify-center gap-[4px]">
               <div className={`relative leading-[20px] p-[0.2rem]  rounded-lg ${ status==="Todo" ? "bg-[#EBEEFC] text-[#3659E2]" 
            : status==="InProgress" ? "bg-[#FDF2FA] text-[#EE46BC]"
            : status ==="InReview" ? "bg-[#ECF6F6] text-[#3FA1E3]"
            : "bg-[#E7F8E9] text-[#12BB23]"}`}>
                {DeadLine}
               </div>
             </div>
           </div>
           <div className="rounded-lg bg-foundation-brand-brand-50 h-6 hidden flex-row items-center justify-center py-1 px-2 box-border">
             <div className="flex flex-row items-center justify-center gap-[4px]">
               
               <div className="relative leading-[20px]">Completed</div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>  
}
   