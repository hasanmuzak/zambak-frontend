<template>
  <div>
    <div v-for="(item, index) in 2" :key="index">
      <div
        class="tw-flex tw-items-center"
        :class="index === 1 ? 'tw-px-3 tw-pt-3' : 'tw-border-b tw-p-3'"
      >
        <div class="tw-flex tw-flex-col tw-border-r tw-pr-2">
          <div
            class="tw-flex tw-items-center tw-cursor-pointer hover:tw-text-green-600"
          >
            <span class="tw-font-semibold f-11 tw-pr-1"> 122 </span>
            <a-icon type="caret-up" />
          </div>
          <div class="f-11 tw-font-semibold">
            <span> Report </span>
          </div>
        </div>
        <div class="tw-pl-2">
          <span class="tw-font-semibold dark-text">@oxibital</span> lorem ipsum
          dolor sit amet consectetur adipisicing elit. Mollitia, eius corporis
          perspiciatis sequi iste in tempora libero architecto molestias
          asperiores ducimus, minus hic doloremque voluptas natus? Magnam
          dolores cum cupiditate.
        </div>
      </div>
    </div>
    <div class="tw-pt-3">
      <a-mentions v-model="comment">
        <a-mentions-option value="afc163"> afc163 </a-mentions-option>
        <a-mentions-option value="zombieJ"> zombieJ </a-mentions-option>
        <a-mentions-option value="yesmeck"> yesmeck </a-mentions-option>
      </a-mentions>
      <div class="tw-flex tw-items-center tw-justify-between tw-pt-3">
          <a-button type="danger">
              <span class="tw-uppercase f-12 tw-font-semibold">
                  Cancel
              </span>
          </a-button>
          <a-button loading type="primary">
              <span class="tw-uppercase f-12 tw-font-semibold">
                  Send
              </span>
          </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
};
</script>

<style scoped lang="less">
/deep/ .ant-mentions {
    textarea {
        min-height: 45px;
    }
}
</style>
