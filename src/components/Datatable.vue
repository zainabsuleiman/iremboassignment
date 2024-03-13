<template>
  <div class="table-responsive py-4">
    <table aria-describedby="table" class="table" :id="id">
      <thead class="bg-default text-white">
        <tr>
          <th v-for="(column, index) in columns" scope="row" :key="index">
            {{ column.title }}
          </th>
          <th scope="row" v-if="actions.length > 0">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover-cursor-db"
          v-for="(row, index) in data"
          @click="on_click(row)"
          :key="index"
        >
          <td v-for="(column, index) in columns" :key="index">
            <span v-if="column.render" v-html="column.render(row)"></span>
            <span v-else> {{ row[column.data] }} </span>
          </td>
       <td v-if="actions.length > 0">
            <span v-for="(action, index) in actions" :key="index" class="ml-1">
              <button
                :class="action.btnClass"
                v-if="
                  typeof action.show == 'function' &&
                  action.show(row[action.conditionParam])
                "
                @click="action.btnFn(row[action.btnParamName])"
              >
                <em :class="action.iconClass"></em> {{ action.btnText }}
              </button>
              <button
                :class="action.btnClass"
                v-else-if="typeof action.show != 'function' && action.show"
                @click="action.btnFn(row[action.btnParamName])"
              >
                <em :class="action.iconClass"></em> {{ action.btnText }}
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
    },
    actions: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    on_click: {
      type: Function,
      default: () => {},
    },
    order:{
      required: false,
      type:Array,
      default:() => [[0, 'asc']]
    }
  },
  methods: {
    // performAction: function(action_name,param){
    //     this.actions[action_name](param)
    // }
  },
  computed: {},
  mounted() {
    $(`#${this.id}`).DataTable({
      ...this.options,
      order:this.order,
      language: {
        paginate: {
          previous: "<em class='fas fa-chevron-left'></em>",
          next: "<em class='fas fa-chevron-right'></em>",
        },
      },
    });
  },
};
</script>

<style css>
.hover-cursor-db:hover {
  cursor: pointer;
  background-color: rgba(211, 211, 211, 0.507);
}
</style>