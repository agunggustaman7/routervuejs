<template>
  <div class="blog">
      <p>{{blogs}}</p>
  
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return {
      blogs: []
    };
  },
  async created(){
    try{
        const response = await axios.get('https://nasution.dev/api/blog');
      this.blogs = response.data
    }catch(e){
      console.log(e)
    }
    }
}


</script>
