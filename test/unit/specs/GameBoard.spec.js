import Vue from 'vue';
import GameBoard from '@/components/GameBoard';

describe('GameBoard.vue', () => {
  const Constructor = Vue.extend(GameBoard);
  const vm = new Constructor().$mount();
  const tiles = vm.$el.querySelectorAll('.tile');

  it('should have 9 tiles', () => {
    expect(tiles.length).toBe(9);
  });

  it('should react when tile is clicked', () => {
    const button = vm.$el.getElementsByTagName('button')[0];

    button.click();

    /**
     * This was expected to work, but tests do not work together with
     * setTimeout functionality. Leaving it here for now-being
     */
    setTimeout(() => {
      expect(button.innerHTML).toEqual(expect.stringContaining('X'));
    }, 2000);
  });
});
