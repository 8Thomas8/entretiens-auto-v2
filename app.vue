<script setup lang="ts">
const title = 'Entretiens-auto.com'
const metaDescription = 'Meta description à rédiger'
</script>

<template>
  <div>
    <Head>
      <Title :content="title"/>
      <Meta name="description" :content="metaDescription"/>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet">
    </Head>

    <Html class="bg-gray-50">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    </Html>
  </div>
</template>