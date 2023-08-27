# Input 组件使用文档说明

## 导入组件

```vue
<template>
  <!-- Input 组件代码... -->
</template>

<script setup>
// 导入必要的依赖和属性
import { inputProps, inputEmits } from './input'
</script>
```

## Props

以下是 Input 组件的可用属性及其默认值：

| 属性名称     | 类型    | 默认值 | 说明                                                    |
| ------------ | ------- | ------ | ------------------------------------------------------- |
| type         | String  | 'text' | 输入框类型，支持 'text' 和 'password'。                 |
| modelValue   | String  | ''     | 输入框的值，可使用 `v-model` 绑定。                     |
| placeholder  | String  | ''     | 输入框的占位符文本。                                    |
| disabled     | Boolean | false  | 是否禁用输入框。                                        |
| readonly     | Boolean | false  | 是否将输入框设置为只读状态。                            |
| clearable    | Boolean | false  | 是否显示清除按钮，点击按钮可以清空输入框的值。          |
| showPassword | Boolean | false  | 是否显示密码切换按钮，用于切换密码输入框显示/隐藏密码。 |
| label        | String  | ''     | 输入框的标签文本，通常用于表单的字段名称。              |

## Events

以下是 Input 组件触发的事件：

| 事件名称          | 说明                                                    |
| ----------------- | ------------------------------------------------------- |
| update:modelValue | 输入框的值发生改变时触发，可使用 `v-model` 绑定该事件。 |
| input             | 输入框的值发生改变时触发，用法同 `update:modelValue`。  |
| change            | 输入框的值发生改变时触发，仅在输入框失去焦点后触发。    |
| blur              | 输入框失去焦点时触发。                                  |
| focus             | 输入框获得焦点时触发。                                  |
| clear             | 点击清除按钮时触发，用于清空输入框的值。                |

## 使用示例

### 基本用法

```vue
<template>
  <z-input v-model="inputValue" placeholder="请输入内容"></z-input>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

### 密码输入框

```vue
<template>
  <z-input
    v-model="passwordValue"
    type="password"
    showPassword
    placeholder="请输入密码"
  ></z-input>
</template>

<script setup>
import { ref } from 'vue'

const passwordValue = ref('')
</script>
```

### 禁用输入框

```vue
<template>
  <z-input v-model="inputValue" disabled placeholder="禁用状态"></z-input>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

### 只读输入框

```vue
<template>
  <z-input v-model="inputValue" readonly placeholder="只读状态"></z-input>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

### 带标签的输入框

```vue
<template>
  <z-input
    v-model="inputValue"
    label="用户名"
    placeholder="请输入用户名"
  ></z-input>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

### 带清除按钮的输入框

```vue
<template>
  <z-input v-model="inputValue" clearable placeholder="可清除内容"></z-input>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

### 密码切换按钮

```vue
<template>
  <z-input
    v-model="passwordValue"
    type="password"
    showPassword
    placeholder="请输入密码"
  ></z-input>
</template>

<script setup>
import { ref } from 'vue'

const passwordValue = ref('')
</script>
```
