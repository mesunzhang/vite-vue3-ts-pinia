import lodash from 'lodash'
import { onUnmounted } from "vue";
export function lodashFunction(func: Function, time: number = 300) {
  const lodashDebounce = lodash.debounce(func, time)
  onUnmounted(() => {
    lodashDebounce.cancel() // 这东西需要取消？
  })
  return lodashDebounce
}
