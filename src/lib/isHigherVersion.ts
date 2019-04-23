import { Platform } from 'react-native';

export default (version: number) => {
  const { Version } = Platform;
  let v = Version;

  if (typeof Version === "string") {
    v = parseInt(Version, 10);
  }

  return version >= v;
};
