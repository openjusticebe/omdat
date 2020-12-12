
<template>
  <div>
    {{ Object.keys(api_data) }}
    {{ Object.values(api_data) }}
    <apexchart
      type="heatmap"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["api_data"],

  data: function () {
    return {
      chartOptions: {
        colors: [
          "#4B6CBE",
          "#6574cd",
          "#9561e2",
          "#f66d9b",
          "#e3342f",
          "#f26c22",
          "#ffed4a",
          "#38c172",
          "#4dc0b5",
          "#6cb2eb",
        ],

        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: Object.keys(this.api_data),
        },
        dataLabels: {
          enabled: false,
        },
      },

      series: [
        {
          name: "Year",
          data: "Object.keys(this.api_data)",
        },
      ],
    };
  },
};
</script>