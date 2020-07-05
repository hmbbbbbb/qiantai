/*
 搜索商品导航标签
 */
<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '品牌',
          tags: [ '吉得利', '咕咕鲜', '友家', '摩斯维(msvii)', '博家', '王守义', '耐尔金(NILLKIN)', '洛克(ROCK)', '麻辣空间', '老干妈', '宽窄' ]
        },
        {
          tagName: '款式',
          tags: [ '中国', '日本', '韩国', '意大利', '德国', '澳大利亚', '美国', '泰国', '法国', '英国' ]
        },
        {
          tagName: '种类',
          tags: [ '尖椒', '砀山椒', '红椒', '螺丝椒', '七彩椒', '线椒', '米椒', '菜椒', '朝天椒' ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #ccc;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>
