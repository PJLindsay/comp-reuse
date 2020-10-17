import { ref } from 'vue'

export default function useAlert() {
  const alertIsVisible = ref(false);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  // we can return array or Object
  return [
    alertIsVisible,
    showAlert,
    hideAlert
  ];

}