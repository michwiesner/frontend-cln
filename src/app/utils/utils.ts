import { IBranch } from "@/app/interfacesAndTypes/accounts";

export const reduceByDistance = (branches: IBranch[]) =>
  branches.reduce(
    (accum: IBranch, branch: IBranch) =>
      accum.location < branch.location ? accum : branch,
    {} as IBranch
  );

export const getLocation = (branches: IBranch[]) => {
  const nearestLocation = reduceByDistance(branches).location;
  const oneKmInM = 1000;

  return nearestLocation > oneKmInM
    ? `${(nearestLocation / oneKmInM).toFixed(2)} km`
    : `${nearestLocation} m`;
};
