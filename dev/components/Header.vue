<template>
  <div class="text-center py-5">
      <h1 class="h1 py-2">{{h1title}}</h1>
      <h2 class="h3 py-2">{{h2dec}}</h2>
  </div>
</template>

<script>
export default {
    props:{
      h1title:{
        default(){
          return "آقای رهگذر"
        }}
    ,h2dec:{
      default(){
        return "تست"
      }
    }}
}
</script>
