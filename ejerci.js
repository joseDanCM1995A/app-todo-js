const app = new Vue({
    el: "#app",
    data:{
        title: "GYM con Vue",
        tareas:[],
        nuevaTarea: ""
    }, methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea =  "";
            localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        },
        editarEstado: function(index){
            this.tareas[index].estado = true;
            localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        },
        eliminarTarea: function(index){
            this.tareas.splice(index, 1);
            localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
        }

    },
    created: function(){
        let datosLS = JSON.parse(localStorage.getItem("gym-vue"));
        if(datosLS===null){
            this.tareas = []
        }else{
            this.tareas=datosLS;    
        }
    }

});