<template>
  <div class="header py-0 shadow bg-white mt-3">
    <div class="container-fluid">
      <div class="header-body">
        <div class="row py-3">
          <nav aria-label="breadcrumb" class="ml-2">
            <ol class="breadcrumb breadcrumb-links">
              <li class="breadcrumb-item">
                <a href="#"><i class="fas fa-link"></i></a>
              </li>
              <li class="breadcrumb-item">
                Service
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

   

<form class="form control" @submit.prevent="sendEmail">
  
    <div class="mt-0" style="margin-left: 50px;">
      
    <div class="card mt-2 shadow p-2">
      <h4 style="margin-bottom: 40px;">Business Owner Details</h4>
      <p v-for="e in errors" v-bind:key="e.id"></p>
      <div class="row">
        <div class="col-md-3">
        <div class="form-group">
          <label class="form-control-label" for="payment_method"
            >Applicant Citizenship <span  class="text-danger">*</span></label>
         <select class="form-control form-control-alternative" v-model="owner_details.applicant_citizenship" required>
          <option>
          Select Citizenship
        </option>
          <option>
          Rwandan
        </option>
          <option>
          Foreigner
        </option>
       </select>
           </div>
           </div>
        <!-- <div class="col-md-6">
          <text-input
            :value="post_data.name || ''"
            :errors="errors.name"
            label="Name"
            placeholder="Enter the name of the institution"
            @type="(v) => (post_data.name = v)"
             :required="true"
          />
          <span style="color:#fc7676;" v-for="e in errors" v-bind:key="e.id" >{{e.names}}</span>
        </div> --></div>
        
      

      <div class="row">
        <div class="col-md-3">
          <phone-input
            :value="owner_details.phone_number || ''"
            :errors="errors.phone"
            label="Phone Number"
            placeholder="780958495"
            @type="(v) => (owner_details.phone_number = v)"
             :required="true"
          />
          
        </div>
        <div class="col-md-3">
          <text-input
            :value="owner_details.email_address || ''"
            :errors="errors.email"
            label="Email-address"
            placeholder="Enter an email address"
            @type="(v) => (post_data.email = v)"
            
          />
         
        </div>
        
           
      </div>
      <h4 style="margin-bottom: 40px;">Business Owner Address</h4>
      <div class="row">
        <div class="col-md-3">
        <div class="form-group">
          <label class="form-control-label" for="payment_method"
            >Provinces <span  class="text-danger">*</span></label>
         <select class="form-control form-control-alternative" v-model="owner_address.province" required>
          <option>
          Select Province
        </option>
          <option>
          Kigali  city
        </option>
          <option>
         Western Province
        </option>
        <option>
         Eastern Province
        </option>
        <option>
         South Province
        </option>
        <option>
         North Province
        </option>
       </select>
           </div>
           </div>
        
      </div>
     
    </div>
    <div class="card mt-2 shadow p-2">
      <h4 style="margin-bottom: 40px;">Business Details</h4>
      <p v-for="e in errors" v-bind:key="e.id"></p>
      <div class="row">
        <div class="col-md-3">
        <div class="form-group">
          <label class="form-control-label" for="payment_method"
            >Bussiness type <span  class="text-danger">*</span></label>
         <select class="form-control form-control-alternative" v-model="business_details.business_type" required>
          <option>
          Select Business Type
        </option>
          <option>
          Retailer
        </option>
          <option>
         Wholesaler
        </option>
        <option>
         Manufacturer
        </option>
       </select>
           </div>
           
           </div>
           <div class="col-md-3">
          <text-input
            :value="business_details.company_name || ''"
            :errors="errors.email"
            label="Company name"
            placeholder="Enter company name"
            @type="(v) => (business_details.company_name = v)"
             :required="true"
          />
         
        </div>
        </div>
        
      

      <div class="row">
        <div class="col-md-3">
          <number-input
            :value="business_details.TIN_number || ''"
            :errors="errors.email"
            label="TIN Number"
            placeholder="Enter TIN Number"
            @type="(v) => (business_details.TIN_number = v)"
             :required="true"
          />
         
        </div>
        <div class="col-md-3">
          <label class="form-control-label" for="payment_method"
            >Registration date <span  class="text-danger">*</span></label>
          <input class="form-control form-control-alternative" type="date" v-model="business_details.registration_date" id="myDate"  placeholder="choose date" required />
          
        </div>
        
           
      </div>
      <h4 style="margin-bottom: 40px;">Business  Address</h4>
      <div class="row">
        <div class="col-md-3">
        <div class="form-group">
          <label class="form-control-label" for="payment_method"
            >Provinces <span  class="text-danger">*</span></label>
         <select class="form-control form-control-alternative" v-model="business_address.province">
          <option>
          Select Province
        </option>
          <option>
          Kigali  city
        </option>
          <option>
         Western Province
        </option>
        <option>
         Eastern Province
        </option>
        <option>
         South Province
        </option>
        <option>
         North Province
        </option>
       </select>
           </div>
           </div>
        
      </div>
      
     
    </div>
    <div class="card mt-2 shadow p-2">
      <h4 style="margin-bottom: 40px;">Importation Details</h4>
      <p v-for="e in errors" v-bind:key="e.id"></p>
      <div class="row">
        <div class="col-md-3">
        <div class="form-group">
          <label class="form-control-label" for="payment_method"
            >Purpose of importation <span  class="text-danger">*</span></label>
         <select class="form-control form-control-alternative" v-model="importation_details.purpose_of_import" required>
          <option>
          Select the purpose of importation
        </option>
        <option>
         Direct sale
        </option>
          <option>
         Personal use
        </option>
          <option>
          Trial use
        </option>
        <option>
         Other
        </option>
       </select>
           </div>
           </div>
        </div>
        <h4 style="margin-bottom: 40px;">Product Details</h4>
        <div class="row">
        <div class="col-md-3">
        <div class="form-group">
          <label class="form-control-label" for="payment_method"
            >Product Category <span  class="text-danger">*</span></label>
         <select class="form-control form-control-alternative" v-model="importation_details.product_details.product_category" required>
          <option>
          Select product category
        </option>
        <option>
        General purpose
        </option>
          <option>
        Construction materials
        </option>
          <option>
         Chemical
        </option>
       </select>
           </div>
           </div>
        </div>
