<template>
  <div class="bd-example">

    <h1 v-if="awesome">{{ msg }}</h1>
    <h1 v-else>Oh no 😢</h1>
    <form
      @submit="checkForm"
      @click="doSomething"
      action="/post-form"
      method="post"
      novalidate="true"
      :class="{ active: isActive }"
      id="app"
    >
     {{$translate('greetings.hi')}}

      <div class="mb-3">
        <div v-if="Math.random() > 0.5">Now you 😂s ee</div>
        <div v-else>Now you don't 😀</div>
      </div>

      <div v-if="errors.length">
        <div class="mb-3">
          <b>Please correct the following error(s): </b>
          <div v-for="error in errors" class="alert alert-danger">
            {{ error }}
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          ref="name"
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          :style="styleObject"

        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          id="email"
          ref="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          v-focus

        />
      </div>
      <div class="mb-3">
        <label for="movie" class="form-label">Movie</label>
        <select
          aria-label="Default select example"
          name="movie"
          v-model="movie"
          id="movie"
          :required="true"
          class="form-select"

        >
          <option v-for="movie in movies" v-bind:value="movie.val">
            {{ movie.option }}
          </option>
          >
        </select>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox"
            v-model="checked"
          />
          <label class="form-check-label" for="checkbox">{{
            checked === true ? "True" : "False"
          }}</label>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  created() {
    console.log("Component has been created!");
  },
  mounted() {
    console.log("Component has been mounted!");
    //this.focusInput("name");
  },
  options: {
    i18n:true
  },
  data: function () {
    return {
      styleObject: {
        color: "palevioletred",
        fontSize: "13px",
      },
      checked: false,
      errors: [],
      awesome: true,
      name: null,
      email: null,
      movie: "1",
      option: null,
      isActive: true,
      activeBorder: "red",
      movies: [
        { option: "Choose movie", val: "0" },
        { option: "Star Wars VI: Return of the Jedi", val: "1" },
        { option: "Skyfall", val: "2" },
        { option: "Stripes", val: "3" },
      ],
      todos: [
        { text: "First item" },
        { text: "Second item" },
        { text: "Third item" },
      ],
      counter: 0,
    };
  },
  directives: {
    focus: {
      // directive definition
      mounted(el) {
        el.focus()
      }
    }
  },
  methods: {
    focusInput() {
      this.$refs.name.focus();
    },
    doSomething: function (e) {
      console.log("Annoying");
    },
    checkForm: function (e) {
      l(e);
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name required");
        e.target[0].classList.add("has-error");
      }
      if (!this.email) {
        this.errors.push("Email required");
      }
      if (!this.movie || this.movie === "0") {
        this.errors.push("Movie required");
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
      this.$emit('submit', { email })
    },

  },
  props: {
    msg: String,
  },

  emits: {
    // No validation
    click: null,
    // Validate submit event
    submit: ({ email }) => {
      if (email) {
        console.warn('Invalid submit event payload!')
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
};
</script>

<style scoped>
.bd-example {
  position: relative;
  padding: 1rem;
  margin: 1rem -15px 0;
  border: 2px solid #f7f7f9;
  max-width: 400px;
  margin: 0 auto;
  clear: both;
  display: block;
}
.has-error {
  border: 1px solid #ff0000;
}
form {
  text-align: left !important;
}
form label {
  text-align: left;
  display: block;
}
</style>



