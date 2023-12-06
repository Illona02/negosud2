<template>
  <div class="grid grid-cols-1 md:grid-cols-1 gap-7 p-12">
    <div class="bg-white shadow">
      <el-table :data="FilterTableData" stripe border>
        <el-table-column prop="nom" label="Nom" width="" />
        <el-table-column prop="annee" label="Année" width="" />
        <el-table-column prop="fournisseur" label="Fournissseur" width="" />
        <el-table-column prop="prix_u" label="Prix unitaire" width="120" />
        <el-table-column prop="prix_c" label="Prix en carton" width="120" />
        <el-table-column prop="quantité" label="Quantité disponible" width="" />
        <el-table-column align="right" prop="group" label="group">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Recherche" width="" />
          </template>
          <el-table-column prop="detail" label="" width="50">
            <template v-slot="scope">
              <el-button
                size="small"
                :icon="Search"
                @click="handleDetail(scope.row)"
                circle
              ></el-button>
            </template>
          </el-table-column>
          <el-table-column prop="quantiteSouhaite" label="" width="145">
            <template v-slot="scope">
              <el-input-number
                :min="0"
                :max="10"
                v-model="scope.row.quantiteSouhaite"
                size="small"
                controls-position="right"
                @change="handleChange(scope.row)"
              >
              </el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="boutonAjouter" label="" width="124">
            <template v-slot="scope">
              <el-button type="primary" :icon="Plus" @click="handleAjout(scope.row)" plain round
                >Ajouter</el-button
              >
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search, Plus } from '@element-plus/icons-vue'
import { ref, computed } from 'vue'

const handleChange = (row: Rouges) => {
  console.log(row)
}

const handleDetail = (row: Rouges) => {
  console.log(row)
}

const handleAjout = (row: Rouges) => {
  console.log(row, 'Quantité ajoutée!')
}

interface Rouges {
  nom: string
  reference: string
  annee: string
  fournisseur: string
  prix_u: string
  prix_c: string
  quantité: string
  detail: string
  quantiteSouhaite: number
}

const TableData: Rouges[] = [
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge machin',
    reference: 'g98ha',
    annee: '2021',
    prix_u: '6',
    prix_c: '29',
    fournisseur: 'Truc',
    quantité: '13',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  },
  {
    nom: 'Rouge bidule',
    reference: 'f58ge',
    annee: '2015',
    prix_u: '12',
    prix_c: '40',
    fournisseur: 'Truc',
    quantité: '8',
    detail: '',
    quantiteSouhaite: 0
  }
]

const search = ref('')

const FilterTableData = computed(() =>
  TableData.filter(
    (data) =>
      !search.value ||
      data.nom.toLowerCase().includes(search.value.toLowerCase()) ||
      data.annee.toLowerCase().includes(search.value.toLowerCase()) ||
      data.fournisseur.toLowerCase().includes(search.value.toLowerCase()) ||
      data.quantité.toLowerCase().includes(search.value.toLowerCase()) ||
      data.prix_u.toLowerCase().includes(search.value.toLowerCase()) ||
      data.prix_c.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>
