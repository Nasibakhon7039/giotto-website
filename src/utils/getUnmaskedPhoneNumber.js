export const getUnmaskedPhoneNumber = (val) =>
  val.trim().replace(/_/g, '').replace(/\s/g, '')
