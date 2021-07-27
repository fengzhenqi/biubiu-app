<template>
  <div class="home">
    <main>
      <img :src="active.url" alt="">
    </main>
    <footer>
      <el-carousel :interval="4000" type="card" :autoplay="false" height="100px" :initial-index="active.initialIndex" @change="changeActive">
        <el-carousel-item v-for="item in dict" :key="item.url">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import {mapState} from 'vuex'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      showEdit: false,
    }
  },
  computed: {
    ...mapState(['active', 'dict'])
  },
  methods: {
    changeActive(val) {
      console.log(val);
      this.$store.commit('setActive', this.dict[val])
    }
  }
}
</script>
<style lang="less" scoped>
.home,
main {
  width: 100%;
  height: 100%;
  background: #000;
}

img {
  width: 100%;
  vertical-align: top;
}

footer {
  width: 100%;
  height: 150px;
  padding-top: 18px;
  max-width: 700px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);

  .img {
    height: 100%;
  }
}
</style>