<div class="row">
  <div class="col-md-3">
          <number-input
            :value="importation_details.product_details.weight || ''"
            :errors="errors.name"
            label="Weight(Kg)"
            placeholder="Weight:(kg)"
            @type="(v) => (importation_details.product_details.weight = v)"
             :required="true"
          />
         
        </div>
</div>
      <div class="row">
        
        <div class="col-md-3">
          <div class="form-group">
          <label class="form-control-label" for="payment_method"
            >Unit of measurement <span  class="text-danger">*</span></label>
         <select class="form-control form-control-alternative" v-model="importation_details.product_details.unit_of_measurement" required>
          <option>
         Select unit of measurement
        </option>
        <option>
        Kgs
        </option>
          <option>
       Tonnes
        </option>
       </select></div>
        </div>
        <div class="col-md-3">
          <number-input
            :value="importation_details.product_details.quantity_of_product || ''"
            :errors="errors.email"
            label="Quantity of product(s)"
            placeholder="Enter quantity of product"
            @type="(v) => (importation_details.product_details.quantity_of_product = v)"
             :required="true"
          />
          
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
        <label class="form-control-label" for="payment_method"
            >Description of products <span  class="text-danger">*</span></label>
            <textarea v-model="importation_details.product_details.description_of_product" placeholder="Enter product description" :required="true" class="form-control form-control-alternative" />
          
        </div>
      </div>
      </div>
    
    <div class="row">
      <div class="col-md-6">
        
        <input type="submit" value="Send" class="form-control form-control-alternative" style="margin-bottom: 40px; background-color: #ccc;">
        
      </div>
    </div>
  </div>
</form>

</template>

<script>
import TextInput from "../../components/TextInput";
import PhoneInput from "../../components/PhoneInput.vue";
import NumberInput from "../../components/NumberInput.vue";

import { alert } from "../../utils/alertUtils";

import emailjs from 'emailjs-com';
export default {
  name: "New Industry",
  components: {
    "text-input": TextInput,
    "phone-input":PhoneInput,
    "number-input":NumberInput,
    
    // ButtonCta,
  },
  data() {
    return {
      errors: [],
     
      names:"",
      phone:"",
      email:"",
      address:"",
      Image: {},
      isLoading:'',
      owner_details:{
       applicant_citizenship:'',
       phone_number:'',
       email_address:'',
      },
      owner_address:{
      province:'',
      },
      business_details:{
      business_type:'',
      company_name:'',
      TIN_number:'',
      registration_date:'',

      },
      business_address:{
        province:''
      },
      importation_details:{
        purpose_of_import:'',
        product_details:{
          product_category:'',
          weight:'',
          unit_of_measurement:'',
          quantity_of_product:'',
          description_of_product:''
        }
      },
      styleObject: {
        cursor: "not-allowed",
      },
      show_loader: false,
    };
  },
  methods: {
    sendEmail: function(e) {
      this.show_loader = true;
        var message=[
          this.owner_details,
          this.owner_address,
          this.business_details,
          this.business_address,
          this.importation_details,
        ];
       
        emailjs.sendForm('service_9o235fe', 'template_xlgbnj8',e.target, 
        'gKdnPZvhuEDnM3nbj', {
          name: this.business_details.company_name,
          email: this.owner_details.email_address,
          message:message
        }).then(() => {
          alert.success_center("email sent successfully!");
          
        }). catch((err) =>  {
          console.log({err})
      })
      
    },
  },
};
</script>
