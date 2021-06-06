<template>
  <section class="container">    
    <section v-if="!result()">
      <div class="progress">
        <p class="progress__number">
          {{ cnt + 1 }} / {{ mbti.questionList.length }}
        </p>
        <div
          ref="progressBox"
          class="progress__box"></div>
      </div>
      <p class="question">
        {{ mbti.questionList[cnt].q }}
      </p>
      <div class="container__btn">
        <Btn
          class="active"
          @click="select(a.type[0])"
          v-for="a in mbti.questionList[cnt].a"
          :key="a.answer">
          {{ a.answer }}
        </Btn>
      </div>
    </section>
    <section
      v-else
      class="result">
      <div class="result__MbtiTendency">
        {{ user }} 님은 {{ results[0] }} 입니다.
      </div>
      <div class="result__explain">
        {{ results[1] }}
      </div>
      <div class="graph">
        <div
          v-for="(ten, idx) in tendency"
          :key="ten"
          class="graph__box">
          <p
            v-for="lTen in leftTendency[idx]"
            :key="lTen"
            class="box__left-tendency">
            {{ lTen }}
          </p>
          <div class="box__left">
            <div 
              v-for="n in mbtiTest.left[idx]"
              :key="n"
              class="left__cnt"></div>  
          </div>
          <p class="box__explain">
            {{ ten }}
          </p>
          <div class="box__right">
            <div 
              v-for="n in mbtiTest.right[idx]"
              :key="n"
              class="right__cnt"></div>
          </div>
          <p
            v-for="rTen in rightTendency[idx]"
            :key="rTen"
            class="box__right-tendency">
            {{ rTen }}
          </p>
        </div>
      </div> 
      <a href="/">
        <Btn class="restart">다시하기
        </Btn>
      </a>
    </section>
  </section>
</template>

<script>
// import mbti from 'assets/data.json'
import mbti from 'assets/demodata.json'
import Btn from '~/components/Btn'

export default {
  components: {
    Btn
  },
  data(){
    return {
      userName: '',
      mbti,
      cnt: 0,
      mbtiTest: {
        left: [0, 0, 0, 0], // E , S , T , J
        right : [0, 0, 0, 0] // I , N , F , P
      },
      tendency: ['에너지 방향', '인식 기능', '판단 기능', '생활 양식'],
      leftTendency: ['외향', '감각', '사고', '판단'],
      rightTendency: ['내향', '직관', '감정', '인식'],
      MbtiTendency: '',
      results: ['', '']
    }
  },
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  watch: {
    MbtiTendency(){
      for(let i = 0 ; i < this.mbti.resultsList.length ; i++){
        if(this.MbtiTendency === this.mbti.resultsList[i].types){
          this.results[0] = this.mbti.resultsList[i].types
          this.results[1] = this.mbti.resultsList[i].desc
        }
      } 
    }
  },
  methods: {
    select(type){      
      switch(type){
        case 'E': this.mbtiTest.left[0]++; break
        case 'I': this.mbtiTest.right[0]++; break
        case 'S': this.mbtiTest.left[1]++; break
        case 'N': this.mbtiTest.right[1]++; break
        case 'T': this.mbtiTest.left[2]++; break
        case 'F': this.mbtiTest.right[2]++; break
        case 'J': this.mbtiTest.left[3]++; break
        case 'P': this.mbtiTest.right[3]++; break
      }
      this.cnt++
      if(this.cnt === this.mbti.questionList.length){
        this.mbtiTest.left[0] > this.mbtiTest.right[0] ? this.MbtiTendency += 'E' : this.MbtiTendency += 'I'
        this.mbtiTest.left[1] > this.mbtiTest.right[1] ? this.MbtiTendency += 'S' : this.MbtiTendency += 'N'
        this.mbtiTest.left[2] > this.mbtiTest.right[2] ? this.MbtiTendency += 'T' : this.MbtiTendency += 'F'
        this.mbtiTest.left[3] > this.mbtiTest.right[3] ? this.MbtiTendency += 'J' : this.MbtiTendency += 'P'

      }
      this.$refs.progressBox.style.width = ((this.cnt + 1) / this.mbti.questionList.length ) * 100 + '%'
      // document.querySelector('.progress__box').style.width = ((this.cnt + 1) / this.mbti.questionList.length ) * 100 + '%'

    },
    result() {
      return this.mbti.questionList.length === this.cnt
      }
    }
  }
</script>

<style lang="scss" >
@keyframes move {
  from {
    margin-left: 100%;
    opacity: 0;
  }
  to {
    margin-left: 0%;
    opacity: 1;
  }
}
@keyframes opac {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
  .container {
    position: absolute;
    margin: auto;
    right: 0;
    left: 0;
    border: 1px solid tomato;
    border-radius: 10px;
    width: 95%;
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
        transition: .4s;
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
      .active:first-child {
        animation: opac .5s;
      }
      .active:last-child {
        animation: move .5s ease-in-out 1 normal;
      }
    }

    .result{
      position: relative;
      .result__MbtiTendency {
        margin-top: 1rem;
        font-size: 30px;
        text-align: center;
        font-weight: bold;
      }
      .result__explain {
        margin: 1rem;
      }
      .graph {
        margin: 1rem;
        .graph__box {
          display: flex;
          justify-content: center;
          align-items: stretch;
          margin: 10px 0 10px;
          
          .box__left {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            .left__cnt {
              width: 4%;
              height: 1rem;
              background-color:royalblue;
              margin-right: 1px;
            }
          }
          .box__explain {
            font-size: 12px;
            text-align: center;
            margin: 0 1rem 0;
            width: 300px;
          }
          .box__right {
            width: 100%;
            display: flex;
            .right__cnt {
              width: 4%;
              height: 1rem;
              background-color: orange;
              margin-right: 1px;
            }
          }
          .box__left-tendency,
          .box__right-tendency {
            margin: 0 1px 0;
          }
        }
      }
      .restart {
        position: absolute;
        left: 50%;
        margin-left: calc(-5rem / 2);
      }
    }
  }
</style>