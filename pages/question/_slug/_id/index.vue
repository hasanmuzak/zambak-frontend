<template>
  <div>
    <QuestionBody />
    <h1 class="title tw-pt-5 tw-m-0">Best Comments</h1>
    <Comments />
    <h1 class="title tw-pt-5 tw-m-0">Your Answer</h1>
    <Write />

    <LoginRegisterModal :visible="show_login_modal" @modal_closed="on_modal_cancel" />
  </div>
</template>

<script>
import QuestionBody from "../../../../components/question-detail/QuestionBody.vue";
import Comments from "../../../../components/question-detail/Comments.vue";
import Write from "../../../../components/question-detail/Write.vue";

// Shared Components
import LoginRegisterModal from "@/components/shared/modals/LoginRegisterModal.vue";

export default {
  components: { QuestionBody, Comments, Write, LoginRegisterModal },
  data() {
    return {
      show_login_modal: false
    }
  },
  methods: {
    on_modal_cancel() {
      this.show_login_modal =  false;
    }
  },
};
</script>

<style scoped lang="less">
.title {
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
