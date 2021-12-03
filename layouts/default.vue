<template>
  <div>
    <div>
      <MuzakNavbar />
    </div>
    <div class="tw-container tw-mx-auto tw-flex tw-pt-4">
      <div class="tw-w-2/12 tw-pr-2">
        <LeftMenu />
      </div>
      <div class="tw-w-8/12 tw-px-2">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import MuzakNavbar from "@/components/shared/MuzakNavbar.vue";
import LeftMenu from "@/components/shared/LeftMenu.vue";

export default {
  components: {
    MuzakNavbar,
    LeftMenu,
  },
};
</script>

<style></style>
