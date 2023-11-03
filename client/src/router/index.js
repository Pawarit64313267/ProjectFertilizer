import Vue from 'vue'
import Router from 'vue-router'
// Fertilizer
import FertilizerIndex from '@/components/Fertilizer/Index'
import FertilizerCreate from '@/components/Fertilizer/CreateFertilizer'
import FertilizerEdit from '@/components/Fertilizer/EditFertilizer'
import FertilizerShow from '@/components/Fertilizer/ShowFertilizer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fertilizer',
      name: 'fertilizer',
      component: FertilizerIndex,
      meta: {
        title: 'fertilizer'
      }
    },
    {
      path: '/fertilizer/create',
      name: 'fertilizer-create',
      component: FertilizerCreate,
      meta: {
        title: 'Create Fertilizer'
      }
    },
    {
      path: '/fertilizer/edit/:fertilizerId',
      name: 'fertilizer-edit',
      component: FertilizerEdit,
      meta: {
        title: 'Edit Fertilizer'
      }
    },
    {
      path: '/fertilizer/:fertilizerId',
      name: 'fertilizer',
      component: FertilizerShow,
      meta: {
        title: 'Show Fertilizer'
      }
    },
  ]
})
