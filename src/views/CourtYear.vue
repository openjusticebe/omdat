<template>
  <h1>
    {{ $route.params.court }} <small>{{ $route.params.year }}</small>
  </h1>

  <div v-if="!data_fetched">
    <loading-animation />
  </div>
  <div class="table-responsive" v-else>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Document {{ $route.params.court }}
            {{ $route.params.year }}
          </th>
          <th scope="col" />
          <th scope="col">Description</th>
        </tr>
      </thead>
      
    </table>
  </div>
</template>
<script>
import getDataMixin from "../mixins/getDataMixin";

export default {
  mixins: [getDataMixin],

  props: {
    msg: String,
    page_url: String,
  },
  data() {
    return {};
  },
};
</script>