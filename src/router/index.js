import Vue from 'vue';
import Router from 'vue-router';
import GameBoard from '@/components/GameBoard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game-board',
      component: GameBoard,
    },
  ],
});
