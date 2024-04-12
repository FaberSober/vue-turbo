<script lang="ts" setup></script>

<template>
  <FaAdminLayout>
    <template #header>
      <div>header</div>
    </template>
    <template #tab>
      <div>tab</div>
    </template>
    <template #sider>
      <div>sider</div>
    </template>
    <RouterView />
    <template #footer>
      <div>footer</div>
    </template>
  </FaAdminLayout>
</template>
