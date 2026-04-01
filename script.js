const { createApp } = Vue;

createApp({
  data() {
    return {
      contador: 0,

      tarefas: [
        { nome: "Estudar Vue" },
        { nome: "Fazer projeto" }
      ]
    };
  },

  methods: {

    incrementar() {
      this.contador++;
    },

    decrementar() {
      this.contador--;
    },

    resetar() {
      this.contador = 0;
    },

    adicionarTarefa() {
      const novaTarefa = {
        nome: "Nova tarefa " + (this.tarefas.length + 1)
      };

      this.tarefas.push(novaTarefa);
    }

  }

}).mount("#app");
