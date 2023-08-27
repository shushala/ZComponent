# Tree 组件使用文档

## 引入组件

首先，确保已经正确引入 Tree 组件及其相关依赖。假设你已经通过 npm 或其他方式安装了相关依赖。

```vue
<template>
  <div>
    <!-- Tree 组件的使用 -->
    <ZTree
      :data="treeData"
      :defaultExpandedKeys="defaultExpandedKeys"
      :labelField="'label'"
      :childrenField="'children'"
      :keyField="'key'"
      :onLoad="loadChildren"
      :selectedKeys="selectedKeys"
      :selectable="true"
      :multiple="false"
      :defaultCheckedKeys="defaultCheckedKeys"
      :showCheckbox="true"
      @update:selectedKeys="handleSelectedKeysUpdate"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 假设这是你的 Tree 组件数据
const treeData = reactive([
  {
    key: 1,
    label: 'Node 1',
    children: [
      {
        key: 2,
        label: 'Node 1.1'
      },
      {
        key: 3,
        label: 'Node 1.2'
      }
    ]
  },
  {
    key: 4,
    label: 'Node 2'
  }
])

// 假设这是默认展开的节点 key 数组
const defaultExpandedKeys = ref([1])

// 假设这是默认选中的节点 key 数组
const selectedKeys = ref([])

// 假设这是默认选中的复选框节点 key 数组
const defaultCheckedKeys = ref([2])

// 加载子节点的回调函数，模拟异步加载
const loadChildren = node => {
  return new Promise(resolve => {
    setTimeout(() => {
      const childrenData = [
        {
          key: 5,
          label: 'Async Node 1'
        },
        {
          key: 6,
          label: 'Async Node 2'
        }
      ]
      resolve(childrenData)
    }, 1000)
  })
}

// 更新选中节点的回调函数
const handleSelectedKeysUpdate = keys => {
  selectedKeys.value = keys
}
</script>
```

## 属性说明

| 属性名              | 类型                  | 默认值     | 说明                                                                                                   |
| ------------------- | --------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| data                | Array\<TreeDataItem\> | []         | Tree 组件的数据，数组形式，每个元素表示一个节点。                                                      |
| defaultExpandedKeys | Array\<Key\>          | []         | 默认展开的节点的 key 数组。                                                                            |
| labelField          | String                | 'label'    | 数据项中表示节点文本的字段名。                                                                         |
| childrenField       | String                | 'children' | 数据项中表示子节点的字段名。                                                                           |
| keyField            | String                | 'key'      | 数据项中表示节点唯一标识的字段名。                                                                     |
| onLoad              | Function              | undefined  | 异步加载子节点的回调函数，接收一个节点作为参数，返回一个 Promise，resolve 后返回包含子节点数据的数组。 |
| selectedKeys        | Array\<Key\>          | []         | 默认选中的节点的 key 数组。                                                                            |
| selectable          | Boolean               | true       | 是否允许节点被选中。                                                                                   |
| multiple            | Boolean               | false      | 是否允许多选节点。                                                                                     |
| defaultCheckedKeys  | Array\<Key\>          | []         | 默认选中复选框的节点的 key 数组。                                                                      |
| showCheckbox        | Boolean               | false      | 是否显示复选框。                                                                                       |

## 事件说明

| 事件名              | 参数          | 说明                                                                                          |
| ------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| update:selectedKeys | (keys: Key[]) | 当选中节点发生变化时触发的事件，参数为选中节点的 key 数组。可以通过该事件实现选中节点的同步。 |

## 插槽说明

Tree 组件支持以下插槽：

- 默认插槽：用于自定义每个节点的内容。通过默认插槽可以实现对每个节点的内容进行自定义渲染。

## 使用示例

1. 最简单的 Tree 组件使用：

```vue
<template>
  <div>
    <ZTree :data="treeData" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// 假设这是你的 Tree 组件数据
const treeData = reactive([
  {
    key: 1,
    label: 'Node 1',
    children: [
      {
        key: 2,
        label: 'Node 1.1'
      },
      {
        key: 3,
        label: 'Node 1.2'
      }
    ]
  },
  {
    key: 4,
    label: 'Node 2'
  }
])
</script>
```

2. 自定义节点内容和事件处理：

```vue
<template>
  <div>
    <ZTree :data="treeData">
      <template #default="{ node }">
        <!-- 自定义节点内容 -->
        <span>{{ node.label }}</span>
        <button @click="handleButtonClick(node)">Click Me</button>
      </template>
    </ZTree>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// 假设这是你的 Tree 组件数据
const treeData = reactive([
  {
    key: 1,
    label: 'Node 1',
    children: [
      {
        key: 2,
        label: 'Node 1.1'
      },
      {
        key: 3,
        label: 'Node 1.2'
      }
    ]
  },
  {
    key: 4,
    label: 'Node 2'
  }
])

// 处理点击事件
const handleButtonClick = node => {
  console.log('Button Clicked for Node:', node)
}
</script>
```

3. 异步加载子节点：

```vue
<template>
  <div>
    <ZTree :data="treeData" :onLoad="loadChildren" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 假设这是你的 Tree 组件数据
const treeData = reactive([
  {
    key: 1,
    label: 'Node 1',
    children: [] // 初始时不包含子节点数据
  },
  {
    key: 4,
    label: 'Node 2'
  }
])

// 加载子节点的回调函数，模拟

异步加载
const loadChildren = node => {
  return new Promise(resolve => {
    setTimeout(() => {
      // 假设这是从服务器获取的子节点数据
      const childrenData = [
        {
          key: 5,
          label: 'Async Node 1'
        },
        {
          key: 6,
          label: 'Async Node 2'
        }
      ]
      resolve(childrenData)
    }, 1000)
  })
}
</script>
```
