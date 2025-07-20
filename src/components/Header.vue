<template>
  <header class="header">
        <div class="logo-title">
<img src="https://hongsokhearcambobida.github.io/vueproject/logo.png" width="60" height="60"/>
    <h1>ក្រុមហ៊ុន កាក់ ឯ.ក KAG Co., LTD</h1>
  </div>
    <nav>
      <a href="#">ទំព័រដេីម</a>
      <a href="#">អំពីពួកយេីង</a>
      <a href="#">សេវាកម្ម</a>
      <a href="#">ទំនាក់ទំនង</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #003366;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
nav a {
  margin: 2 5px;
  color: white;
  text-decoration: none;
}
.logo-title {
  display: flex;
  align-items: center;
}

.logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin-right: 15px; /* This adds horizontal space between image and text */
}

h1 {
  font-size: 28px;
}
nav {
  display: flex;
  gap: 25px; /* space between links */
  align-items: center;
  font-weight: 600;
  font-size: 16px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover {
  background-color: #0059b3; /* lighter blue background on hover */
  color: #fff;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

nav a:focus {
  outline: 2px solid #3399ff;
  outline-offset: 2px;
}
</style>
