<template>
  <div class="containerx mt-4">
    <h1>Show Fertilizer</h1>
    <div class="card" v-if="fertilizer">
      <div class="card-body row">
        <div class="col-md-6">
          <div class="image-container">
            <img :src="fertilizer.image" class="card-img-top" alt="fertilizer Image">
          </div>
        </div>
        <div class="col-md-6">
          <div class="details-container">
            <p class="card-text"><strong class="text-danger">Type:</strong> {{ fertilizer.type }}</p>
            <p class="card-text"><strong class="text-danger">Brand:</strong> {{ fertilizer.brand }}</p>
            <p class="card-text"><strong class="text-danger">Detail:</strong> {{ fertilizer.detail }}</p>
            <p class="card-text"><strong class="text-danger">Price:</strong> {{ fertilizer.price }}</p>
            <div class="details-text">
              <p class="card-text"><strong class="text-danger">Details:</strong></p>
              <div class="overflow-container">{{ fertilizer.details }}</div>
            </div>
          </div>
        </div>
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
      fertilizer: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    document.title = to.meta.title || 'Default Title';
    next();
  },
  beforeRouteUpdate(to, from, next) {
    document.title = to.meta.title || 'Default Title';
    next();
  },
  async created() {
    try {
      let fertilizerId = this.$route.params.fertilizerId;
      const response = await fertilizerService.show(fertilizerId);
      this.fertilizer = response.data || {};
      this.$router.replace('/fertilizer/' + fertilizerId);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.containerx {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.text-danger {
  color: red;
}

.card-img-top {
  width: 100%; 
  height: auto;
  max-width: 100%;
  max-height: 300px; /* ตั้งค่าสูงสุดสำหรับความสูงของรูปภาพ */
}

.image-container {
  text-align: center;
}

.details-container {
  padding: 0 20px;
}

.overflow-container {
  max-height: 150px;
  overflow-y: auto; /* เพิ่มการแสดงแถบเลื่อนเมื่อข้อมูลเกินขนาดที่กำหนด */
}

.details-text {
  margin-bottom: 0;
}

</style>
