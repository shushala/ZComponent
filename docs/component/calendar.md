# Calendar 组件文档说明

## 概述

`Calendar` 组件是一个日期选择器，用于展示日历并允许用户选择日期。该组件提供了多个属性和事件，以及一些相关的类型和计算属性，使其更具定制性和灵活性。

## 导入

```vue
<template>
  <!-- 组件内容 -->
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import ZButton from '@shushana/components/button'
import dayjs from 'dayjs'
import {
  CalendarDateCell,
  CalendarDateType,
  calendarProps,
  calendarEmits,
  CalendarDateCellType
} from './calendar'
// ...其他导入

const props = defineProps(calendarProps)
const emit = defineEmits(calendarEmits)
// ...组件逻辑
</script>
```

## 属性

### `modelValue` (v-model)

- **类型**: `Date`
- **说明**: 用于双向绑定选中的日期。组件会根据这个属性的值来初始化选中的日期。

### `range`

- **类型**: `Array<[Date, Date]>`
- **说明**: 日期范围数组，用于限制可选的日期范围。数组包含开始和结束日期，只允许选择在这个范围内的日期。

## 事件

### `update:modelValue`

- **参数**: `Date`
- **说明**: 当选中的日期发生变化时触发。参数是新选中的日期。

## 计算属性

### `weekDays`

- **类型**: `Array<string>`
- **说明**: 根据用户设定的星期起始日计算的一周的天数标签，用于表头显示。

### `rows`

- **类型**: `Array<Array<CalendarDateCell>>`
- **说明**: 一个包含日期信息的二维数组，表示一个日历的所有日期格子。用于在日历表格中展示日期。

### `currentDate`

- **类型**: `string`
- **说明**: 当前选中的日期的格式化文本，以"年-月-日"格式展示。

## 方法

### `selectDate(type: CalendarDateType)`

- **参数**: `type` - `CalendarDateType`
- **说明**: 根据给定的类型选择日期。类型包括 'prev-month', 'next-month', 'prev-year', 'next-year' 和 'today'，用于在日历面板中切换不同的日期。

### `handlePick(cell: CalendarDateCell)`

- **参数**: `cell` - `CalendarDateCell`
- **说明**: 处理用户点击日期格子的操作，更新选中的日期。

## 插槽

### `date-cell`

- **作用域插槽**:
  - `data` - 一个对象，包含有关当前日期格子的信息。包括 `isSelected`（是否选中）、`day`（日期的格式化字符串）、`date`（日期的 JavaScript Date 对象）和 `type`（日期格子的类型）属性。

## 示例

```vue
<template>
  <div>
    <Calendar
      v-model="selectedDate"
      :range="[minDate, maxDate]"
      @update:modelValue="updateSelectedDate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Calendar from './Calendar.vue' // 你的 Calendar 组件的路径

const selectedDate = ref(new Date())
const minDate = new Date(2023, 0, 1) // 2023 年 1 月 1 日
const maxDate = new Date(2023, 11, 31) // 2023 年 12 月 31 日

const updateSelectedDate = newDate => {
  selectedDate.value = newDate
}
</script>
```

## 注意事项

- 请确保在使用组件前，已经按照组件的要求导入所需的依赖和类型。
- 可以通过 `v-model` 和 `@update:modelValue` 来实现日期的双向绑定。
- 可以通过设置 `range` 属性来限制可选日期的范围。
- 使用 `slot` 来自定义日期格子的显示内容和样式。
