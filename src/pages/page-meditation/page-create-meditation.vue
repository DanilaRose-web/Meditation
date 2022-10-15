<template>
    <div class="content-wrap create-meditation-content-wrap">
        <section-title>
            <template slot="icon"><svg @click="$router.back()"><use xlink:href="/assets/img/svg-sprite.svg#arrow-back"></use></svg></template>
            <template slot="title">Добавление медитации</template>
            <languages-block>
                <section-button class="lang-btn active">RU</section-button>
                <section-button class="lang-btn">RO</section-button>
                <section-button class="lang-btn">EN</section-button>
            </languages-block>
        </section-title>

        <div class="form">
            <div class="form-item">
                <ui-input 
                    :placeholder="'Название медитации'" 
                    :label="'Название'"
                    :type="'text'" 
                    :id="'name'" 
                    :required="true"
                    v-model="name"
                    :showError="false"
                    :noMargin="true"
                    @keydown.enter="$emit('serchResult', search)"
                />
            </div>

            <div class="form-item">
                <ui-textarea 
                    :label="'Описание'"
                    v-model="description"
                    :placeholder="'Описание медитации'"
                    :type="'text'" 
                />
            </div>

            <!-- <div class="upload-image">
                <div class="add-image">
                    <image-preview-modal v-if="!imageUpload"
                        ref="crop" 
                        v-model="image" 
                        :one-image=true
                        :aspect-ratio=289/450 
                        :el-hight=105 @input="addImg" />
                    </div>

                <div class="flex-block">
                    <div>
                        
                        <div style="width:100%;" v-if="imageArray">
                            <div class="img m-2">
                                <div class="close pointer" @click="removeInnerImage()">
                                    <img src="assets/img/del-img.svg" alt="">
                                </div>
                                <crop-image-preview
                                    id="crop_preview"
                                    ref="croppreview"
                                    :el-height="150"
                                    :crop-params="imageArray.cropImg"
                                    :aspect-ratio="289 / 450">
                                </crop-image-preview>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>    -->
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class CreateMeditationComponent extends Vue {

    name: string = ''
    description: string = ''
    // image: ImagePreviewModel = null
}
</script>

<style lang="less">

.create-meditation-content-wrap {
    max-width: 800px;
}



.form {
    margin-top: 30px;
}

.form-item {
    margin-bottom: 14px;
}
.content-wrap .form .control-input .form-control {
    padding-left: 15px;
}
.content-wrap .form .control-input label, .content-wrap .form .ui-textarea label {
    margin-bottom: 5px;
    font-family: 'Proxima Nova', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #586174;
}
</style>