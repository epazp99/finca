<template>
  <div
    class="container text-center mt-5 mb-5"
    style="margin-right: 5%; margin-left: 5%"
  > 

    <div class="row" style="display:flex;margin:0 auto">
    <div style="text-align:start;justify-content:start;padding-top:1%;">
      Categoría: &nbsp; <input type="text" @change="filterTodo(activeFilter)" v-model="activeFilter">
    </div>

    <div style="text-align:end;justify-content:end;margin:0 auto;padding-left:73%;">
      <ModalAdd :title="'Agregar nuevo animal'" :list="listModal" v-on:update="fetchData()"/>
    </div> 
    </div>
    
    <br />
    <br />
    <div class="table-responsive scrollbar my-5" id="style-1">
      <table id="tableComponent" class="table table-striped" v-if="dataTest">
        <thead>
          <tr>
            <!-- loop through each value of the fields to get the table header -->
            <th
              v-for="field in testFieldsR"
              :key="field"
              @click="sortTable(field)"
            >
              {{ field }}
            </th>

            <th colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the list get the each student data -->
          <tr v-for="item in dataTest" :key="item.id" v-show="getCategory(item.category)"> 
            <td v-for="field in testFields" :key="field">{{ item[field] }}</td>
           
            <th class="trackB" @click="updateRow(item.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                class="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                />
              </svg>
            </th>

            <th class="trackB" @click="deleteItem(item.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                />
              </svg> 
            </th> 
          </tr>
        </tbody>
      </table>
    </div>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="deleteD"></div>
    </transition>
    <transition name="pop" appear>
      <div class="modal" style="width: 30%" role="dialog" v-if="deleteD">
        <a @click="deleteD = false" class="modal-exit">x</a>
        <br /><br />
        <h2>Seguro que desea eliminar?</h2>
        <br /><br />
        <div style="display: flex; justify-content: center">
          <button
            type="submit"
            class="button button--accept"
            @click="deleteFinal()">
            Aceptar
          </button>
          <button
            type="submit"
            class="button button--cancel"
            @click="deleteD = false">
            Cancelar
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
  
  <script>
import  ModalAdd from "@/components/ModalAdd.vue";

import { ref, onMounted } from "vue";

