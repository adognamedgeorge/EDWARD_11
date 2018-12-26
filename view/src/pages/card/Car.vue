<template>
  <div>
    <!--通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。-->
    <!--通过设置属性dis-hover来禁用鼠标悬停显示阴影的效果。-->
    <!--通过设置属性shadow来显示卡片阴影，使用该属性后，bordered和dis-hover将无效，建议在灰色背景下使用。-->
    <Card :bordered="false" dis-hover shadow>
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        Classic film
      </p>
      <a href="#" slot="extra" @click.prevent="changeLimit">
        <Icon type="ios-loop-strong"></Icon>
        CHANGE
      </a>
      <ul class="icon_list">
        <li v-for="item of randomMovieList" :key="item.index">
          <a :href="item.url">{{item.name}}</a>
          <span>
            <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
            <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
            <Icon type="ios-star-half" v-else></Icon>
            {{item.rate}}
          </span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Car',
  data () {
    return {
      movieList: [
        {
          name: '11111111111111',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: '2222222222222222',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: '33333333333333',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: '4444444444444',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: '555555555555555',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: '6666666666666666666',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: '777777777777777777',
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: '888888888888888888888888',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: '99999999999999999999999',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        }
      ],
      randomMovieList: []
    }
  },
  methods: {
    changeLimit () {
      function getArrayItems (arr, num) {
        const arr1 = []
        for (let index in arr) {
          arr1.push(arr[index])
        }
        const arr2 = []
        for (let i = 0; i < num; i++) {
          if (arr1.length > 0) {
            const arrIndex = Math.floor(Math.random() * arr1.length)
            arr2[i] = arr1[arrIndex]
            arr1.splice(arrIndex, 1)
          } else {
            break
          }
        }
        return arr2
      }
      this.randomMovieList = getArrayItems(this.movieList, 3)
    }
  },
  mounted () {
    this.changeLimit()
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/reset.scss';
  .icon_list {
    .ivu-icon {
      color: orange;
    }
  }
</style>
