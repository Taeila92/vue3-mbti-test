<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
p{
  line-height: 150%;
}
</style>
