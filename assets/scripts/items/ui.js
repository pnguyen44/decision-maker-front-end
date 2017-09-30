'use strict'
const store = require('../store')
// const itemsEvents = require('./events')
const listsEvents = require('../lists/events')
const onSuccess = function (data) {
}
const onError = function () {
}
const onCreateSuccess = function (data) {
  store.item = data.item
  listsEvents.getLists()
}

const getItemsSuccess = function (data) {
  store.items = data.items
}

const getOneItemSuccess = function (data) {
  store.item = data.item
}

const onUpdateSuccess = function () {
  $('#edit-item').modal('hide')
  listsEvents.getLists()
}
const onDeleteSuccess = function (id) {
  $('#item-id-' + id).remove()
}
module.exports = {
  onCreateSuccess,
  onError,
  onUpdateSuccess,
  onSuccess,
  getOneItemSuccess,
  getItemsSuccess,
  onDeleteSuccess
}
