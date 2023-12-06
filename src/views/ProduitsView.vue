<template>
  <!--
  <div class="opacity-60">
    <img
      src="https://bertrandravache.com/wp-content/uploads/2017/04/Fotolia_110529990_M-1.jpg"
      class="object-cover h-80 w-full"
    />
  </div>
  -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-7 p-12">
    <div class="bg-white shadow rounded-lg">
      <img
        src="https://www.energie-sante-nature.com/wp-content/uploads/2020/02/bienfaits-du-vin-1200x640.jpg"
        class="rounded-t-lg object-cover h-2/5 w-full"
      />
      <h3 class="p-3 font-semibold">Rouge</h3>
      <p class="mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
        diam. Maecenas ligula massa
      </p>
      <el-button class="m-6"
        ><RouterLink :to="{ name: 'rouge' }" class="m-6">Voir page</RouterLink></el-button
      >
    </div>
    <div class="bg-white shadow rounded">
      <img
        src="https://www.troisfoisvin.com/wp-content/uploads/2018/05/kaboompics_Rose-wine-glass-on-christmas-table-1-830x553.jpg"
        class="rounded-t-lg object-cover h-2/5 w-full"
      />
      <h3 class="p-3 font-semibold">Rosé</h3>
      <p class="mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
        diam. Maecenas ligula massa
      </p>
      <el-button class="m-6"
        ><RouterLink :to="{ name: 'rose' }" class="m-6">Voir page</RouterLink></el-button
      >
    </div>
    <div class="bg-white shadow rounded">
      <img
        src="https://actufood.fr/wp-content/uploads/2021/06/vin-blanc.png"
        class="rounded-t-lg object-cover h-2/5 w-full"
      />
      <h1 class="p-3 font-semibold">Blanc</h1>
      <p class="mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
        diam. Maecenas ligula massa
      </p>
      <el-button class="m-6"
        ><RouterLink :to="{ name: 'blanc' }" class="m-6">Voir page</RouterLink></el-button
      >
    </div>
    <div class="bg-white shadow rounded">
      <img
        src="https://theartoffoodandwine.com/wp-content/uploads/2019/10/800px-Pouring_champagne.jpg"
        class="rounded-t-lg object-cover h-2/5 w-full"
      />
      <h1 class="p-3 font-semibold">Pétillants</h1>
      <p class="mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
        diam. Maecenas ligula massa
      </p>
      <el-button class="m-6"
        ><RouterLink :to="{ name: 'petillant' }" class="m-6">Voir page</RouterLink></el-button
      >
    </div>
    <div class="bg-white shadow rounded">
      <img
        src="http://cocktailsmania.com/wp-content/uploads/2021/03/Que-sont-les-digestifs.jpeg"
        class="rounded-t-lg object-cover h-2/5 w-full"
      />
      <h1 class="p-3 font-semibold">Digestifs</h1>
      <p class="mx-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
        tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
        diam. Maecenas ligula massa
      </p>
      <el-button class="m-6"
        ><RouterLink :to="{ name: 'digestif' }" class="m-6">Voir page</RouterLink></el-button
      >
    </div>
  </div>
</template>
