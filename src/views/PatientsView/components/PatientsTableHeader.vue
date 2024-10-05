<template>
  <div class="header">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="value1" placeholder="Search" />
    </IconField>
    <button class="add-patient">
      <AppAddPatientIcon />
      Agregar
    </button>
  </div>
</template>

<script setup lang="ts">
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import AppAddPatientIcon from '@/components/icons/AppAddPatientIcon.vue';
import { ref } from 'vue';


const value1 = ref();
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: var(--lighter-grey);
  border-radius: 8px;
  margin-bottom: 16px
}

button {
  padding: 8px 16px;
  background-color: white;
  border: 1px solid var(--light-blue);
  color: var(--light-blue);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
}

button:hover {
  opacity: 0.9;
}

button:active{
  transform: scale(0.98);
}


</style>