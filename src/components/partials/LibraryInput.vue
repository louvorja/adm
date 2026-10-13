<template>
  <div
    v-if="category == 'music'"
    class="input-group-text flex-fill d-flex flex-column"
    style="width: 10px"
  >
    <div
      v-if="loading_item"
      class="spinner-border spinner-border-sm ms-2"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <audio v-else-if="item.url" controls class="w-100" style="height: 32px">
      <source :src="item.url" />
      Audio não suportado
    </audio>

    <div
      v-if="error_item"
      class="d-block text-truncate text-start text-danger flex-fill small w-100"
    >
      {{ error_item }}
    </div>
    <div v-else class="d-block text-truncate text-start small w-100">
      {{ item.name ?? "" }}
    </div>
  </div>
  <div
    v-else
    class="input-group-text"
    style="width: 38px; height: 38px; padding: 3px"
  >
    <div
      v-if="loading_item"
      class="spinner-border spinner-border-sm ms-2"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <a v-else-if="item.url" :href="item.url" target="_blank">
      <img :src="item.url" style="width: 100%; height: 100%" />
    </a>
  </div>

  <div
    v-if="error_item && category !== 'music'"
    class="input-group-text text-danger flex-fill d-block text-truncate text-start"
  >
    {{ error_item }}
  </div>
  <div
    v-else-if="category !== 'music'"
    class="input-group-text flex-fill d-block text-truncate text-start"
  >
    {{ item.name ?? "" }}
  </div>

  <modal
    v-model="show_library"
    :busy="uploading"
    :title="
      'Biblioteca | ' +
      (category == 'image_album'
        ? 'Imagens de Capa'
        : category == 'image_music'
        ? 'Imagens'
        : category == 'music'
        ? 'Músicas'
        : '')
    "
    :buttons="{
      remove: { label: 'Remover Imagem', color: 'danger' },
    }"
    @button="button_library"
    @scroll="scroll"
  >
    <alert danger v-if="error">{{ error }}</alert>

    <form v-if="canUpload" class="border-bottom pb-3 mb-3" @submit.prevent="upload">
      <h6>Enviar arquivo</h6>
      <div class="row g-2 align-items-end">
        <div :class="category === 'music' ? 'col-12 col-md-5' : 'col-12 col-md-9'">
          <label :for="id + '-upload-file'" class="form-label">Arquivo</label>
          <input
            :id="id + '-upload-file'"
            ref="uploadInput"
            type="file"
            class="form-control"
            :accept="acceptedFiles"
            :disabled="uploading"
            required
            @change="chooseUpload"
          />
        </div>
        <template v-if="category === 'music'">
          <div class="col-5 col-md-2">
            <label :for="id + '-upload-language'" class="form-label">Idioma</label>
            <select :id="id + '-upload-language'" v-model="uploadLanguage" class="form-select" :disabled="uploading">
              <option value="pt">Português</option>
              <option value="es">Espanhol</option>
            </select>
          </div>
          <div class="col-7 col-md-3">
            <label :for="id + '-upload-folder'" class="form-label">Pasta do álbum</label>
            <input :id="id + '-upload-folder'" v-model="uploadFolder" class="form-control" placeholder="Avulsas" :disabled="uploading" maxlength="200" />
          </div>
        </template>
        <div :class="category === 'music' ? 'col-12 col-md-2' : 'col-12 col-md-3'">
          <button type="submit" class="btn btn-primary w-100" :disabled="uploading || !uploadFile">
            {{ uploading ? "Enviando…" : "Enviar e selecionar" }}
          </button>
        </div>
      </div>
      <div class="form-text">{{ uploadHelp }}</div>
      <alert danger v-if="uploadError" class="mt-2">{{ uploadError }}</alert>
    </form>

    <div
      v-if="data"
      class="d-flex flex-wrap align-items-center justify-content-between"
    >
      <div v-for="file in data" :key="file.id_file">
        <div
          v-if="category == 'music'"
          class="card border-left-primary shadow h-100 m-1"
          style="min-width: 350px"
        >
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-truncate d-block text-uppercase"
                >
                  {{ file.name }}
                </div>
                <div
                  class="text-xs text-muted font-weight-bold text-primary text-truncate d-block mb-1"
                >
                  {{ file.subdirectory }}
                </div>
                <div class="btn-toolbar">
                  <div class="ms-auto"></div>
                  <a
                    :href="file.url"
                    target="_blank"
                    type="button"
                    class="btn btn-sm btn-info mx-1"
                  >
                    Ouvir
                  </a>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary mx-1"
                    :disabled="uploading"
                    @click="selectFile(file)"
                  >
                    Selecionar
                  </button>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
        <a v-else href="javascript:" @click="selectFile(file)" class="m-2" :aria-disabled="uploading" :tabindex="uploading ? -1 : 0">
          <figure class="figure">
            <img
              :src="file.url"
              :alt="file.name"
              class="figure-img img-thumbnail"
              style="max-height: 130px"
            />
            <figcaption class="figure-caption text-center">
              {{ file.name }}
            </figcaption>
          </figure>
        </a>
      </div>
    </div>

    <div
      v-if="loading"
      class="d-flex align-items-center justify-content-center"
    >
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-if="next_page" class="p-4 w-100 text-center">
      <button class="btn btn-primary" @click="load()">Carregar mais</button>
    </div>
  </modal>

  <button
    v-if="value"
    class="btn btn-danger"
    type="button"
    @click="remove"
    :disabled="disabled"
  >
    <font-awesome-icon icon="x" />
  </button>
  <button
    class="btn btn-primary"
    type="button"
    @click="modal_library"
    :disabled="disabled"
  >
    <font-awesome-icon icon="search" />
  </button>
