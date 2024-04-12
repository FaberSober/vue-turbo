<script setup lang="ts">
import { computed, reactive } from 'vue';
import { $t } from '@/locales';
import { loginModuleRecord } from '@f/admin/constants/app';
import { useFormRules, useNaiveForm } from '@f/admin/hooks/common/form';
import { useAuthStore } from '@f/admin/stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const { formRef, validate } = useNaiveForm();

interface FormModel {
  userName: string;
  password: string;
}

const model: FormModel = reactive({
  userName: 'admin',
  password: '888888',
});

const rules = computed<Record<keyof FormModel, App.Global.FormRule[]>>(() => {
  // inside computed to make locale reactive, if not apply i18n, you can define it without computed
  const { formRules } = useFormRules();

  return {
    userName: formRules.userName,
    password: formRules.pwd,
  };
});

async function handleSubmit() {
  await validate();
  await authStore.login(model.userName, model.password);
}

function toLoginModule(module: string) {
  router.push(`/login/${module}`);
}

const thirdParties = [
  { type: 'wechat', icon: 'ant-design:wechat-filled' },
  { type: 'qq', icon: 'ant-design:qq-outlined' },
  { type: 'alipay', icon: 'ant-design:alipay-outlined' },
  { type: 'weibo', icon: 'ant-design:weibo-outlined' },
];

async function handleThirdPartyLogin(thirdPartyType: string) {
  window.$message?.warning('not supported yet');
}
</script>

<template>
  <NForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <NFormItem path="userName">
      <NInput v-model:value="model.userName" :placeholder="$t('page.login.common.userNamePlaceholder')" />
    </NFormItem>
    <NFormItem path="password">
      <NInput
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')"
      />
    </NFormItem>

    <NSpace vertical :size="24">
      <div class="flex-y-center justify-between">
        <NCheckbox>{{ $t('page.login.pwdLogin.rememberMe') }}</NCheckbox>
        <NButton quaternary @click="toLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </NButton>
      </div>

      <NButton type="primary" size="large" round block :loading="authStore.loginLoading" @click="handleSubmit">
        {{ $t('common.confirm') }}
      </NButton>

      <div class="flex-y-center justify-between gap-12px">
        <NButton class="flex-1" block @click="toLoginModule('code-login')">
          {{ $t(loginModuleRecord['code-login']) }}
        </NButton>
        <NButton class="flex-1" block @click="toLoginModule('register')">
          {{ $t(loginModuleRecord.register) }}
        </NButton>
      </div>

      <!-- third party login -->
      <NDivider class="text-14px text-#666 !m-0">{{ $t('page.login.pwdLogin.otherAccountLogin') }}</NDivider>
      <div class="flex-center gap-12px">
        <NButton v-for="item in thirdParties" :key="item.type" type="primary" @click="handleThirdPartyLogin(item.type)" circle secondary>
          <template #icon>
            <FaSvgIcon :icon="item.icon" />
          </template>
        </NButton>
      </div>
    </NSpace>
  </NForm>
</template>

<style scoped></style>
