<template>
  <div class="main-layout-container">
    <nav class="main-navbar">
      <li>
        <RouterLink :to="{name: 'home'}">
          <AppHomeIcon />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'patients'}">
          <AppPatientsIcon />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'clinic-history'}" >
          <AppClinicHistoryIcon />
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'calendar'}" >
          <AppCalendarIcon />
        </RouterLink>        
      </li>
      <li>
        <RouterLink :to="{name: 'reports'}" >
          <AppChartIcon />
        </RouterLink>          
      </li>
    </nav>
    <div class="main-view">
      <div class="header-bar-container">
        <div class="header-bar">
          <input type="search">
          <div>
            <p>CarolinaAlvarez</p>
            <p>Psiquiatra</p>
          </div>
        </div>
      </div>
      <div class="view-container">
        <slot />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCalendarIcon from '@/components/icons/AppCalendarIcon.vue';
import AppChartIcon from '@/components/icons/AppChartIcon.vue';
import AppClinicHistoryIcon from '@/components/icons/AppClinicHistoryIcon.vue';
import AppHomeIcon from '@/components/icons/AppHomeIcon.vue';
import AppPatientsIcon from '@/components/icons/AppPatientsIcon.vue';
import { RouterLink } from 'vue-router';


</script>

<style scoped>
.main-layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  gap: 16px;
}

.main-navbar {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  /* background-color: var(--medium-blue); */
  /* box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);*/
} 

.header-bar-container {
  display: flex;
  justify-content: end;
  padding: 16px 0;
  padding-right: 16px;
}

.header-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%
}
.header-bar p {
  margin: 0;
}
input {
  height: 100%;
}

.main-view {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  
}

.view-container{
  border-top: 1px solid #e2e8f0;
  box-shadow: inset 0 3px 4px #0000001a;
  height: calc(100vh - 5rem);
  width: 100%;
  height: 100%;
  background-color: #f1f5f9;
  border-radius: 32px 0 0;
  overflow: hidden;
}
</style>