import PageHelper from '@/module/home/components/aside/PageHelper';
import SelectImager from '@/module/home/components/aside/SelectImager';
import OpenSeadragon from '@/module/home/components/main/OpenSeadragon';



export default [

  {
    base:'/Vue/',
    path: '/label-*/dragon-*',
    components: {
      page: PageHelper,

      dragon: OpenSeadragon,
    }
  },
  {
    base:'/Vue/',
    path: '/label-*',
    components: {
      page: PageHelper,


    }
  },
  {
    base:'/Vue/',
    path: '/select-*/dragon-*',
    components: {
      page: SelectImager,
      dragon: OpenSeadragon,

    }
  },
  {
    base:'/Vue/',
    path: '/select-*',
    components: {
      page: SelectImager,


    }
  },

]
