<template>
    <div class="wrapper">
        <info-bar :player="players[active_player]"/>

        <main class="board">
            <section class="tiles">
                <tile
                        v-for="tile in tiles"
                        :key="tile.id"
                        :id="tile.id"
                        :value="tile.value"
                        @clicked="updateTile"
                />
            </section>
        </main>
    </div>
</template>


<style lang="scss">
    .wrapper {
        height: 100%;
    }

    .board {
        height: calc(100% - 128px);
        width: calc(100% - 128px);
        margin: 0 auto;
    }

    .board .tiles {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: 100%;
    }
</style>

<script>
import Toastr from 'toastr';
import BoardState from '../models/BoardState';
import Tile from './Tile';
import InfoBar from './InfoBar';

export default {
  name: 'game-board',
  components: { Tile, InfoBar },
  data() {
    return {
      active_player: 0,
      players: [
        {
          name: 'Mint',
          score: 0,
          identifier: 'X',
        },
        {
          name: 'Os',
          score: 0,
          identifier: 'O',
        },
      ],
      tiles: [
        {
          id: 1,
          value: null,
        },
        {
          id: 2,
          value: null,
        },
        {
          id: 3,
          value: null,
        },
        {
          id: 4,
          value: null,
        }, {
          id: 5,
          value: null,
        },
        {
          id: 6,
          value: null,
        },
        {
          id: 7,
          value: null,
        },
        {
          id: 8,
          value: null,
        },
        {
          id: 9,
          value: null,
        },
      ],
    };
  },
  methods: {
    updateTile(payload) {
      this.getTileById(payload.id).value = this.players[this.active_player].identifier;

      this.updateBoardState();

      this.active_player = Number(!this.active_player);
    },
    getTileById(id) {
      let requestedTitle = null;

      this.tiles.forEach((tile) => {
        if (tile.id !== id) {
          return;
        }

        requestedTitle = tile;
      });

      return requestedTitle;
    },
    updateBoardState() {
      const state = new BoardState(this.players, this.tiles);
      const winner = state.getWinner();

      if (!state.isBoardFull() && !winner) {
        return;
      }

      if (state.isDraw()) {
        Toastr.warning('It\'s a draw', 'Oh, no!', { timeOut: 2500 });
      } else {
        Toastr.success(`The winner is: ${winner.name}`, 'Congratulations!', { timeOut: 2500 });
      }

      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>
