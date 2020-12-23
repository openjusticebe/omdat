import axios from "axios";

export default {
    props: ['page_url'],
  
    data() {
      return {
        fields: {},
        error: null,
        errors: {},
        data_fetched: false,
        loaded: true,
      }
    },
    mounted() {
    },
    created() {
      this.fetchData(this.page_url);
    },
    methods: {
        
      fetchData(page_url){
        if (page_url == null) { // If page_url not specified
          if(this.$route.fullPath == '/') {
            page_url = process.env.VUE_APP_REST_API_URL + '/BE/'; // If homepage --> default API with /BE
          }
          else {
            page_url = process.env.VUE_APP_REST_API_URL + this.$route.fullPath; // If !Homepage
          }
        }
        // fix if API doesn't provide https -- should be solved in API directly
        if (page_url.match('^http://')){
          page_url = page_url.replace("http://","https://")
        }
        axios.get(page_url, {
            headers: {
              Accept: "application/json",
            },
          })
        .then((response) =>{
          if(response.status == 200){
            this.fields = response.data;
            this.data_fetched = true;
          }
        }).catch(err=>{
          console.log(err)
        });
      },
  },
  }
  