<template>
  <div>
    <HIcon color="#B1B2FF" size="40" >
      <AccessibilityOutline />
    </HIcon>

    <HIcon color="#AAC4FF" size="40">
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

    <HIcon color="red" size="40"><CashOutline /></HIcon>
  </div>
</template>

<script setup lang="ts">
import { AccessibilityOutline, ArrowRedoOutline, CashOutline } from '@vicons/ionicons5';
const handleClick = () => {
  alert(1);
};
</script>
