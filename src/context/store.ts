import React from "react";


export type TodoType = {
    todoId : string,
    title  : string,
    status : string,
    startDate : string,
    DeadLine  : string
}

export type ProjectType = {
    title : string
    projectId : string,
    todos : TodoType[] ,
}


type StoreType  = {
       projects : ProjectType[],
       addProject : (project:ProjectType)=>void,
       currentProjectId : string,
       setCurrentProject : (projectId :string) => void,
       SetTodoToCurrentProject : (Todo : TodoType) => void
       todos : TodoType[],
       getTodosForCurrentProject : ()=> void
}


const store = React.createContext<StoreType>({} as StoreType);

export default store;