
<template>
  <div class="bd-example">
    <form
      @submit="checkForm"
      action="/post-form"
      method="post"
      novalidate="true"
      id="app"
    >
      <div v-if="errors.length">
        <div class="form-group">
          <b>Please correct the following error(s): </b>
          <div v-for="error in errors" class="alert alert-danger">
            {{ error }}
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          ref="name"
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          ref="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="movie">Movie</label>
        <select
          name="movie"
          v-model="movie"
          id="movie"
          :required="true"
          class="form-control"
        >
          <option v-for="movie in movies" v-bind:value="movie.val">
            {{ movie.option }}
          </option>
          >
        </select>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

  created() {
    console.log('Component has been created!');
  },
  mounted() {
    console.log('Component has been mounted!');
    this.focusInput('name');
  },

  data: function () {
    return {
      errors: [],
      name: null,
      email: null,
      movie: "0",
      option: null,
      movies: [
        { option: "Choose movie", val: "0" },
        { option: "Star Wars", val: "1" },
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
  methods: {

    focusInput() {
      this.$refs.email.focus();
    },

    checkForm: function (e) {

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
    },
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
</style>
