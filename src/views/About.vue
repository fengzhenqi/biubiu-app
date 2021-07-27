<template>
  <div class="home">
    <main>
      <img :src="active.url" id="test-img" :style="{filter: filter}" alt="">
    </main>
    <footer>
      <div class="btn">
        <span @click="prev">取消</span>
        <span @click="reset">重置</span>
        <span @click="createImg">保存</span>
      </div>
      <el-form v-model="filterItems" size="mini" ref="filterItems">
        <el-form-item label="模糊度">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="100" v-model="filterItems.blur"></el-slider>
        </el-form-item>
        <el-form-item label="线性值">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="300" v-model="filterItems.brightness"></el-slider>
        </el-form-item>
        <el-form-item label="对比度">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="200" v-model="filterItems.contrast"></el-slider>
        </el-form-item>
        <el-form-item label="灰度像">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="100" v-model="filterItems.grayscale"></el-slider>
        </el-form-item>
        <el-form-item label="色环角">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="360" v-model="filterItems.hueRotate"></el-slider>
        </el-form-item>
        <el-form-item label="反转色">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="100" v-model="filterItems.invert"></el-slider>
        </el-form-item>
        <el-form-item label="透明度">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="100" v-model="filterItems.opacity"></el-slider>
        </el-form-item>
        <el-form-item label="饱和度">
          <el-slider :min="0" input-size="mini" :show-tooltip="false"  :max="1000" v-model="filterItems.saturate"></el-slider>
        </el-form-item>
        <el-form-item label="深褐色">
          <el-slider :min="0" input-size="mini" :max="100" v-model="filterItems.sepia"></el-slider>
        </el-form-item>
      </el-form>
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
      filterItems: {}
    }
  },
  computed: {
    ...mapState(['active']),
    filter () {
      let {
        blur,
        brightness,
        contrast,
        grayscale,
        hueRotate,
        invert,
        opacity,
        saturate,
        sepia,
      } = this.filterItems
      let str = ` blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)`
      return str
    }
  },
  methods: {
    createImg() {
      let imgVm = document.querySelector('#test-img');
      domtoimage.toPng(imgVm)
        .then(function (dataUrl) {
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img);
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
            history.go(-1)
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
      // domtoimage.toPixelData(imgVm)
      //   .then(function (pixels) {
      //     console.log(pixels);
      //   })
    },
    /**
     * 取消 返回上一页
     */
    prev() {
      history.go(-1)
    },
    /**
     * 重置
     */
    reset () {
        this.filterItems = {
        blur: 0, // 0+高斯模糊
        brightness: 100, // 0-100+ 一种线性乘法 明暗
        contrast: 100, // 0-100+ 图像的对比度
        grayscale: 0, // 0-100 灰度图像
        hueRotate: 0, // 0-360deg +  色环角度值
        invert: 0, // 0-100 反转色
        opacity: 100, // 0-100 透明度
        saturate: 100, // 0-100+  饱和度
        sepia: 0, // 0-100 深褐色
      }
    }
  },
  created () {
    this.reset()
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
  max-width: 700px;
  padding: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  background: rgba(0, 0, 0, .1);
  /deep/.el-form-item__label {
    color: #fff;

  }
  /deep/.el-slider {
    width: calc(~'100% - 100px') !important;
    margin-left: 70px;
  }
  .btn {
    width: 100%;
    color: #1feb18;
    display: flex;
    justify-content: space-between;
    padding-bottom:  10px;
    span {
      cursor: pointer;
    }
  }
}
</style>