import { ref } from 'vue'

// NICE BONUS of composables (custom hooks can take arguments: e.g. startVisibility)
export default function useAlert(startVisibility = false) {
  const alertIsVisible = ref(startVisibility);

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