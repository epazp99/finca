<!-- eslint-disable vue/no-multiple-template-root -->
 <template>
  <div id="app">
    <VueSidebarMenuAkahon 
    menuTitle="Finca"
    menuLogo="./ctc.png"
    bgColor="#42b983" 
    secondaryColor="#252850"
    menuItemsHoverColor="#252850"
    profileImg=""
    profileName=""
    profileRole="" 
    :menuItems="items"
    />
    <div class="container text-center mt-5 mb-5" style="margin-right:5%;margin-left:5%">
    <h1 class="mt-5 fw-bolder text-success " style="text-align:center;color:red"> Finca's Database </h1>
    <br/> <br/>
     <div class="table-responsive my-5">

      <!-- The table component -->
       <Table :fields='fields' :studentData ="studentData"></Table>
     </div> 
    </div>
    <Welcome/>
  </div>
</template>

<script> 
 // Importing the table component
import Welcome from './components/Welcome.vue'
import Table from './components/Table.vue'
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";

export default {
  name: 'App',
  components: {
    VueSidebarMenuAkahon,
    Table,
    // eslint-disable-next-line vue/no-unused-components
    Welcome
  },
  data(){
    return{
      items:[ 
      {link: '/',name: 'Dashboard', tooltip: 'Dashboard', icon: 'bx-grid-alt' },
      {link: '#',name: 'User', tooltip: 'User', icon: 'bx-user' },
      {link: '/tables',name: 'Tables', tooltip: 'Tables', icon: 'bx-table' },
      {link: '#',name: 'Filtred', tooltip: 'Filtred', icon: 'bx-heart' },
      {link: '#',name: 'Information', tooltip: 'Information', icon: 'bx-folder' },
      {link: '#',name: 'Setting', tooltip: 'Setting', icon: 'bx-cog' },
      ]
    }
  },
  setup(){
    //An array of values for the data
       const studentData = [
      {ID:"01", Name: "Abiola Esther", Ocupation:"Computer Science", Gender:"Female", Age:"17"},
     {ID:"02", Name: "Robert V. Kratz", Ocupation:"Philosophy", Gender:"Male", Age:'19'},
      {ID:"03", Name: "Kristen Anderson", Ocupation:"Economics", Gender:"Female", Age:'20'},
     {ID:"04", Name: "Adam Simon", Ocupation:"Food science", Gender:"Male", Age:'21'},
      {ID:"05", Name: "Daisy Katherine", Ocupation:"Business studies", Gender:"Female", Age:'22'},  
    ]
    const fields = [
      'ID','Name','Ocupation','Gender','Age'
    ]
    return{studentData,fields}
  },
}
</script>


