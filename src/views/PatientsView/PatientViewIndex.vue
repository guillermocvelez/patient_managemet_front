<template>
  <div class="view-container">
    <h3 class="view-title ">Administrador de pacientes</h3>
    
    <div class="patients-table-container">
      <PatientsTableHeader />
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.field">
              {{ column.header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>Documento</td>
            <td>3316076065</td>
            <td>40 años</td>
            <td>Última cita</td>
            <td>Medicamentos</td>
            <td>Historia</td>
          </tr>

          <tr>
            <td>Nombre</td>
            <td>Documento</td>
            <td>3316076065</td>
            <td>40 años</td>
            <td>Última cita</td>
            <td>Medicamentos</td>
            <td>Historia</td>
          </tr>
          
          
          
        </tbody>
      </table>
      <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>

  </div>
</template>

<script setup lang="ts">
import Paginator from 'primevue/paginator';
import PatientsTableHeader from './components/PatientsTableHeader.vue';
import {  ref } from 'vue';

interface TableColumn {
    field: string;
    header: string;
}

const columns = ref<TableColumn[]>([
  {
    field: 'nombre',
    header: 'Nombre'
  },
  {
    field: 'documento',
    header: 'Documento',
  },
  {
    field: 'phone',
    header: 'Teléfono',
  },
  {
    field: 'age',
    header: 'Edad',
  },
  {
    field: 'last_appointment',
    header: 'Última cita',
  },
  {
    field: 'patient_meds',
    header: 'Medicamentos',
  },
  {
    field: 'patient_clicnics',
    header: 'Historias clínicas',
  }
]);
</script>

<style scoped>
.patients-table-container{
  height: 100%;
  background-color: white;
  margin-top: 16px;
  padding: 16px;
  border-radius: 16px;
  overflow-y: scroll;
}


</style>