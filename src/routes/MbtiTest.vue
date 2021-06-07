<template>
  <Name
    @click="nameUpdate"
    v-if="!nameOn" />
  <Mbti 
    :user-name="userName"
    v-else />
</template>

<script>
import Name from '~/components/Name'
import Mbti from '~/components/Mbti'

export default {
  components : {
    Name,
    Mbti
  },
  data(){
    return {
      nameOn: false
    }
  },
  computed: {
    userName() {
      return this.$store.state.mbti.userName
    }
  },
  methods: {
    nameUpdate(){
      return this.nameOn = true
    }
  }
}
</script>