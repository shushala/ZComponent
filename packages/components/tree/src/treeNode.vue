<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSeleted),
      bem.is('disabled', node.disabled)
    ]"
  >
    <div
      :class="[bem.e('content')]"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf)
        ]"
        @click="handleExpand"
      >
        <z-icon size="25">
          <Switcher v-if="!isLoading"></Switcher>
          <Loading v-else></Loading>
        </z-icon>
      </span>

      <z-checkbox
        v-if="showCheckbox"
        :disabled="disabled"
        :model-value="checked"
        :indeterminate="indeterminate"
        @change="handleCheckChange"
      ></z-checkbox>
      <span @click="handleSeleted" :class="bem.e('label')">
        <ZTreeNodeContent :node="node"></ZTreeNodeContent>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Switcher from '@shushana/components/internal-icon/Switcher'
import ZIcon from '@shushana/components/icon'
import { createNamespace } from '@shushana/utils/create'
import { treeNodeEmitts, treeNodeProps } from './tree'
import Loading from '@shushana/components/internal-icon/Loading'
import { computed } from 'vue'
import ZTreeNodeContent from './tree-node-content'
import ZCheckbox from '@shushana/components/checkbox'
const bem = createNamespace('tree-node')
const props = defineProps(treeNodeProps)

const emit = defineEmits(treeNodeEmitts)
function handleExpand() {
  emit('toggle', props.node)
}
const isLoading = computed(() => {
  return props.loadingKeys.has(props.node.key)
})

const isSeleted = computed(() => {
  return props.selectedKeys.includes(props.node.key)
})
function handleSeleted() {
  if (props.node.disabled) return
  emit('select', props.node)
}
function handleCheckChange(val: boolean) {
  emit('check', props.node, val)
}
</script>
