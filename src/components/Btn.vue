<template>
  <button
    :style="{ borderColor: color }"
    class="btn">
    <slot></slot>
  </button>
</template>


<script>
export default {
  props: {
    color: {
      type: String,
      default: 'tomato'
    }
  },
  mounted(){
    console.log(this.color)
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    width:5rem;
    height: 2rem;
    background-color: tomato;
    color: white;
    border-radius: 5px;
    text-align: center;
    line-height: 2rem;
    border: 1px solid tomato;
    transition: .2s;
    box-sizing: border-box;
    margin: 10px;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: tomato;
    }
  }
</style>