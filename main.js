new Vue({
    el: '#app',

    data: {

        isEditing: false,
        selectedIndex: null,
        todo: '',
        todos: ['Go to market', 'Buy new course']
    },
    methods: {
        storeTodo() {
            this.todos.push(this.todo);
            this.todo = '';
        },
        editTodo(index, todo) {
            this.todo = todo;
            this.selectedIndex = index;
            this.isEditing = true;
        },
        updataTodo() {
            this.todos.splice(this.selectedIndex, 1, this.todo);
            this.isEditing = false;

        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
})