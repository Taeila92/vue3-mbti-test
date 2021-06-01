<template>
  <section class="container">    
    <section v-if="!result()">
      <div class="progress">
        <p class="progress__number">
          {{ cnt + 1 }} / {{ mbti.questionList.length }}
        </p>
        <div class="progress__box"></div>
      </div>
      <p class="question">
        {{ mbti.questionList[cnt].q }}
      </p>
      <div class="container__btn">
        <Btn
          @click="select(a.type[0])"
          v-for="a in mbti.questionList[cnt].a"
          :key="a.type">
          {{ a.answer }}
        </Btn>
      </div>
    </section>
    <section
      v-else
      class="result">
      <div class="result__tendency">
        {{ results[0] }}
      </div>
      <div class="result__explain">
        {{ results[1] }}
      </div>
    </section>
  </section>
</template>

<script>
// import mbti from 'assets/data.json'
import mbti from 'assets/demodata.json'
import Btn from '~/components/Btn.vue'

export default {
  components: {
    Btn
  },
  data(){
    return {
      mbti,
      cnt: 0,
      mbtiTest: {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0
      },
      tendency: '',
      results: ['', '']
    }
  },
  watch: {
    tendency(){
      for(let i = 0 ; i < this.mbti.resultsList.length ; i++){
        if(this.tendency === this.mbti.resultsList[i].types){
          this.results[0] = this.mbti.resultsList[i].types
          this.results[1] = this.mbti.resultsList[i].desc
        }
      }
    }
  },
  methods: {
    select(type){
      switch(type){
        case 'E': this.mbtiTest.E++; break
        case 'I': this.mbtiTest.I++; break
        case 'S': this.mbtiTest.S++; break
        case 'N': this.mbtiTest.N++; break
        case 'T': this.mbtiTest.T++; break
        case 'F': this.mbtiTest.F++; break
        case 'J': this.mbtiTest.J++; break
        case 'P': this.mbtiTest.P++; break
      }
      this.cnt++
      if(this.cnt === this.mbti.questionList.length){
        this.mbtiTest.E > this.mbtiTest.I ? this.tendency += 'E' : this.tendency += 'I'
        this.mbtiTest.S > this.mbtiTest.N ? this.tendency += 'S' : this.tendency += 'N'
        this.mbtiTest.T > this.mbtiTest.F ? this.tendency += 'T' : this.tendency += 'F'
        this.mbtiTest.J > this.mbtiTest.P ? this.tendency += 'J' : this.tendency += 'P'
      }
      document.querySelector('.progress__box').style.width = ((this.cnt + 1) / this.mbti.questionList.length ) * 100 + '%';

    },
    result() {
      return this.mbti.questionList.length === this.cnt
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    border: 1px solid tomato;
    border-radius: 10px;
    width: 50%;
    margin-top: 3rem;
    .progress {
      width: 100%;
      margin: 1rem 0 3rem;
      .progress__number {
        text-align: right;
        margin:0 1rem 1rem 0;
      }
      .progress__box {
        width: 0%;
        height: 1rem;
        background-color: rgb(255, 62, 28);
        transition: .2s;
        margin-right: 1rem;
        border-radius: 3px;
        box-sizing: border-box;
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1rem;
          background-color: rgba(190, 190, 190, .1);
        }
      }
    }
    .question {
      text-align: center;
      font-size: 20px;
    }
    .container__btn {
      display: flex;
      align-content: center;
      justify-content: center;
      margin:1rem 0 1rem;
    }
    .result{

      .result__tendency {
        margin-top: 1rem;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
      }
      .result__explain {
        margin: 1rem;
      }
    }
  }
</style>