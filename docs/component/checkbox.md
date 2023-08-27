# Checkbox 组件文档说明

Checkbox 组件是一个用于显示和操作复选框的 Vue 组件。它支持多种属性和事件，用于自定义复选框的外观和行为。

## 属性

### modelValue (v-model)

- 类型: `Boolean | String | Number`
- 默认值: `false`

用于绑定复选框的选中状态。可以接受 Boolean 类型的值，也可以接受 String 或 Number 类型的值。

### indeterminate

- 类型: `Boolean`
- 默认值: `false`

设置复选框是否处于不确定状态。当设置为 `true` 时，复选框将显示一个中间状态，表示它的选中状态不确定。

### disabled

- 类型: `Boolean`
- 默认值: `false`

设置复选框是否禁用。当设置为 `true` 时，复选框将不可点击。

### label

- 类型: `String`
- 默认值: `''`

复选框的标签文本。可以通过这个属性为复选框添加文本说明。

## 事件

### update:modelValue

- 参数: `value: Boolean | String | Number`
- 返回值类型: `Boolean`

当复选框的选中状态发生变化时，会触发 `update:modelValue` 事件。接受一个参数 `value`，表示新的选中状态。返回值为布尔类型，表示是否成功更新选中状态。

### change

- 参数: `value: Boolean`
- 返回值类型: `Boolean`

在复选框的选中状态发生变化时，会触发 `change` 事件。接受一个参数 `value`，表示新的选中状态。返回值为布尔类型，表示是否成功更新选中状态。

## 示例

```vue
<template>
  <z-checkbox
    v-model="isChecked"
    :indeterminate="isIndeterminate"
    :disabled="isDisabled"
    label="我是复选框"
    @change="handleChange"
  ></z-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const isChecked = ref(false)
const isIndeterminate = ref(true)
const isDisabled = ref(false)

const handleChange = value => {
  console.log('选中状态已更改:', value)
}
</script>
```

这个示例展示了如何使用 Checkbox 组件，通过 `v-model` 绑定选中状态，设置不确定状态和禁用状态，并监听 `change` 事件来处理选中状态的变化。

## 注意事项

- `modelValue` 属性用于绑定选中状态，可以使用 `v-model` 指令实现双向数据绑定。
- 在设置 `indeterminate` 为 `true` 时，复选框会显示中间状态，表示选中状态不确定。
- 当复选框被禁用时，用户无法点击或更改其选中状态。
- `label` 属性可以为复选框添加文本标签，也可以使用默认的插槽来插入自定义内容。
- 通过监听 `change` 事件，您可以在选中状态发生变化时执行相应的操作。
