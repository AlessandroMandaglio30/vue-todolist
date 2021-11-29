const app = new Vue({
    el: "#root",
    data: {
        todos: [
            {
                name: "Gufare la Croazia",
                done: true
            },
            {
                name: "Sperare in un miracolo di Sonego ",
                done: true
            },
            {
                name: "Ore 16:00 Primo singolare",
                done: false
            },
            {
                name: "Secondo singolare",
                done: false
            },
            {
                name: "Doppio",
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