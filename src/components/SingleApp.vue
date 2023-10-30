<script setup>
import { vDraggable } from '@neodrag/vue';
</script>

<template>

    <div class="w-[500px] resize" v-draggable="{ axis: 'both', bounds: 'body', handle: '.titleBar'}">
        <slot></slot>
    </div>

</template>