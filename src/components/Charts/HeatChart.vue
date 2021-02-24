<template>
  <div class="">
    <apexchart
      width="1000"
      height="1000"
      type="heatmap"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["api_data"],

  name: "Heatmap",

  data: function () {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        colors: [
          "#F3B415",
          "#F27036",
          "#663F59",
          "#6A6E94",
          "#4E88B4",
          "#00A7C6",
          "#18D8D8",
          "#A9D794",
          "#46AF78",
          "#A93F55",
          "#8C5E58",
          "#2176FF",
          "#33A1FD",
          "#7A918D",
          "#BAFF29",
        ],
        xaxis: {
          type: "Courts",
        },

        title: {
          text: "Documents per court",
        },
      },
      series: this.arrangeSeries(this.api_data),
    };
  },
  methods: {
    arrangeSeries(api_data) {
      var i = 0;
      var series = [];
      while (i < Object.keys(api_data).length) {
        var name = Object.keys(api_data)[i];
        var data = this.arrangeData(Object.values(api_data)[i]);
        series.push({
          name: name,
          data: data,
        });
        i++;
      }
      return series.reverse();
    },
    arrangeData(data) {
      var i = 0;
      var serie = [];
      while (i < Object.keys(data).length) {
        var x = Object.keys(data)[i];
        var y = Object.values(data)[i];
        serie.push({
          x: x,
          y: y,
        });
        i++;
      }
      return serie;
    },
  },
};
</script>
