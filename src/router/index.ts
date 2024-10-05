import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeViewIndex.vue';
import ClinicHistoryViewIndex from '@/views/ClinicHistoryView/ClinicHistoryViewIndex.vue';
import PatientViewIndex from '@/views/PatientsView/PatientViewIndex.vue';

import CalendarViewIndex from '@/views/CalendarView/CalendarViewIndex.vue';

import ReportsViewIndex from '@/views/ReportsView/ReportsViewIndex.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/patients',
      name: 'patients',
      component: PatientViewIndex
    },
    {
      path: '/clinic-history',
      name: 'clinic-history',
      component: ClinicHistoryViewIndex
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarViewIndex
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsViewIndex,
    },


    
  ]
})

export default router
