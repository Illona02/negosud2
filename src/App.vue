<template>
  <div class="bg-gray-100 h-max">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <!--change la taile du header-->
      <RouterLink :to="{ name: 'home' }" class="inline-flex items-center h-full">
        Accueil
      </RouterLink>
      <div class="flex items-center gap-3">
        <RouterLink
          :to="{ name: 'gestion' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Gestion des stocks
        </RouterLink>
        <RouterLink
          :to="{ name: 'produits' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Produits
        </RouterLink>
        <RouterLink
          :to="{ name: 'panier' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Votre panier
        </RouterLink>
        <RouterLink
          :to="{ name: 'contact' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        >
          Contact
        </RouterLink>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
