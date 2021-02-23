<template>
  <div class="">
    <apexchart
      width="1000"
      height="1500"
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
        colors: ["#2ab3a8"],

        xaxis: {
          type: "Courts",
        },
        title: {
          text: "HeatMap of court",
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
      return series;
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