export default {
  name: "AnimalesComponent",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ModalAdd
    ,
  },
  props: {
    studentData: {
      type: Array,
    },
    fields: {
      type: Array,
    },
  }, 
  setup() {
    let dataTest = ref(null);
    let loading = ref(true);
    let error = ref(null);
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
    let deleteD = ref(false);
    let idTemp = ref("");

    let data = ref({
      name: "pruebaaaa",
      especie: "fff",
      category: "frtw4",
      anno: "frtw4",
      mes: "frtw4",
      bajas: "frtw4",
      altas: "frtw4",
    });

    let listModal = ref([
      {name :"Nombre", type: "text", realName: "name"}, 
      {name :"Especie", type: "text", realName: "especie"},
      {name :"Categoría", type: "text", realName: "category"},
      {name :"Fecha", type: "date", realName: "fecha"},
     ]);

    const fetchData = async () => {
      loading.value = true;
      const url = "http://localhost:9707/apis/animals/"; //"http://jsonplaceholder.typicode.com/posts";
      const r = await fetch(url);
      const data = await r.json();
      dataTest.value = data;
      loading.value = false;

      //simplificar fecha
      dataTest.value.forEach((element) => {
        element.fecha = element?.fecha?.substring(0, 10);
      });
    };

    function deleteItem(id) {
      deleteD.value = true;
      idTemp.value = id;
    }

    function deleteFinal() {
      deleteRow(idTemp.value);
      deleteD.value = false;
    }

    async function deleteRow(id) {
      const url = await fetch(`http://localhost:9707/apis/animals/${id}`, {
        method: "DELETE",
      });
      fetchData();
    }

    async function addRow() {
      const url = await fetch(`http://localhost:9707/apis/animals/`, {
        method: "POST",
        body: JSON.stringify(data.value),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      fetchData();
    }

    async function updateRow(id) {
      const url = await fetch(`http://localhost:9707/apis/animals/${id}`, {
        method: "PUT",
        body: JSON.stringify(data.value),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      fetchData();
    } 

    const filters = ref(['All', 'Personal', 'Work', 'Other']);
    let activeFilter = ref('');
    let actual = ref();

    function filterTodo(type) {
      if(type != '')
      activeFilter.value = type; 
    }

    function getTodos (){
      if (activeFilter.value === 'All') {
        return todos.value;
      }
      return todos.value.filter((item) => item.type === activeFilter.value);
    };

    function getCategory(cat){

      return activeFilter.value != null && activeFilter.value != '' ? activeFilter.value == cat : true;
    }

    onMounted(() => {
      fetchData();
    });

    return {
      dataTest,
      loading,
      error,
      testFields,
      deleteD,
      testFieldsR,
      deleteItem,
      deleteFinal,
      fetchData,
      addRow,
      updateRow,
      activeFilter,
      filters,
      filterTodo,
      getTodos,
      getCategory,
      actual,
      listModal
    };
  },
};
</script>

<style scoped lang="scss">
th,
td {
  padding: 15px !important;
  border-radius: 12px;
  border-color: lightgray !important;
  width: auto;
}

th {
  background-color: #42b983 !important;
  color: white;
  width: auto;
}

.trackB {
  width: auto;
}

.trackB:hover {
  background-color: #5ecc9a !important;
  cursor: pointer;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
  text-align: center;
  width: auto;
}
caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}
th {
  text-align: inherit;
  text-align: -webkit-match-parent;
  width: auto;
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  width: auto;
}
label {
  display: inline-block;
}
.table {
  --bs-table-color: var(--bs-body-color);
  --bs-table-bg: transparent;
  --bs-table-border-color: var(--bs-border-color);
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-body-color);
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: var(--bs-body-color);
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: var(--bs-body-color);
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: var(--bs-table-color);
  vertical-align: top;
  border-color: var(--bs-table-border-color);
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table-group-divider {
  border-top: 2px solid currentcolor;
}
.caption-top {
  caption-side: top;
}
.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}
.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}
.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}
.table-borderless > :not(:first-child) {
  border-top-width: 0;
}
.table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}
.table-striped-columns > :not(caption) > tr > :nth-child(2n) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}
.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}
.table-hover > tbody > tr:hover > * {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}
.table-primary {
  --bs-table-color: #000;
  --bs-table-bg: #cfe2ff;
  --bs-table-border-color: #bacbe6;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.table-secondary {
  --bs-table-color: #000;
  --bs-table-bg: #e2e3e5;
  --bs-table-border-color: #cbccce;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.table-success {
  --bs-table-color: #000;
  --bs-table-bg: #d1e7dd;
  --bs-table-border-color: #bcd0c7;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.table-info {
  --bs-table-color: #000;
  --bs-table-bg: #cff4fc;
  --bs-table-border-color: #badce3;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.table-warning {
  --bs-table-color: #000;
  --bs-table-bg: #fff3cd;
  --bs-table-border-color: #e6dbb9;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.table-danger {
  --bs-table-color: #000;
  --bs-table-bg: #f8d7da;
  --bs-table-border-color: #dfc2c4;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.table-light {
  --bs-table-color: #000;
  --bs-table-bg: #f8f9fa;
  --bs-table-border-color: #dfe0e1;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
.table-dark {
  --bs-table-color: #fff;
  --bs-table-bg: #212529;
  --bs-table-border-color: #373b3e;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
}
//.table-responsive {
// overflow-x: auto;
// overflow-y: auto;
// -webkit-overflow-scrolling: touch;

// height: auto ;
// max-height:580px;
//}
@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.mt-0 {
  margin-top: 0 !important;
}
.mt-1 {
  margin-top: 0.25rem !important;
}
.mt-2 {
  margin-top: 0.5rem !important;
}
.mt-3 {
  margin-top: 1rem !important;
}
.mt-4 {
  margin-top: 1.5rem !important;
}
.mt-5 {
  margin-top: 3rem !important;
}
.mt-auto {
  margin-top: auto !important;
}

.scrollbar {
  height: auto;
  width: auto;
  max-height: 580px;
  max-width: 100%;
  background: #f5f5f5;
}

/*
 *  STYLE 1
 */

#style-1::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>