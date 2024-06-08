<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/request">Admin User Request</router-link></li>
        <li><router-link to="/join">Admin User Join</router-link></li>
        <li><router-link to="/login">Admin User login</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add your styles here */
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

router-link {
  text-decoration: none;
  color: #007bff;
}

router-link:hover {
  color: #0056b3;
}
</style>