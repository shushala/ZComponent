# Form 表单组件

`Form` 组件用于创建表单，可以用于收集用户输入并进行校验。以下是该组件的属性：

## 属性

- `model` (Object): 表单的数据模型，用于存储用户输入的数据。

- `rules` (Object): 表单校验规则对象，用于定义表单项的校验规则。规则对象的键是字段名，值是校验规则数组。

- `showMessage` (Boolean, 默认为 `true`): 控制是否显示错误信息。

## 使用示例

```vue
<template>
  <Form :model="formData" :rules="formRules">
    <!-- 表单项 -->
  </Form>
</template>

<script setup>
import { Form } from './path/to/FormComponent'

const formData = {
  // 初始化表单数据
}

const formRules = {
  // 定义校验规则
}
</script>
```

# Form-Item 表单项组件

`Form-Item` 组件用于创建表单项，通常用在 `Form` 组件内部。以下是该组件的属性：

## 属性

- `prop` (String): 表单项对应的数据模型中的字段名。

- `label` (String): 表单项的标题，用于标识该项的用途。

- `rules` (Array | Object): 表单项的校验规则。可以是单个规则对象或规则对象数组。

- `showMessage` (Boolean, 默认为 `true`): 控制是否显示错误信息。

## 使用示例

```vue
<template>
  <Form>
    <Form-Item prop="username" label="用户名" :rules="usernameRules">
      <input v-model="formData.username" />
    </Form-Item>
  </Form>
</template>

<script setup>
import { Form, FormItem } from './path/to/FormComponent'

const formData = {
  username: ''
}

const usernameRules = [
  // 定义校验规则
]
</script>
```
