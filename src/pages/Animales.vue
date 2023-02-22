<template>
  <Table name="animals" shortName="animal" :testFields="testFields" :testFieldsR="testFieldsR" :listModal="listModal"></Table>
</template>
  
  <script>
import  Table from "@/components/Table.vue"; 

import { ref, onMounted } from "vue";

export default {
  name: "AnimalesComponent",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Table
  }, 
  setup() { 
    const testFields = ref([
      "id",
      "name", 
      "especie",
      "category",
      "fecha",
    ]);

    const testFieldsR = ref([
      "Id",
      "Nombre", 
      "Especie",
      "Categoría",
      "Fecha",
    ]); 

    let listModal = ref([
      {name :"Nombre", type: "text", realName: "name"}, 
      {name :"Especie", type: "text", realName: "especie"},
      {name :"Categoría", type: "text", realName: "category"},
      {name :"Fecha", type: "date", realName: "fecha"},
     ]); 

     return {
      listModal,
      testFields,
      testFieldsR
    };
  },
};
</script>
 