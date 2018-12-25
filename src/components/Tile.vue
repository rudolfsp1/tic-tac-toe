<template>
    <div class="tile">
        <button @click="clicked" :disabled="isDisabled">
            {{ value }}
        </button>
    </div>
</template>

<style lang="scss">
    @import "../assets/stylesheets/colors";

    $radius: 24px;
    $third-of-screen: 33%;
    $size: 80%;
    $font-size: 2em;

    .tile {
        width: $third-of-screen;
        height: $third-of-screen;

        button {
            width: $size;
            height: $size;
            background: $color-unique;
            border-radius: $radius;
            font-size: $font-size;

            &:active, &:focus, &:disabled {
                background: $color-primary;
            }
        }
    }
</style>

<script>
export default {
  name: 'tile',
  props: {
    value: null,
    id: null,
  },
  computed: {
    isDisabled() {
      return !!this.value;
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked', {
        id: this.id,
        value: this.value,
      });
    },
  },
};
</script>
