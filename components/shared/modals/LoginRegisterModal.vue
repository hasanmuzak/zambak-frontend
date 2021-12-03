<template>
  <div>
    <div>
      <a-modal :footer="null" v-model="show_modal" @cancel="handleModalCancel">
        <div>
            <div v-if="current_panel === 'login'">
              <h1 class="tw-text-center title">Hoş geldin!</h1>
              <div class="tw-pt-4">
                <p class="light-text tw-text-center f-12">
                  Devam etmek için giriş yapman gerekiyor
                </p>
                <p class="light-text tw-text-center f-12">
                  Sana uygun olan giriş yöntemi ile giriş yapabilirsin.
                </p>
                <div>
                  <div>
                    <a-input
                      size="large"
                      v-model="email"
                      placeholder="E-posta adresin"
                    >
                      <a-icon slot="prefix" type="mail" />
                    </a-input>
                  </div>
                  <div class="tw-mt-2">
                    <a-input-password
                      size="large"
                      v-model="password"
                      placeholder="Şifren"
                    >
                      <a-icon slot="prefix" type="lock" />
                    </a-input-password>
                  </div>
                  <div class="tw-mt-2">
                    <a-checkbox v-model="remember_me">
                      <span class="f-12"> Beni hatırla </span>
                    </a-checkbox>
                  </div>
                  <div class="tw-my-4">
                    <a-button size="large" type="primary" class="tw-w-full">
                      <div class="tw-flex tw-items-center">
                        <a-icon type="login" />
                        <span class="f-12 tw-font-semibold tw-pl-2">
                          Giriş Yap
                        </span>
                      </div>
                    </a-button>
                  </div>
                </div>
                <p class="tw-text-center light-text">Yada</p>
                <div class="tw-pt-0">
                  <div
                    class="tw-p-3 tw-rounded tw-bg-gray-900 hover:tw-bg-gray-600 tw-transition tw-duration-200 tw-cursor-pointer tw-flex tw-items-center tw-text-white"
                  >
                    <a-icon
                      theme="filled"
                      type="facebook"
                      :style="{ fontSize: '24px' }"
                    />
                    <div class="tw-pl-2 tw-font-semibold f-12">
                      Facebook ile giriş yap
                    </div>
                  </div>
                  <div
                    class="tw-p-3 tw-mt-2 tw-rounded tw-bg-gray-900 hover:tw-bg-gray-600 tw-transition tw-duration-200 tw-cursor-pointer tw-flex tw-items-center tw-text-white"
                  >
                    <a-icon
                      theme="filled"
                      type="github"
                      :style="{ fontSize: '24px' }"
                    />

                    <div class="tw-pl-2 tw-font-semibold f-12">
                      Github ile giriş yap
                    </div>
                  </div>
                </div>
                <a-divider></a-divider>
                <div
                  @click="current_panel = 'forgot_password'"
                  class="tw-text-center f-12 tw-cursor-pointer tw-transition tw-duration-200 hover:tw-underline tw-text-blue-500"
                >
                  Şifremi Unuttum
                </div>
                <div class="tw-text-center f-12 tw-mt-2">
                  Henüz üye değil misin?
                  <span
                    @click="current_panel = 'register'"
                    class="tw-cursor-pointer tw-transition tw-duration-200 hover:tw-underline tw-text-blue-500"
                    >Üye Ol</span
                  >
                </div>
              </div>
            </div>
            <div v-if="current_panel === 'register'">
              <h1 class="tw-text-center title">Hoş geldin!</h1>
              <div class="tw-pt-4">
                <p class="light-text tw-text-center f-12">
                  Hemen üye olarak soru sormaya ve yorum yapmaya
                  başlayabilirsin!
                </p>
                <div>
                  <div>
                    <a-input
                      size="large"
                      v-model="email"
                      placeholder="E-posta adresin"
                    >
                      <a-icon slot="prefix" type="mail" />
                    </a-input>
                  </div>

                  <div class="tw-mt-2">
                    <a-input
                      size="large"
                      v-model="username"
                      placeholder="Kullanıcı adı"
                    >
                      <a-icon slot="prefix" type="user" />
                    </a-input>
                  </div>

                  <div class="tw-flex tw-items-center tw-mt-2">
                    <div class="tw-w-full tw-pr-1">
                      <a-input size="large" v-model="name" placeholder="Ad">
                        <a-icon slot="prefix" type="idcard" />
                      </a-input>
                    </div>
                    <div class="tw-w-full tw-pl-1">
                      <a-input
                        size="large"
                        v-model="surname"
                        placeholder="Soyad"
                      >
                        <a-icon slot="prefix" type="idcard" />
                      </a-input>
                    </div>
                  </div>

                  <div class="tw-mt-2">
                    <a-input-password
                      size="large"
                      v-model="password"
                      placeholder="Şifre"
                    >
                      <a-icon slot="prefix" type="lock" />
                    </a-input-password>
                  </div>
                  <div class="tw-mt-2">
                    <a-input-password
                      size="large"
                      v-model="password"
                      placeholder="Şifre (Tekrar)"
                    >
                      <a-icon slot="prefix" type="lock" />
                    </a-input-password>
                  </div>

                  <div class="tw-my-4">
                    <a-button type="primary" class="tw-w-full" size="large">
                      <div class="tw-flex tw-items-center">
                        <span class="f-12 tw-font-semibold tw-pr-2">
                          Devam Et
                        </span>
                        <a-icon type="arrow-right" />
                      </div>
                    </a-button>
                  </div>
                </div>

                <a-divider></a-divider>
                <div class="tw-text-center f-12 tw-mt-2">
                  Zaten üye misin?
                  <span
                    @click="current_panel = 'login'"
                    class="tw-cursor-pointer tw-transition tw-duration-200 hover:tw-underline tw-text-blue-500"
                    >Giriş Yap</span
                  >
                </div>
              </div>
            </div>
            <div v-if="current_panel === 'forgot_password'">
              <h1 class="tw-text-center title">Hoş geldin!</h1>
              <div class="tw-pt-4">
                <p class="light-text tw-text-center f-12">
                  E-posta adresine şifreni yeniden oluşturman için gerekli
                  bağlantı gönderilecektir.
                </p>
                <div>
                  <div>
                    <a-input
                      size="large"
                      v-model="email"
                      placeholder="E-posta adresin"
                    >
                      <a-icon slot="prefix" type="mail" />
                    </a-input>
                  </div>

                  <div class="tw-my-4">
                    <a-button type="primary" class="tw-w-full" size="large">
                      <div class="tw-flex tw-items-center">
                        <span class="f-12 tw-font-semibold tw-pr-2">
                          Devam Et
                        </span>
                        <a-icon type="arrow-right" />
                      </div>
                    </a-button>
                  </div>
                </div>

                <a-divider></a-divider>
                <div class="tw-text-center f-12 tw-mt-2">
                  Zaten üye misin?
                  <span
                    @click="current_panel = 'login'"
                    class="tw-cursor-pointer tw-transition tw-duration-200 hover:tw-underline tw-text-blue-500"
                    >Giriş Yap</span
                  >
                </div>
                <p
                  class="tw-text-center light-text f-12"
                  style="margin-top: 1em"
                >
                  Yada
                </p>
                <div class="tw-text-center f-12 tw-mt-2">
                  Henüz üye değil misin?
                  <span
                    @click="current_panel = 'register'"
                    class="tw-cursor-pointer tw-transition tw-duration-200 hover:tw-underline tw-text-blue-500"
                    >Üye Ol</span
                  >
                </div>
              </div>
            </div>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show_modal: false,
      email: "",
      password: "",
      remember_me: false,
      current_panel: "login",
    };
  },
  watch: {
    visible: {
      handler(newVal) {
        this.show_modal = newVal;
      },
      immediate: true,
    },
  },
  methods: {
    handleModalCancel() {
      this.$emit("modal_closed");
    },
  },
};
</script>

<style scoped lang="less">
.title {
  font-size: 22px;
}
/deep/ .ant-input-lg {
  font-size: 13px;
}
</style>
