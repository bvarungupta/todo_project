import React from "react";
import { useState } from "react";
import store from "./store";

type ChildrenType = {
    children : React.ReactNode
}

type TodoType = {
      todoId : string,
      title  : string,
      status : string,
      startDate : string,
      DeadLine  : string
}

type ProjectType = {
      title : string
      projectId : string,
      todos : TodoType[] ,
}

function Provider({children} : ChildrenType){
         const [projects,setProjects] = useState<ProjectType[]>([] as ProjectType[]);
         const [currentProjectId , setCurrentProjectId] = useState<string>("");
         const [todos , SetTodos] = useState<TodoType[]>([] as TodoType[]);
           function addProject(project:ProjectType):void{
                setProjects((curr)=>{
                    return [project , ...(curr as ProjectType[])]
                })
                return;
           }
          
           function setCurrentProject(projectId:string) : void{
              setCurrentProjectId(projectId);
              return;
           }
          
           function SetTodoToCurrentProject(todo : TodoType){ 
            let arr = projects.map((project)=>{
                       if(project.projectId === currentProjectId){
                          return {...project , todos : [...project.todos ,todo]}
                       }
                       return {...project}
                });    
                setProjects(arr);       
           } 
           
           function getTodosForCurrentProject() : TodoType[]{
              projects.forEach((project)=>{
                  if(project.projectId === currentProjectId) {
                     SetTodos(project.todos);
                  }
              })

              return todos;

           }
               
      
         return <store.Provider value={{projects,addProject,currentProjectId,setCurrentProject,SetTodoToCurrentProject,getTodosForCurrentProject}}>
            {children}
         </store.Provider>
}

export default Provider;