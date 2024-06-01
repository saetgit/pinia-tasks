import { defineStore } from "pinia";

const useTaskStore=defineStore('taskStore',{
    state:()=>({
        tasks:[
            {id:1,title:'buy some milk',isFav:false},
            {id:2,title:'working out',isFav:false}
        ],
        name:'sara'
    })
})

