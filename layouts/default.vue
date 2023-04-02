<template>
  <div class="main">
    <div class="header">
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
      </nav>
      <nav>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
      <nav>
          <NuxtLink to="/config">Config</NuxtLink>
        </nav>
      <nav>
        <NuxtLink to="/brands/sephora-collection">Brands - Sephora Collection</NuxtLink> 
      </nav>
      <nav>
        <NuxtLink to="/products/sephora-product">PDP</NuxtLink> 
      </nav>
    </div>
    <div class="application">
      <slot />
    </div>
    <footer class="footer">
      THIS IS FOOTER
    </footer>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
  width: 100%;
  background: yellow;
  padding: 20px;
}

.config {
  padding: 20px;
  background: #f0f0f0;
}

.header nav {
  display: inline-block;
  margin-right: 20px;
}

.footer {
  background: greenyellow;
  width: 100%;
  height: 200px;
  padding: 20px
}
</style>