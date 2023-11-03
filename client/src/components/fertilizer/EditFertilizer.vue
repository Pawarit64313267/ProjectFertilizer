<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4">Edit Fertilizer</h1>
        <form @submit.prevent="editFertilizer">
          <div class="mb-3">
            <label for="type" class="form-label">Type:</label>
            <input type="text" class="form-control" v-model="fertilizer.type">
          </div>
          <div class="mb-3">
            <label for="brand" class="form-label">Brand:</label>
            <input type="text" class="form-control" v-model="fertilizer.brand">
          </div>
          <div class="mb-3">
            <label for="detail" class="form-label">Detail:</label>
            <textarea class="form-control" v-model="fertilizer.details"></textarea>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price:</label>
            <input type="number" step="0.01" class="form-control" v-model="fertilizer.price">
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Edit Fertilizer</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import FertilizerService from "@/services/FertilizerService";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  data() {
    return {
      fertilizer: {
        type: '',
        brand: '',
        detail: '',
        price: 0.00
      }
    };
  },
  async created() {
    try {
      this.fertilizerId = this.$route.params.fertilizerId;
      this.fertilizer = (await FertilizerService.show(this.fertilizerId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async editFertilizer() {
      try {
        this.fertilizer.id = this.fertilizerId;
        await FertilizerService.put(this.fertilizer);
        this.$router.push({ name: "fertilizer" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
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
  background-color: #4caf50;
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
