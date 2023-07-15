<!-- # Basic Component 1

<preview path="../example/icon/index.vue" title="基本使用" description="xxxxx"></preview> -->

# Button 按钮

<div>常用的操作按钮</div>

:::demo 使用`type`，`plain`，`round`来定义 Button 的样式
```vue
<template>
  <div>
    <HIcon color="#B1B2FF" size="40" >
      <p>hhh</p>
      <!-- <AccessibilityOutline /> -->
    </HIcon>

    <!-- <HIcon color="#AAC4FF" size="40">
      <AccessibilityOutline />
    </HIcon>

    <HIcon color="#D2DAFF" size="40">
      <AccessibilityOutline />
    </HIcon>

    <HIcon color="#EBC7E8" size="60">
      <ArrowRedoOutline />
    </HIcon>

    <HIcon color="#645CAA" size="60"><ArrowRedoOutline /></HIcon>

    <HIcon color="#A084CA" size="60"><ArrowRedoOutline /></HIcon>

    <HIcon color="red" size="40"><CashOutline /></HIcon> -->
  </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
// import { AccessibilityOutline, ArrowRedoOutline, CashOutline } from '@vicons/ionicons5';
const handleClick = () => {
  alert(1);
};
</script>
```
:::
