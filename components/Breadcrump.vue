<template>
  <div>
    <!-- <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(crumb, index) in crumbs"
            :key="index"
            class="breadcrumb-item"
        >
          <nuxt-link :to="crumb.to">
            {{ crumb.text ? crumb.text : 'Home' }}
          </nuxt-link>
        </li>
      </ol>
    </nav> -->
  </div>
</template>

<script>
// export default {
//   computed: {
//     crumbs: function() {
//       let pathArray = this.$route.path.split("/")
//       pathArray.shift()
//       let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
//         breadcrumbArray.push({
//           path: path,
//           to: breadcrumbArray[idx - 1]
//             ? "/" + breadcrumbArray[idx - 1].path + "/" + path
//             : "/" + path,
//           text: path,
//         })
//         return breadcrumbArray
//       }, [])
//       return breadcrumbs
//     }
//   }
// }
</script>
