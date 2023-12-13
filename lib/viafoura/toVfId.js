export function toVfId(uuid) {
  const headIndex = 22;
  const tailIndex = 24;
  const hexRadix = 16;
  const combined = uuid[headIndex] + uuid.substring(tailIndex);
  return parseInt(combined, hexRadix);
}
