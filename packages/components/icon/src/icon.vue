<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from "vue";
import { createNamespace } from "../../../utils/create";
import { iconProps } from "./icon";
const bem = createNamespace("icon");

defineOptions({ name: "HIcon" });

const props = defineProps(iconProps);
console.log('props=====', props)

const style = computed<CSSProperties>(() => {
  if (!props.color && !props.size) {
    return {};
  }
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>
