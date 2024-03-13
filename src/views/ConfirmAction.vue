<template>
  <modal :title="renderTitle" :showbody="false" :show="openModal" @close="closeModal">
    
    <template v-slot:actions>
      <button-cta
        :label="renderCloseBtnLabel"
        @click="closeModal"
        :isDisabled="!isFormValid"
        
        :class="['btn btn-danger']"
      ></button-cta>

      <button-cta
        :label="renderBtnLabel"
        @click="handleSubmit"
        :isDisabled="!isFormValid"
        :isBusy="isLoading"
      ></button-cta>
    </template>

    
  </modal>
</template>

<script>
import Modal from "@/components/Modal/Modal";
import ButtonCta from "@/components/Button/ButtonCta";


export default {
  components: {
    Modal,
    ButtonCta
  },
  data() {
    return {
      isLoading: false,
      data: {
        //referenceNumber: "",
      }
    };
  },
  props: {
    openModal: {
      type: Boolean,
      default: false
    },
    closeModal: {
      type: Function,
      default: () => {}
    },
    save: {
      type: Function,
      default: () => {}
    },
    edit: {
      type: Function,
      default: () => {}
    },
    appData: {
      type: Object,
      default: () => {}
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    appData() {
      this.data = {
        //referenceNumber: this.appData.referenceNumber,
      };
    }
  },
  computed: {
    isFormValid() {
      return (
        this.data.referenceNumber
      );
    },
    renderTitle() {
      return ""+this.appData.title;
    },
    renderBtnLabel() {
      return  "Confirm";
    },
    renderCloseBtnLabel() {
      return  "Cancel";
    },
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      const data = {
        //referenceNumber: this.data.referenceNumber,
      };
      this.isEdit ? await this.edit(data) : await this.save(data);
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  }
};
</script>
