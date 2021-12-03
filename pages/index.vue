<template>
  <div>
    <div v-for="(item, index) in 8" :key="index">
      <question></question>
    </div>

    <div>
      <a-skeleton active avatar :paragraph="{ rows: 2 }" />
      <div class="tw-pt-6">
        <a-skeleton active avatar :paragraph="{ rows: 3 }" />
      </div>
    </div>
  </div>
</template>

<script>
import Question from "../components/home/Question.vue";
export default {
  components: { Question },
};
</script>

<style></style>
