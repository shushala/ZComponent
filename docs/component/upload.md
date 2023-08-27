# Upload 组件使用说明

## 导入组件

首先，导入 `Upload` 组件及其相关依赖：

```vue
<script setup>
import { createNamespace } from '@shushana/utils/create'
import UploadContent from './upload-content.vue'
import { uploadProps } from './upload'
import { computed } from 'vue'
import { UploadContentProps } from './upload-content'
</script>
```

## 基本用法

使用 `<z-upload>` 组件进行文件上传：

```vue
<template>
  <z-upload>
    <button>点击上传</button>
  </z-upload>
</template>
```

## Props

以下是 `<z-upload>` 组件可用的属性：

| 属性名称 | 类型    | 默认值 | 说明                                     |
| -------- | ------- | ------ | ---------------------------------------- |
| FileList | Array   | []     | 上传的文件列表，包含上传的文件信息。     |
| action   | String  | ''     | 文件上传的后端接口地址。                 |
| multiple | Boolean | false  | 是否允许多文件上传。                     |
| name     | String  | 'file' | 上传文件时使用的字段名。                 |
| accept   | String  | ''     | 接受上传的文件类型，用于文件选择对话框。 |
| method   | String  | 'post' | 文件上传的 HTTP 方法。                   |
| headers  | Object  | {}     | 文件上传的请求头信息。                   |
| data     | Object  | {}     | 文件上传的附加数据，一般用于传递参数。   |
| drag     | Boolean | false  | 是否启用文件拖拽上传功能。               |

## Events

以下是 `<z-upload>` 组件触发的事件：

| 事件名称   | 说明                                               |
| ---------- | -------------------------------------------------- |
| onStart    | 上传文件开始时触发，可用于处理文件上传前的操作。   |
| onProgress | 上传文件进度更新时触发，用于显示上传进度。         |
| onSuccess  | 上传文件成功时触发，可用于处理上传成功后的操作。   |
| onError    | 上传文件失败时触发，可用于处理上传失败后的操作。   |
| onChange   | 上传文件状态改变时触发，可用于处理文件状态的变化。 |
| onRemove   | 删除上传文件时触发，可用于处理文件删除后的操作。   |

## Slots

`<z-upload>` 组件支持默认插槽，用于自定义上传按钮或其他内容：

```vue
<template>
  <z-upload>
    <button>点击上传</button>
  </z-upload>
</template>
```

## 使用示例

以下是一个完整的 `<z-upload>` 组件的使用示例：

```vue
<template>
  <z-upload
    :FileList="fileList"
    action="/upload"
    multiple
    @onSuccess="onSuccess"
  >
    <button>点击上传</button>
  </z-upload>
  <div v-for="(file, index) in fileList" :key="file.uid">
    <span>{{ file.name }}</span>
    <button @click="handleRemove(index)">删除</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileList = ref([])

const onSuccess = (response, uploadFile) => {
  console.log('文件上传成功:', response)
  fileList.value.push({
    uid: uploadFile.uid,
    name: uploadFile.name,
    url: response.url
  })
}

const handleRemove = index => {
  fileList.value.splice(index, 1)
}
</script>
```
