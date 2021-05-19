export function close_mobile_header () {
    this.$store.commit('setMobileHeaderShow', false)
}
export function open_mobile_header () {
    this.$store.commit('setMobileHeaderShow', true)
}