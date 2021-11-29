const app = new Vue({
    el: "#root",
    data: {
        todos: [
            {
                name: "Fare l'esercizio dato da Samuele",
                done: true
            },
            {
                name: "Fare la spesa",
                done: true
            },
            {
                name: "Cucinare il pranzo",
                done: false
            },
            {
                name: "Pulire casa",
                done: false
            }
        ],
        newTodo: ''
    },
    methods: {
        addTodo: function () {
            if (this.newTodo != "") {

                this.todos.push({
                    name: this.newTodo,
                    done: false
                });
                this.newTodo = '';
            }
        },
        removeTodo: function (todoIndex) {
            this.todos.splice(todoIndex, 1);
        }
    }
});