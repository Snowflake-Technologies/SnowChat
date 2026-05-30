export function generateInviteCode() {

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "SNOW-";

  for (
    let i = 0;
    i < 8;
    i++
  ) {

    result +=
      chars[
        Math.floor(
          Math.random() *
          chars.length
        )
      ];

  }

  return result;
}
