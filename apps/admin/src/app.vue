<script setup lang="ts">
</script>

<template>
  <div>
    <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin">Admin</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin/about">Admin/about</RouterLink>
          </li>
        </ul>

        <button @click="$router.push('/admin')">Click</button>
      </nav>
    </div>
  </header>

  <RouterView />
  </div>
</template>

<style scoped>
ul {
  padding-left: 0;
}
ul > li {
  display: inline-block;
}

ul > li:not(:first-child) {
  margin-left: 0.5rem;
}

li > a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>