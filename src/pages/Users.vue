<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="flex flex-center">
        <div class="column">
          <div class="col">
            <q-btn
              label="View all Users"
              color="primary"
              :to="{ name: 'All' }"
            />
          </div>
          <div class="col q-mt-sm">
            <q-btn
              label="Register"
              color="primary"
              :to="{ name: 'Register' }"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
