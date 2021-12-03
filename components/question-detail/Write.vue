<template>
  <div class="tw-py-5">
    <div
      v-if="!show_editor"
      @click="show_editor = true"
      class="tw-text-center tw-border-dashed tw-cursor-pointer tw-transition tw-duration-200 hover:tw-border-blue-400 tw-p-10 tw-border-2 tw-rounded-lg write-an-answer light-text"
    >
      Write an answer
    </div>
    <div v-else>
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
      <div class="tw-flex tw-items-center tw-justify-between tw-pt-3">
        <a-button type="danger" @click="show_editor = false">
          <span class="tw-uppercase f-12 tw-font-semibold"> Cancel </span>
        </a-button>
        <a-button loading type="primary">
          <span class="tw-uppercase f-12 tw-font-semibold">
            Post Your Answer
          </span>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      show_editor: true,
      editorData: "",
      editorConfig: {
        codeBlock: {
          languages: [
            { language: "plaintext", label: "Plain text" },
            { language: "c", label: "C" },
            { language: "cs", label: "C#" },
            { language: "cpp", label: "C++" },
            { language: "css", label: "CSS" },
            { language: "diff", label: "Diff" },
            { language: "html", label: "HTML" },
            { language: "java", label: "Java" },
            { language: "javascript", label: "JavaScript" },
            { language: "php", label: "PHP" },
            { language: "python", label: "Python" },
            { language: "ruby", label: "Ruby" },
            { language: "typescript", label: "TypeScript" },
            { language: "xml", label: "XML" },
            { language: "json", label: "JSON" },
          ],
        },
      },
      editor: ClassicEditor,
    };
  },
};
</script>

<style scoped lang="less">
.write-an-answer {
  font-size: 20px;
  font-weight: 400;
  &:hover {
    color: #1e88e5;
  }
}

/deep/ .ck-content {
    height: 180px;
}

/deep/ .ck {
  transition: 0.2s;
}

/deep/ .ck-blurred {
  border: 1px solid #cfcfcf;
  &:hover {
    border-color: #1e88e5;
  }
}

/deep/ .ck-focused {
  border: 1px solid #1e88e5;
  box-shadow: 0 0 2px 2px #1e88e571 !important;
}
</style>
