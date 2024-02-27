<template>
  <div>
    <header>
      <section class="w-full flex justify-center items-center mt-2">
        <h1 class="text-white text-2xl font-semibold">
          Piloto Driver de Teste de Pilotagem
        </h1>
      </section>
      <main>
        <section class="flex flex-col justify-center items-center mt-4">
          <header class="flex items-center gap-2 justify-center mb-8">
            <h2 class="text-white text-lg font-semibold">
              Formulário da Alegria
            </h2>
            <i
              class="text-gray-300 hover:text-gray-400 cursor-pointer"
              @click="handlerDriver('nome')"
              >como usar</i
            >
          </header>
          <form class="flex flex-col gap-2">
            <label class="text-white text-md font-semibold" for="nome"
              >Informe seu nome:</label
            >
            <input
              id="nome"
              name="nome"
              class="p-2 rounded-md bg-[#414141] outline-none text-white"
              v-model="form.nome"
              type="text"
            />
            <label class="text-white text-md font-semibold" for="comidaFavorita"
              >Informe sua comida favorita:</label
            >
            <input
              id="comidaFavorita"
              name="comidaFavorita"
              class="p-2 rounded-md bg-[#414141] outline-none text-white"
              v-model="form.comidaFavorita"
              type="text"
            />
            <button
              id="btn-submit"
              class="p-1 mt-4 bg-green-700 hover:bg-green-800 rounded-md shadow-md text-white"
              @click.prevent="handleSubmit(form.nome, form.comidaFavorita)"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </section>
        <section class="flex flex-col justify-center items-center mt-4">
          <div v-if="result.nome" class="flex items-center gap-1">
            <p class="text-white text-2xl font-semibold">Seu nome:</p>
            <p class="text-white text-2xl font-semibold">{{ result.nome }}</p>
          </div>
          <div v-if="result.comidaFavorita" class="flex items-center gap-1">
            <p class="text-white text-2xl font-semibold">
              Sua comida favorita:
            </p>
            <p class="text-white text-2xl font-semibold">
              {{ result.comidaFavorita }}
            </p>
          </div>
        </section>
      </main>
    </header>
    <footer class="flex absolute bottom-0 w-screen justify-center">
      <p class="mb-2 text-white">
        POC made by
        <a
          href="https://github.com/soares-grs"
          target="_blank"
          class="text-blue-600 hover:text-blue-500"
          >@soares-grs</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import "driver.js/dist/driver.css";
import { handlerDriver } from "./services/driver-service.js";

const form = reactive({
  nome: "",
  comidaFavorita: "",
});

const result = reactive({});

const handleSubmit = (nome, comidaFavorita) => {
  (result.nome = nome), (result.comidaFavorita = comidaFavorita);
};
</script>
