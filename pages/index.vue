<template>
  <v-main class="test">
    <v-container class="test__container">
      <v-tabs class="test__wrap-tab">
        <v-tab class="test__tab" @click.prevent="alignment = 'left', checkСapacity()">
          Выравнивание по левому краю
        </v-tab>
        <v-tab class="test__tab" @click.prevent="alignment = 'justify', checkСapacity()">
          Выравнивание по ширине
        </v-tab>
      </v-tabs>
      <v-tabs class="test__wrap-tab" center>
        <v-tab
          v-for="tab in tabArrResize"
          :key="tab.id"
          class="test__tab"
          @click.prevent="restrict = tab.value, checkСapacity()"
        >
          {{ tab.text }}
        </v-tab>
      </v-tabs>
      <v-row class="test__row">
        <v-col class="test__col" :cols="restrict">
          <base-tags class="test__tags " :tag-arr="tagArr" :alignment="alignment" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import checkСapacity from '@/plugins/checkСapacity'

export default {
  middleware: ['tagArr'],
  data () {
    return {
      alignment: 'left',
      restrict: 12,
      tabArrResize: [
        {
          text: 'Не ограничивать',
          value: 12
        },
        {
          text: 'Ограничить 1/6',
          value: 2
        },
        {
          text: 'Ограничить 1/4',
          value: 3
        },
        {
          text: 'Ограничить 1/3',
          value: 4
        },
        {
          text: 'Ограничить 1/2',
          value: 6
        },
        {
          text: 'Ограничить 3/4',
          value: 9
        }
      ]
    }
  },
  computed: {
    tagArr () {
      let tagArr = this.$store.getters['tagArr/getTagArr']
      tagArr = JSON.parse(JSON.stringify(tagArr))
      return tagArr
    }
  },
  methods: {
    checkСapacity () {
      // в связи с не стабильной работой рендера нужно делать небольшой таймаут;
      clearTimeout(checkСapacity)
      setTimeout(checkСapacity, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  &__row {
    width: 100%;
  }
}
</style>
