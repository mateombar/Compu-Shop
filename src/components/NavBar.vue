<template>
  <div id="navbar">
    <nav class="navbar navbar-light bg-light">
      <router-link to="/">
        <a class="navbar-brand">CompuShop</a>
      </router-link>
      <router-link to="/">
        <a class="navbar-link">Tools</a>
      </router-link>

      <form class="form-inline ">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  </div>
</template>
