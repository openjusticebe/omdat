<template>
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["labels", "serie"],

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
          categories: this.labels,
        },
        dataLabels: {
          enabled: false,
        },
      },

      series: [
        {
          name: "Year",
          data: this.serie,
        },
      ],
    };
  },
};
</script>