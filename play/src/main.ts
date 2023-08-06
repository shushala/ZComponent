import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@shushana/components/icon'
import '@shushana/theme-chalk/src/index.scss'
import Tree from '@shushana/components/tree/index'
import Checkbox from '@shushana/components/checkbox'
import Button from '@shushana/components/button'
import Input from '@shushana/components/input'
import { FormItem, Form } from '@shushana/components/Form'
import Upload from '@shushana/components/upload'
import Calendar from '@shushana/components/calendar'
import Virtual from '@shushana/components/virtual-scroll-list'
const plugins = [
  Icon,
  Tree,
  Checkbox,
  Button,
  Input,
  FormItem,
  Form,
  Upload,
  Calendar,
  Virtual
]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin)) // 将组件注册成了全局组件 ，可以直接使用了

app.mount('#app')
