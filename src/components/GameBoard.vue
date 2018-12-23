<template>
    <div>
        <h1>
            Tic-Tac-Toe
        </h1>

        <main class="board">
            <section class="tiles">
                <button v-for="item in 9" class="tile"></button>
            </section>
        </main>
    </div>
</template>


<style lang="scss">

</style>

<script>
export default {
  name: 'game-board',
  data() {
    return {};
  },
};
</script>
