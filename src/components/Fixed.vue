<template>
  <div id="dynamic-arguments-example" class="demo">
    <p>Scroll down the page</p>
    <p v-pin="value">Stick me {{ sticky }}px from the top of the page</p>
  </div>

  <div id="dynamicexample">
    <h3>Scroll down inside this section ↓</h3>
    <p v-direct:[direction]="100">😂 I am pinned onto the page at 100 to the {{ direction }}.</p>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      value:400,
      sticky:500,
      direction: 'right'
    }
  },
  directives: {
    pin: {
     mounted(el, binding) {
        el.style.position = 'fixed'
        // binding.value is the value we pass to directive - in this case, it's 200
        el.style.top = binding.value + 'px'
        l(el)
      }
    },
    direct: {
      mounted(el, binding) {
        el.style.position = 'fixed'
        // binding.arg is an argument we pass to directive
        const s = binding.arg || 'left'
        el.style['top'] = '200px'
        el.style[s] = binding.value + 'px'
      }
    }
  }
}
</script>

<style scoped>
/*#dynamicexample p {
  top:200px;
}*/
</style>

