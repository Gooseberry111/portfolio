<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import { usePageEnter } from "../composables/usePageEnter";

const props = defineProps({
  email: { type: String, required: true },
  links: { type: Array, required: true },
  active: { type: Boolean, required: true },
});

const root = ref(null);
usePageEnter(root, () => props.active);

// --- EmailJS config ---
const SERVICE_ID = "service_x2uvep1";
const TEMPLATE_ID = "template_z8oblzc";
const PUBLIC_KEY = "jB--qDRHvurNscBeo";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const status = ref("idle"); // idle | sending | success | error

async function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) return;

  status.value = "sending";

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
      },
      { publicKey: PUBLIC_KEY },
    );

    status.value = "success";
    form.value = { name: "", email: "", message: "" };

    setTimeout(() => {
      status.value = "idle";
    }, 4000);
  } catch (err) {
    console.error("EmailJS error:", err);
    status.value = "error";

    setTimeout(() => {
      status.value = "idle";
    }, 4000);
  }
}
</script>

<template>
  <section
    ref="root"
    class="flex h-screen w-screen shrink-0 flex-col items-center justify-center gap-8 px-8 lg:flex-row lg:gap-30"
  >
    <!-- Left: info card -->
    <div
      class="stagger-item flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md"
    >
      <h2 class="text-2xl font-medium text-white">Let's talk</h2>
      <a
        :href="`mailto:${email}`"
        class="text-sm text-white/60 transition-colors hover:text-amber-200"
      >
        {{ email }}
      </a>
      <div class="flex gap-4 pt-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-white/50 transition-colors hover:text-amber-200"
        >
          {{ link.label }}
        </a>
      </div>
    </div>

    <div class="h-2/3 w-px bg-white/10"></div>

    <!-- Right: contact form -->
    <form
      @submit.prevent="handleSubmit"
      class="stagger-item flex w- max-w-sm flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-md"
    >
      <div class="flex flex-col gap-1.5">
        <label for="name" class="text-xs text-white/50">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-amber-200/50"
          placeholder="Your name"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="email" class="text-xs text-white/50">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-amber-200/50"
          placeholder="you@example.com"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label for="message" class="text-xs text-white/50">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="4"
          class="resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-amber-200/50"
          placeholder="What's on your mind?"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="status === 'sending'"
        class="mt-2 rounded-lg bg-amber-200/90 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {{ status === "sending" ? "Sending..." : "Send message" }}
      </button>

      <p v-if="status === 'success'" class="text-center text-xs text-green-300">
        Message sent — thank you!
      </p>
      <p v-if="status === 'error'" class="text-center text-xs text-red-300">
        Something went wrong. Please try again.
      </p>
    </form>
  </section>
</template>
