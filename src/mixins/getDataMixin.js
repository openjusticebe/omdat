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
        if (page_url == null) {
            page_url = process.env.VUE_APP_REST_API_URL + 'BE/';
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
  