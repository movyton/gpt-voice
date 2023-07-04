const APIKeyProvider = {
  _APIKey: localStorage,

  set setSecretKey(value) {
    this._APIKey.setItem('APIKey', value)
  },

  get getSecretKey() {
    return this._APIKey.getItem('APIKey')
  },
}

export default APIKeyProvider
