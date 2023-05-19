<template>
  <div id="main" style="width: 600px;height: 400px;">

  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例
onMounted(() => {
  var myChart = echarts.init(document.getElementById('main'));
  // 指定图表的配置项和数据
  var option = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: '直接访问'
          },
          {
            value: 234,
            name: '联盟广告'
          },
          {
            value: 1548,
            name: '搜索引擎'
          }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

</script>
<style></style>