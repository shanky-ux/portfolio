<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import emailjs from '@emailjs/browser';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_ADMIN_TEMPLATE_ID,
  EMAILJS_AUTO_REPLY_TEMPLATE_ID,
  TEMPLATE_PARAMS
} from '../content/emailjs';
import { t } from '../i18n/utils/translate';

const isOpen = ref(false);
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle');
const errorMessage = ref('');

const open = () => {
  isOpen.value = true;
  status.value = 'idle';
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};
const close = () => {
  isOpen.value = false;
};

// Lock scroll
watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.subject || !form.message) {
    status.value = 'error';
    errorMessage.value = t('fill-fields');
    return;
  }

  if (!validateEmail(form.email)) {
    status.value = 'error';
    errorMessage.value = t('invalid-email');
    return;
  }

  status.value = 'sending';
  try {
    const params = {
      [TEMPLATE_PARAMS.FROM_NAME]: form.name,
      [TEMPLATE_PARAMS.FROM_EMAIL]: form.email,
      [TEMPLATE_PARAMS.MESSAGE]: `Subject: ${form.subject}\n\n${form.message}`,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_ADMIN_TEMPLATE_ID,
      params,
      EMAILJS_PUBLIC_KEY
    );

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_AUTO_REPLY_TEMPLATE_ID,
      params,
      EMAILJS_PUBLIC_KEY
    );

    status.value = 'success';
  } catch (error) {
    console.error('EmailJS error:', error);
    status.value = 'error';
    errorMessage.value = t('failed-error');
  }
};

defineExpose({ open, close });
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="close">
    <div class="modal-container">
      <button class="close-btn" @click="close" :aria-label="t('close')">&times;</button>
      <h2>{{ t('get-in-touch') }}</h2>
      <form v-if="status !== 'success'" @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" :placeholder="t('name')" />
        <input v-model="form.email" type="email" :placeholder="t('email')" />
        <input v-model="form.subject" type="text" :placeholder="t('subject')" />
        <textarea v-model="form.message" :placeholder="t('message')"></textarea>

        <button type="submit" class="send-btn" :disabled="status === 'sending'">
          {{ status === 'sending' ? t('sending') : t('send') }}
        </button>

        <p v-if="status === 'error'" class="error-msg">{{ errorMessage }}</p>
      </form>
      <div v-else class="success-msg">
        {{ t('sent-success') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: #f5f5dc; /* Beige */
  padding: 30px;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  position: relative;
  font-family: 'Urbanist', sans-serif;
  color: #333;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

input, textarea {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-family: inherit;
}

.send-btn {
  background: #ffa500; /* Orange */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: bold;
}

.error-msg { color: red; font-size: 14px; }
.success-msg { text-align: center; font-size: 18px; color: green; }
</style>
