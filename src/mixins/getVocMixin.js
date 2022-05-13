import axios from "axios";

export default {
    props: ['subject'],

    data() {
      return {
        tree: [],
        documents: [],
        current: {},
        top: {},
        parent: {},
        error: null,
        errors: {},
        data_fetched: false,
        loaded: true,
        collection: 'omdat',
      }
    },

    mounted() {
    },

    created() {
      this.fetchData(this.subject);
    },

    methods: {
      fetchData(subject){
        let cl_subject = encodeURIComponent(encodeURIComponent(subject));
        let page_url = `https://voc.openjustice.lltl.be/nav/${this.collection}/${cl_subject}`;
        axios.get(page_url, {
            headers: {
              Accept: "application/json",
            },
          })
        .then((response) =>{
          if(response.status == 200){
            this.tree = response.data.tree
            this.documents = response.data.documents
            this.current = response.data.current
            this.parent = response.data.parent
            this.top = response.data.topConcept
            this.data_fetched = true;
          }
        }).catch(err=>{
          console.log(err)
        });
      },
  },
  }
  
