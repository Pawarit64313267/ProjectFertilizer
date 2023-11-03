<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between mb-4">
      <h2 class="mb-0 ">รายการปุ๋ย</h2>
      <div>
        <h4 class="mb-0 text-white">จำนวนปุ๋ย: {{ fertilizer.length }}</h4><br>
        <button @click="navigateTo('/fertilizer/create')" class="btn btn-primary">
          เพิ่มปุ๋ย
        </button>
      </div>
    </div>
    <div class="row">
      <div v-for="fertilizer in fertilizer" :key="fertilizer.fertilizer_id" class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow fertilizer-card">
          <img :src="fertilizer.image" class="card-img-top" alt="fertilizer Image" style="max-height: 200px;">
          <div class="card-body">
            <h5 class="card-title">{{ fertilizer.type }}</h5>
            <p class="card-text">Brand: {{ fertilizer.brand }}</p>
            <p class="card-text">Detail: {{ fertilizer.detail }}</p>
            <p class="card-text">Price:${{ fertilizer.price }}</p>
            <div class="d-grid gap-2 mt-4">
              <router-link :to="'/fertilizer/' + fertilizer.fertilizer_id" class="btn btn-info">ดูข้อมูลปุ๋ย</router-link>
              <router-link :to="'/fertilizer/edit/' + fertilizer.fertilizer_id" class="btn btn-warning">แก้ไขข้อมูลปุ๋ย</router-link>
              <button @click="confirmDelete(fertilizer)" class="btn btn-danger">ลบข้อมูลปุ๋ย</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FertilizerService from "@/services/FertilizerService";
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  beforeRouteEnter(to, from, next) {
    document.title = to.meta.title || "Default Title";
    next();
  },
  beforeRouteUpdate(to, from, next) {
    document.title = to.meta.title || "Default Title";
    next();
  },
  data() {
    return {
      fertilizer: []
    };
  },
  created() {
    this.fetchFertilizer();
  },
  methods: {
    async fetchFertilizer() {
      try {
        this.fertilizer = (await FertilizerService.index()).data;
        localStorage.setItem('fertilizer', JSON.stringify(this.fertilizer)); 
      } catch (err) {
        console.error(err);
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async confirmDelete(fertilizer) {
      const confirmed = window.confirm("คุณต้องการลบปุ๋ยนี้ใช่หรือไม่?");

      if (confirmed) {
        try {
          await FertilizerService.delete(fertilizer.fertilizer_id);
          this.fetchfertilizer();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
};
</script>

<style>
.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  background-color: #fff;
}

.card-title {
  color: #0275d8; 
  font-size: 1.5rem;
  font-weight: bold;
}

.text-info {
  color: #0275d8; 
}

.fertilizer-card {
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.fertilizer-card:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn {
  border-radius: 4px;
}

img.card-img-top {
  object-fit: cover;
  max-height: 200px; /* Adjust this value */
}

.container {
  background-image: url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  border-radius: 30px;
  background-position: center;
  background-size: cover;
  padding: 20px; 
  margin-bottom: 20px; 
}
</style>