</template>

<script>
import Api from "@/services/Api";

import Modal from "@/components/Modal.vue";
import Alert from "@/components/Alert.vue";

export default {
  name: "LibraryInputComponent",
  components: {
    Modal,
    Alert,
  },
  inheritAttrs: false,
  props: {
    modelValue: Number,
    value: Number,
    id: String,
    category: String,
    language: String,
    disabled: Boolean,
  },
  data() {
    return {
      show_library: false,
      error: "",
      error_item: "",
      loading: false,
      loading_item: false,
      limit: 50,
      page: null,
      pages: null,
      next_page: 1,
      data: [],
      item: {},
      data_scroll: {},
      scroll_load: 50,
      uploadFile: null,
      uploadFolder: "",
      uploadLanguage: "pt",
      uploading: false,
      disposed: false,
      uploadError: "",
    };
  },
  computed: {
    canUpload() {
      const user = this.$store.getters.user ?? {};
      return !this.disabled && !user.is_temporary_password &&
        (user.is_admin || (user.permissions ?? []).includes("files.insert"));
    },
    acceptedFiles() {
      if (this.category === "music") return ".opus,.mp3";
      return this.category === "image_album" ? ".bmp" : ".jpg,.jpeg,.png,.bmp";
    },
    uploadHelp() {
      if (this.category === "music") return "Opus ou MP3, até 50 MB. O formato enviado será mantido.";
      if (this.category === "image_album") return "Capa em BMP, até 10 MB, para funcionar também no Delphi.";
      return "Imagem em JPEG, PNG ou BMP, até 10 MB.";
    },
  },
  watch: {
    value(value) {
      if (!value) {
        this.error_item = "";
        this.error = "";
        this.item = {};
      } else {
        this.load_item();
      }
    },
    show_library(value) {
      if (value) {
        this.load();
      }
    },
  },
  methods: {
    modal_library() {
      this.uploadLanguage = this.language === "es" ? "es" : "pt";
      this.uploadError = "";
      this.data = [];
      this.next_page = 1;
      this.show_library = true;
    },
    chooseUpload(event) {
      this.uploadFile = event.target.files[0] ?? null;
      this.uploadError = "";
    },
    upload() {
      if (!this.canUpload || this.uploading || !this.uploadFile) return;
      const maximum = (this.category === "music" ? 50 : 10) * 1024 * 1024;
      if (this.uploadFile.size === 0 || this.uploadFile.size > maximum) {
        this.uploadError = `Escolha um arquivo entre 1 byte e ${maximum / 1024 / 1024} MB.`;
        return;
      }
      const extension = this.uploadFile.name.slice(this.uploadFile.name.lastIndexOf(".")).toLowerCase();
      if (!this.acceptedFiles.split(",").includes(extension)) {
        this.uploadError = `Formato não aceito. ${this.uploadHelp}`;
        return;
      }
      const body = new FormData();
      body.append("file", this.uploadFile);
      body.append("type", this.category);
      if (this.category === "music") {
        body.append("id_language", this.uploadLanguage);
        body.append("dir", this.uploadFolder.trim() || "Avulsas");
      }
      this.uploadError = "";
      this.uploading = true;
      Api.post("admin/files", body, (success, result) => {
        if (this.disposed) return;
        this.uploading = false;
        const file = result.data;
        if (!success || !file || !Number.isSafeInteger(file.id_file) || typeof file.url !== "string") {
          const messages = result.messages && typeof result.messages === "object"
            ? Object.values(result.messages).flat().filter((message) => typeof message === "string").join("\n")
            : "";
          this.uploadError = messages || result.error || "Não foi possível enviar o arquivo. Tente novamente.";
          return;
        }
        this.uploadFile = null;
        if (this.$refs.uploadInput) this.$refs.uploadInput.value = "";
        this.selectFile(file);
      });
    },
    button_library(val) {
      if (val == "remove") {
        this.remove();
      }
    },
    scroll(value) {
      this.data_scroll = value;
      if (!this.loading && value.bottom <= this.scroll_load) {
        this.load();
      }
    },
    remove() {
      if (this.uploading) return;
      this.file = {};
      this.$emit("input", null);
      this.show_library = false;
    },
    load() {
      if (this.next_page && this.show_library) {
        let self = this;
        this.error = "";
        this.loading = true;
        Api.get(
          "admin/files",
          {
            type: this.category,
            limit: this.limit,
            page: this.next_page,
            sort_by: "id_file.desc",
          },
          function (resp, data) {
            self.loading = false;
            self.error = data.error ?? "";
            if (resp) {
              self.page = data.current_page;
              self.pages = data.last_page;
              self.next_page = data.next_page_url
                ? data.current_page + 1
                : null;
              self.data.push(...(data.data ?? []));
            }
          }
        );
      }
    },
    load_item() {
      let self = this;
      this.error_item = "";
      this.loading_item = true;
      Api.get("admin/files/" + this.value, {}, function (resp, data) {
        self.loading_item = false;
        self.error_item = data.error ?? "";
        if (resp) {
          self.item = data.data ?? {};
        }
      });
    },
    selectFile(file) {
      if (this.uploading) return;
      this.item = file;
      this.show_library = false;
      this.$emit("input", file.id_file);
    },
  },
  mounted() {},
  beforeUnmount() {
    this.disposed = true;
  },
};
</script>
