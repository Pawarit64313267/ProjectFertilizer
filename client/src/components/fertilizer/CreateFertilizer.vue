<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4">Create Fertilizer</h1>
        <form @submit.prevent="createfertilizer" class="p-3 rounded bg-light">
          <div class="mb-3">
            <label for="type" class="form-label">Type:</label>
            <input type="text" class="form-control" id="type" v-model="fertilizer.type">
          </div>
          <div class="mb-3">
            <label for="brand" class="form-label">Brand:</label>
            <input type="text" class="form-control" id="brand" v-model="fertilizer.brand">
          </div>
          <div class="mb-3">
            <label for="detail" class="form-label">Detail:</label>
            <input type="text" class="form-control" id="detail" v-model="fertilizer.detail">
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price:</label>
            <input type="number" class="form-control" id="price" v-model="fertilizer.price">
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Create Fertilizer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FertilizerService from '@/services/FertilizerService'
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  beforeRouteEnter(to, from, next) {
    document.title = to.meta.title || 'Default Title';
    next();
  },
  beforeRouteUpdate(to, from, next) {
    document.title = to.meta.title || 'Default Title';
    next();
  },
  data() {
    return {
      fertilizer: {
        type: '',
        brand: '',
        detail: '',
        price: 0.00
      }
    }
  },
  methods: {
    async createFertilizer() {
      try {
        await FertilizerService.post(this.fertilizer)
        this.$router.push({
          name: 'fertilizer'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

form {
  width: 60%;
  margin: auto;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>