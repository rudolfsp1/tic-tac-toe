<template>
    <div class="info-bar">
        <h1>
            Tic-Tac-Toe
        </h1>

        <h2>Currently active:
            <span class="name" v-text="player.name"></span>
            <span class="identifier" v-text="'(' + player.identifier + ')'"></span>
        </h2>
    </div>
</template>

<style lang="scss">
    .info-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<script>
export default {
  name: 'info-bar',
  props: {
    player: {},
  },
};
</script>
