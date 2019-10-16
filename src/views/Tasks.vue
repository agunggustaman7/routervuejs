<template>
  <div class="tasks">

   <table v-for="data in datas" :key="data.id">
    <tr>
        <td>{{data.name}}</td>
        <td>{{data.done_at}}</td>
        <td>{{data.created_at}}</td>
        <td>{{data.update_at}}</td>
     </tr>
   </table>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return {
      datas: []
    };
  },
  async created(){
    try{
      const response = await axios.get('https://nasution.dev/api/tasks');
      this.datas = response.data
    }catch(e){
      console.log(e)
    }
    }
}


</script>
