<template>
  <div class="product">
    <table v-for="data in datas" :key="data.id">
      <tr>
        <td>{{data.first}}</td>
        <td>{{data.current_page}}</td>
        <td>{{data.from}}</td>
        <td>{{data.last_page}}</td>
        <td>{{data.path}}</td>
        <td>{{data.per_page}}</td>
        <td>{{data.to}}</td>
        <td>{{data.total}}</td>
      </tr>
    </table>
  </div>
</template>

// <script>
import axios from 'axios'

export default{
  data(){
    return {
      datas: []
    };
  },
  async created(){
    try{
      const response = await axios.get('https://nasution.dev/api/products');
      this.datas = response.data
    }catch(e){
      console.log(e)
    }
    }
}


</script>
