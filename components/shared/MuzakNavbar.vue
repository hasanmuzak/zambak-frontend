<template>
  <div class="tw-bg-white tw-border-b tw-p-4">
    <div
      class="tw-container tw-mx-auto tw-flex tw-items-center tw-justify-between"
    >
      <div class="tw-flex tw-items-center">
        <nuxt-link to="/" class="logo-text tw-pr-4">Zambak</nuxt-link>
        <div class="tw-pl-4 tw-border-l tw-border-gray-100">
          <a-input size="large" v-model="keyword" placeholder="Search...">
            <a-icon slot="prefix" type="search" />
          </a-input>
        </div>
      </div>
      <div class="tw-flex tw-items-center">
        <a-dropdown placement="bottomCenter">
          <a-menu slot="overlay" style="width:120px;">
            <a-menu-item key="1">
             <div class="tw-flex tw-items-center">
                 <span class="tw-flex tw-items-center" style="
                 width:24px;">
                     <a-icon type="user" />
                 </span>
                 <span>
                     Profile
                 </span>
             </div>
            </a-menu-item>
            <a-menu-item key="2">
             <div class="tw-flex tw-items-center">
                 <span class="tw-flex tw-items-center" style="
                 width:24px;">
                     <a-icon type="setting" />
                 </span>
                 <span>
                     Settings
                 </span>
             </div>
            </a-menu-item>
            <a-menu-item key="3">
             <div class="tw-flex tw-items-center">
                 <span class="tw-flex tw-items-center" style="
                 width:24px;">
                     <a-icon type="logout" />
                 </span>
                 <span>
                     Logout
                 </span>
             </div>
            </a-menu-item>
            <a-menu-item key="4">
             <div class="tw-flex tw-items-center">
                 <span class="tw-flex tw-items-center" style="
                 width:24px;">
                     <a-icon type="github" />
                 </span>
                 <span>
                     Github
                 </span>
             </div>
            </a-menu-item>
            <a-menu-item key="5">
             <div class="tw-flex tw-items-center">
                 <span class="tw-flex tw-items-center" style="
                 width:24px;">
                     <a-icon type="linkedin" />
                 </span>
                 <span>
                     Linkedin
                 </span>
             </div>
            </a-menu-item>
            </a-menu>
          <div class="avatar tw-cursor-pointer"></div>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
};
</script>

<style scoped lang="less">
.logo-text {
  font-size: 24px;
}

.avatar {
  width: 42px;
  height: 42px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("http://1.bp.blogspot.com/-YHr1XjKzDjU/UUWGfJBUBSI/AAAAAAAAA3g/8MLXNhq27bU/s1600/one+piece+gold+d+roger+3.jpg");
  border-radius: 50%;
}
</style>
