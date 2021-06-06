<template>
  <section>
    <p>이름을 입력해 주세요.</p>
    <div class="entry">
      <input
        v-model="name"
        ref="entryName"
        type="text"
        @keyup.enter="nameEntry(), $emit('click')" />
      <Btn @click="nameEntry(), $emit('click')">
        확인
      </Btn>
    </div>
  </section>
</template>
<script>
import Btn from '~/components/Btn'

export default {
  components: {
    Btn
  },
  data() {
    return {
      name: ''
    }
  },
  emits: [
    'click'
  ],
  methods: {
    nameEntry() {
      this.$store.dispatch('mbti/inputUserName', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    border: 1px solid tomato;
    border-radius: 10px;
    width: 95%;
    margin-top: 3rem;
    p {
      text-align: center;
      margin: 1rem;
    }
    .entry {
      position: relative;
      display: flex;
      justify-content: center;
      align-content: center;
      input {
        top: 0;
        bottom: 0;
        margin: auto 0 auto;
        height: 1rem;

      }
    }
  }
</style>