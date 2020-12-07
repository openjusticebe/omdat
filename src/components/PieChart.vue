<template>
  <div>
    <apexchart
      type="pie"
      width="380"
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
      series: this.serie,
      chartOptions: {
        colors: [
          "#4dc0b5",
          "#6574cd",
          "#9561e2",
          "#f66d9b",
          "#e3342f",
          "#f26c22",
          "#ffed4a",
          "#38c172",
          "#6cb2eb",
          "#4B6CBE",
        ],
        chart: {
          width: 380,
          type: "pie",
        },

        labels: this.labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>