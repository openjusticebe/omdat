<template>
  <div class="example">
    <apexchart
      width="900"
      height="900"
      type="heatmap"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["api_data"],

  name: "HeatmapExample",

  data: function () {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        colors: ["#344c77"],

        xaxis: {
          type: "Courts",
        },
        title: {
          text: "HeatMap of court",
        },
      },
      series: [
        {
          name: "Metric1",
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric2",
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric3",
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric4",
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric5",
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
      ],
    };
  },
  methods: {
    generateData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = (i + 1).toString();
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push({
          x: x,
          y: y,
        });
        i++;
      }
      return series;
    },
  },
};
</script>
